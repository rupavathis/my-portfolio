'use client';

import React, { useState, useRef, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import * as d3 from 'd3-force';
import { 
  Home, Network, Sparkles, Activity, ArrowRight,
  RefreshCcw, BookOpen, Search, Share2, Check,
  Mail, MessageSquare, Users2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const DEFAULT_TEXT = "Antonio, a wealthy merchant of Venice, is deeply devoted to his close friend Bassanio. When Bassanio desperately needs money to woo the beautiful heiress Portia, Antonio agrees to act as a guarantor for a loan. Because Antonio's wealth is tied up in trade ships, they borrow this money from Shylock, a bitter moneylender who holds a long-standing grudge against Antonio. Meanwhile, Shylock's daughter, Jessica, decides to elope with Lorenzo, who is another close friend of Bassanio. Eventually, Bassanio successfully marries Portia. When Antonio defaults on the loan, Portia disguises herself as a brilliant lawyer to defend Antonio in court, ultimately saving his life from Shylock's cruel demand.";

const MERCHANT_DATA = {
  nodes: [
    { id: 'Antonio', type: 'Merchant' }, { id: 'Bassanio', type: 'Friend' }, { id: 'Portia', type: 'Heiress' }, { id: 'Shylock', type: 'Moneylender' }, { id: 'Jessica', type: 'Daughter' }, { id: 'Lorenzo', type: 'Friend' },
  ],
  links: [
    { source: 'Antonio', target: 'Bassanio', label: 'friend / guarantor' }, { source: 'Bassanio', target: 'Portia', label: 'suitor / husband' }, { source: 'Antonio', target: 'Shylock', label: 'owes money / rival' }, { source: 'Shylock', target: 'Jessica', label: 'father' }, { source: 'Jessica', target: 'Lorenzo', label: 'elopes' }, { source: 'Lorenzo', target: 'Bassanio', label: 'friend' }, { source: 'Portia', target: 'Antonio', label: 'defends / saves' },
  ]
};

const COLORS = { Merchant: '#3b82f6', Friend: '#10b981', Heiress: '#6366f1', Moneylender: '#f43f5e', Daughter: '#f59e0b' };

const getViridisColor = (t: number, opacity: number = 0.25) => {
  const stops = [
    { t: 0.0, r: 68, g: 1, b: 84 },
    { t: 0.25, r: 59, g: 82, b: 139 },
    { t: 0.5, r: 33, g: 145, b: 140 },
    { t: 0.75, r: 94, g: 201, b: 98 },
    { t: 1.0, r: 253, g: 231, b: 37 }
  ];
  let lower = stops[0];
  let upper = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (t >= stops[i].t && t <= stops[i + 1].t) {
      lower = stops[i];
      upper = stops[i + 1];
      break;
    }
  }
  const range = upper.t - lower.t;
  const fraction = range === 0 ? 0 : (t - lower.t) / range;
  const r = Math.round(lower.r + (upper.r - lower.r) * fraction);
  const g = Math.round(lower.g + (upper.g - lower.g) * fraction);
  const b = Math.round(lower.b + (upper.b - lower.b) * fraction);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const WEIGHT_MAPS: Record<string, Record<string, number>> = {
  'Antonio': {
    'Antonio': 1.0, 'merchant of Venice': 0.8, 'Bassanio': 0.7, 'guarantor': 0.9, 'loan': 0.6, 'moneylender': 0.4, 'Shylock': 0.4, 'defend': 0.6, 'saving his life': 0.9
  },
  'Bassanio': {
    'Bassanio': 1.0, 'money': 0.7, 'woo': 0.6, 'Portia': 0.9, 'marries': 0.8, 'Antonio': 0.7, 'Lorenzo': 0.5, 'loan': 0.6
  },
  'Portia': {
    'Portia': 1.0, 'heiress': 0.8, 'marries': 0.7, 'Bassanio': 0.7, 'disguises': 0.9, 'lawyer': 1.0, 'defend': 0.9, 'saving': 0.9, 'court': 0.8
  },
  'Shylock': {
    'Shylock': 1.0, 'moneylender': 0.9, 'grudge': 0.8, 'Antonio': 0.5, 'loan': 0.7, 'demand': 1.0, 'daughter': 0.7, 'Jessica': 0.7, 'bitter': 0.8
  },
  'Jessica': {
    'Jessica': 1.0, 'daughter': 0.8, 'Shylock': 0.7, 'elope': 0.9, 'Lorenzo': 0.9
  },
  'Lorenzo': {
    'Lorenzo': 1.0, 'elope': 0.8, 'Jessica': 0.9, 'Bassanio': 0.6, 'friend': 0.5
  }
};

export default function KnowledgeGraphPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FDFEFF] flex items-center justify-center">
        <div className="animate-pulse text-indigo-600 font-black uppercase tracking-widest text-sm">Initializing Logic...</div>
      </div>
    }>
      <KnowledgeGraphContent />
    </Suspense>
  );
}

function KnowledgeGraphContent() {
  const searchParams = useSearchParams();
  const [text, setText] = useState(DEFAULT_TEXT);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [hoverNode, setHoverNode] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasProcessed, setHasProcessed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 1000, height: 600 });
  const [pulseTime, setPulseTime] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);

  const graphData = useMemo(() => MERCHANT_DATA, []);
  const nodeColors = useMemo(() => COLORS, []);

  useEffect(() => {
    setMounted(true);
    let animationFrame: number;
    const animate = (time: number) => {
      setPulseTime(time / 200);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({ width: containerRef.current.clientWidth, height: 600 });
    }
    if (searchParams.get('shared') === 'true') {
      setHasProcessed(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (graphRef.current && hasProcessed) {
      const fg = graphRef.current;
      fg.d3Force('charge').strength(-4000); 
      fg.d3Force('link').distance(800).strength(0.5); 
      fg.d3Force('collide', d3.forceCollide(120)); 
      fg.d3Force('center', d3.forceCenter(containerSize.width / 2, 300)); 
      fg.d3ReheatSimulation();
      
      setTimeout(() => { 
        if (graphRef.current) {
          // Instantly fit to get the base scale and center
          graphRef.current.zoomToFit(0, 100);
          // Then immediately animate a zoom-in to spread nodes out visually
          const baseZoom = graphRef.current.zoom();
          graphRef.current.zoom(baseZoom * 3.5, 800);
        } 
      }, 1000);
    }
  }, [hasProcessed, containerSize.width]);

  const handleProcessText = () => {
    setIsProcessing(true);
    setHasProcessed(false);
    setTimeout(() => { setIsProcessing(false); setHasProcessed(true); }, 1500);
  };

  const handleShare = () => {
    if (!hasProcessed) return;
    const url = `${window.location.origin}${window.location.pathname}?shared=true`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setShowShareModal(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const renderHighlightedText = () => {
    if (!selectedNode) return text;
    const weights = WEIGHT_MAPS[selectedNode.id] || { [selectedNode.id]: 1.0 };
    
    const sortedKeys = Object.keys(weights).sort((a, b) => b.length - a.length);
    const pattern = new RegExp(`(${sortedKeys.join('|')})`, 'gi');
    const parts = text.split(pattern);
    
    return parts.map((part, i) => {
      const matchKey = sortedKeys.find(key => key.toLowerCase() === part.toLowerCase());
      if (matchKey) {
        const weight = weights[matchKey];
        const highlightColor = getViridisColor(weight, 0.25);
        const textColor = weight > 0.5 ? '#000' : '#1e293b'; 
        
        return (
          <span key={i} className="px-1 rounded-md font-bold transition-all duration-300 mx-0.5" style={{ backgroundColor: highlightColor, color: textColor }}>{part}</span>
        );
      }
      return part;
    });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans p-1 md:p-2">
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 p-10 max-w-md w-full relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100 mx-auto"><Check className="w-8 h-8" /></div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Analysis Copied!</h3>
                <p className="text-sm text-slate-500 font-bold leading-relaxed mb-8">The complete relational web is ready to be shared.</p>
                <div className="w-full space-y-3 mb-8">
                   <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-blue-300 transition-all"><div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><Mail className="w-4 h-4" /></div><span className="text-[9px] font-bold text-slate-500">Email</span></div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-indigo-300 transition-all"><div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><Users2 className="w-4 h-4" /></div><span className="text-[9px] font-bold text-slate-500">Teams</span></div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-purple-300 transition-all"><div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><MessageSquare className="w-4 h-4" /></div><span className="text-[9px] font-bold text-slate-500">Slack</span></div>
                   </div>
                </div>
                <button onClick={() => setShowShareModal(false)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-xl">Return to Analysis</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-[1600px] mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-1 group"><Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" /><span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Return to Proposals</span></Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-2 items-start">
          <header className="lg:col-span-4 pt-2">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg"><Network className="w-6 h-6 text-white" /></div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">Knowledge Graph</h1>
            </div>
            <p className="text-sm text-indigo-600 font-bold uppercase tracking-widest ml-16">AI-Driven Relational Mapping</p>
          </header>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-2 relative group focus-within:border-indigo-400 transition-all">
              {selectedNode ? (<div className="w-full h-40 p-6 rounded-[1.5rem] bg-slate-50 overflow-y-auto custom-scrollbar text-slate-700 font-medium leading-relaxed">{renderHighlightedText()}</div>) : (<textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-40 p-6 rounded-[1.5rem] bg-slate-50 border-none focus:ring-0 text-slate-700 font-medium leading-relaxed resize-none custom-scrollbar outline-none" placeholder="Paste historical text here..." />)}
              {selectedNode && (<button onClick={() => setSelectedNode(null)} className="absolute top-6 right-6 p-2 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 shadow-sm transition-all"><RefreshCcw className="w-4 h-4" /></button>)}
            </div>

            <div className="flex items-center justify-between gap-6 px-4">
              <div className="flex-1 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Relationship Strength</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gradient-to-r from-[#440154] via-[#21918c] to-[#fde725] shadow-inner mb-1"></div>
                <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest">
                  <span>Weak</span>
                  <span>Strong</span>
                </div>
              </div>
              
              <button onClick={handleProcessText} disabled={isProcessing} className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-indigo-600 transition-all shadow-xl active:scale-95 disabled:bg-slate-300">{isProcessing ? <><RefreshCcw className="w-4 h-4 animate-spin" /> Extracting...</> : <>Compute</>}</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 bg-white rounded-[3rem] border-4 border-slate-100 shadow-2xl overflow-hidden h-[600px] relative flex items-center justify-center" ref={containerRef}>
            {!hasProcessed ? (
              <div className="text-center space-y-6 animate-in fade-in duration-700"><div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto border-2 border-dashed border-slate-200"><Network className="w-8 h-8 text-slate-300" /></div><div className="space-y-2"><h3 className="text-xl font-black text-slate-400 uppercase tracking-tight">Graph Pending</h3><p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Awaiting Extraction...</p></div></div>
            ) : (
              <div className="relative z-10 w-full h-full">
                <ForceGraph2D
                  ref={graphRef} graphData={graphData} width={containerSize.width} height={600} nodeRelSize={7} nodeColor={node => nodeColors[node.type as keyof typeof COLORS] || '#94a3b8'} linkWidth={2} linkColor={(link: any) => { const isHovered = hoverNode && (link.source.id === hoverNode.id || link.target.id === hoverNode.id); const isSelected = selectedNode && (link.source.id === selectedNode.id || link.target.id === selectedNode.id); return (isHovered || isSelected) ? '#cbd5e1' : 'rgba(0,0,0,0)'; }} linkDirectionalArrowLength={(link: any) => { const isHovered = hoverNode && (link.source.id === hoverNode.id || link.target.id === hoverNode.id); const isSelected = selectedNode && (link.source.id === selectedNode.id || link.target.id === selectedNode.id); return (isHovered || isSelected) ? 6 : 0; }} linkDirectionalArrowRelPos={1} onNodeClick={node => setSelectedNode(node)} onNodeHover={node => setHoverNode(node)} d3AlphaDecay={0.01} d3VelocityDecay={0.1} nodeCanvasObjectMode={() => 'after'}
                  nodeCanvasObject={(node: any, ctx, globalScale) => {
                    const label = node.id; const fontSize = 14 / globalScale; ctx.font = `bold ${fontSize}px Inter, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                    const labelY = node.y - 12; ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'; const textWidth = ctx.measureText(label).width; ctx.fillRect(node.x - textWidth/2 - 4, labelY - fontSize/2, textWidth + 8, fontSize);
                    ctx.fillStyle = '#0f172a'; ctx.fillText(label, node.x, labelY);
                    if (selectedNode && node.id === selectedNode.id) {
                      const pulseScale = 1.5 + Math.sin(pulseTime) * 0.5; ctx.beginPath(); ctx.arc(node.x, node.y, 8 * pulseScale, 0, 2 * Math.PI, false); ctx.fillStyle = `${nodeColors[node.type as keyof typeof COLORS] || '#94a3b8'}44`; ctx.fill();
                    }
                    if (hoverNode && node.id === hoverNode.id && (!selectedNode || selectedNode.id !== hoverNode.id)) {
                      ctx.beginPath(); ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false); ctx.fillStyle = `${nodeColors[node.type as keyof typeof COLORS] || '#94a3b8'}22`; ctx.fill();
                    }
                  }}
                  linkCanvasObjectMode={() => 'after'}
                  linkCanvasObject={(link: any, ctx, globalScale) => {
                    const isHovered = hoverNode && (link.source.id === hoverNode.id || link.target.id === hoverNode.id);
                    const isSelected = selectedNode && (link.source.id === selectedNode.id || link.target.id === selectedNode.id);
                    if (!isHovered && !isSelected) return;
                    const labelFontSize = 12 / globalScale; ctx.font = `bold ${labelFontSize}px Inter, sans-serif`; const start = link.source; const end = link.target; if (typeof start !== 'object' || typeof end !== 'object') return;
                    const midX = start.x + (end.x - start.x) * 0.5; const midY = start.y + (end.y - start.y) * 0.5; ctx.save(); ctx.translate(midX, midY); ctx.fillStyle = 'rgba(255, 255, 255, 0.98)'; const textWidth = ctx.measureText(link.label).width; ctx.fillRect(-textWidth/2 - 6, -labelFontSize/2 - 4, textWidth + 12, labelFontSize + 8); ctx.fillStyle = '#64748b'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(link.label, 0, 0); ctx.restore();
                  }}
                />
              </div>
            )}
            {hasProcessed && (
              <div className="absolute top-8 right-8 flex flex-col items-end gap-4 z-20">
                <button onClick={handleShare} className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all active:scale-95 bg-slate-900 text-white hover:bg-indigo-600`}>{copied ? (<><Check className="w-4 h-4 text-emerald-400" />Copied!</>) : (<><Share2 className="w-4 h-4" />Share Analysis</>)}</button>
                <div className="flex flex-col gap-2 p-2 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg"><button onClick={() => graphRef.current?.zoom(graphRef.current.zoom() * 1.5, 400)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-900 font-bold transition-all">+</button><button onClick={() => graphRef.current?.zoom(graphRef.current.zoom() / 1.5, 400)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-900 font-bold transition-all">-</button><button onClick={() => graphRef.current?.zoomToFit(800, 100)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-900 font-bold transition-all"><RefreshCcw className="w-4 h-4" /></button></div>
              </div>
            )}
            {hasProcessed && (
              <div className="absolute top-8 left-8 flex flex-col gap-4 z-20">
                <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg space-y-4">
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-2">Network Legend</h5>
                  {Object.entries(nodeColors).map(([type, color]) => (
                    <div key={type} className="flex items-center gap-3">
                      <div className="w-3.5 h-3.5 rounded-md shadow-sm" style={{ backgroundColor: color }}></div>
                      <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-6">
            {selectedNode ? (
              <div className="bg-white rounded-[2.5rem] border-2 border-indigo-100 shadow-2xl p-10 animate-in slide-in-from-right-10"><div className="flex items-center gap-3 mb-6"><div className={`px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]`} style={{ backgroundColor: nodeColors[selectedNode.type as keyof typeof COLORS] }}>{selectedNode.type}</div></div><h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-none">{selectedNode.id}</h2><div className="space-y-6"><div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Activity className="w-3.5 h-3.5 text-indigo-500" /> Connections</div><div className="space-y-4">{graphData.links.filter(l => (typeof l.source === 'object' ? (l.source as any).id === selectedNode.id : l.source === selectedNode.id) || (typeof l.target === 'object' ? (l.target as any).id === selectedNode.id : l.target === selectedNode.id)).map((link, idx) => (<div key={idx} className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm group hover:bg-white hover:border-indigo-300 transition-all"><div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">{link.label}</div><div className="text-sm font-bold text-slate-900 flex items-center gap-2">{typeof link.source === 'object' ? (link.source as any).id : link.source} <ArrowRight className="w-3 h-3 text-slate-300" /> {typeof link.target === 'object' ? (link.target as any).id : link.target}</div></div>))}</div></div></div>
            ) : (
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden h-full min-h-[400px] flex flex-col justify-center text-center"><div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div><h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-tight">Relational Logic</h3><p className="text-sm text-slate-400 font-bold leading-relaxed">Click any character node to explore standing.</p></div>
            )}
          </div>
        </div>
      </div>
      <style jsx global>{` .custom-scrollbar::-webkit-scrollbar { width: 5px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; } `}</style>
    </div>
  );
}
