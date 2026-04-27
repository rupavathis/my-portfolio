'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
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

export default function KnowledgeGraphPage() {
  const searchParams = useSearchParams();
  const [text, setText] = useState(DEFAULT_TEXT);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasProcessed, setHasProcessed] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 1000, height: 600 });
  const [pulseTime, setPulseTime] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);

  const graphData = useMemo(() => MERCHANT_DATA, []);
  const nodeColors = useMemo(() => COLORS, []);

  useEffect(() => {
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
      fg.d3Force('link').strength(0);
      fg.d3Force('charge').strength(-80000); 
      fg.d3Force('collide', d3.forceCollide(250));
      fg.d3Force('center', null);
      fg.d3AlphaTarget(0.8);
      fg.d3ReheatSimulation();
      setTimeout(() => { if (graphRef.current) graphRef.current.zoomToFit(1200, 60); }, 3000);
      setTimeout(() => { if (graphRef.current) graphRef.current.d3AlphaTarget(0); }, 10000);
    }
  }, [hasProcessed]);

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
    const nodeColor = nodeColors[selectedNode.type as keyof typeof COLORS] || '#6366f1';
    const regex = new RegExp(`(${selectedNode.id})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      part.toLowerCase() === selectedNode.id.toLowerCase() ? (
        <span key={i} className="px-1 rounded-md font-bold" style={{ backgroundColor: `${nodeColor}33`, color: nodeColor, borderBottom: `2px solid ${nodeColor}` }}>{part}</span>
      ) : part
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans p-6 md:p-10">
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
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"><Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" /><span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Return to Proposals</span></Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <header className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-4"><div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl"><Network className="w-7 h-7 text-white" /></div><h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none text-wrap">Knowledge Graph</h1></div>
            <p className="text-xl text-indigo-700 font-bold uppercase tracking-tight">AI-Driven Relational Mapping</p>
          </header>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-2 relative group focus-within:border-indigo-400 transition-all">
              {selectedNode ? (<div className="w-full h-40 p-6 rounded-[1.5rem] bg-slate-50 overflow-y-auto custom-scrollbar text-slate-700 font-medium leading-relaxed">{renderHighlightedText()}</div>) : (<textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-40 p-6 rounded-[1.5rem] bg-slate-50 border-none focus:ring-0 text-slate-700 font-medium leading-relaxed resize-none custom-scrollbar outline-none" placeholder="Paste historical text here..." />)}
              {selectedNode && (<button onClick={() => setSelectedNode(null)} className="absolute top-6 right-6 p-2 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 shadow-sm transition-all"><RefreshCcw className="w-4 h-4" /></button>)}
            </div>
            <div className="flex justify-end">
              <button onClick={handleProcessText} disabled={isProcessing} className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-indigo-600 transition-all shadow-xl active:scale-95 disabled:bg-slate-300">{isProcessing ? <><RefreshCcw className="w-4 h-4 animate-spin" /> Extracting...</> : <><Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" /> Map Relationships</>}</button>
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
                  ref={graphRef} graphData={graphData} width={containerSize.width} height={600} nodeRelSize={7} nodeColor={node => nodeColors[node.type as keyof typeof COLORS] || '#94a3b8'} linkWidth={3} linkColor={() => '#cbd5e1'} linkDirectionalArrowLength={6} linkDirectionalArrowRelPos={1} onNodeClick={node => setSelectedNode(node)} d3AlphaDecay={0.01} d3VelocityDecay={0.1} nodeCanvasObjectMode={() => 'after'}
                  nodeCanvasObject={(node: any, ctx, globalScale) => {
                    const label = node.id; const fontSize = 16 / globalScale; ctx.font = `bold ${fontSize}px Inter, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                    const labelY = node.y - 12; ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'; const textWidth = ctx.measureText(label).width; ctx.fillRect(node.x - textWidth/2 - 4, labelY - fontSize/2, textWidth + 8, fontSize);
                    ctx.fillStyle = '#0f172a'; ctx.fillText(label, node.x, labelY);
                    if (selectedNode && node.id === selectedNode.id) {
                      const pulseScale = 1.5 + Math.sin(pulseTime) * 0.5; ctx.beginPath(); ctx.arc(node.x, node.y, 8 * pulseScale, 0, 2 * Math.PI, false); ctx.fillStyle = `${nodeColors[node.type as keyof typeof COLORS] || '#94a3b8'}44`; ctx.fill();
                    }
                  }}
                  linkCanvasObjectMode={() => 'after'}
                  linkCanvasObject={(link: any, ctx, globalScale) => {
                    const labelFontSize = 16 / globalScale; ctx.font = `bold ${labelFontSize}px Inter, sans-serif`; const start = link.source; const end = link.target; if (typeof start !== 'object' || typeof end !== 'object') return;
                    const midX = start.x + (end.x - start.x) * 0.5; const midY = start.y + (end.y - start.y) * 0.5; ctx.save(); ctx.translate(midX, midY); ctx.fillStyle = 'rgba(255, 255, 255, 0.98)'; const textWidth = ctx.measureText(link.label).width; ctx.fillRect(-textWidth/2 - 6, -labelFontSize/2 - 4, textWidth + 12, labelFontSize + 8); ctx.fillStyle = '#475569'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(link.label, 0, 0); ctx.restore();
                  }}
                />
              </div>
            )}
            {hasProcessed && (
              <div className="absolute top-8 right-8 flex flex-col items-end gap-4 z-20">
                <button onClick={handleShare} className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all active:scale-95 bg-slate-900 text-white hover:bg-indigo-600`}>{copied ? (<><Check className="w-4 h-4 text-emerald-400" />Copied!</>) : (<><Share2 className="w-4 h-4" />Share Analysis</>)}</button>
                <div className="flex flex-col gap-2 p-2 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg"><button onClick={() => graphRef.current?.zoom(graphRef.current.zoom() * 1.5, 400)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-900 font-bold transition-all">+</button><button onClick={() => graphRef.current?.zoom(graphRef.current.zoom() / 1.5, 400)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-900 font-bold transition-all">-</button><button onClick={() => graphRef.current?.zoomToFit(800, 60)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-900 font-bold transition-all"><RefreshCcw className="w-4 h-4" /></button></div>
              </div>
            )}
            {hasProcessed && (<div className="absolute top-8 left-8 flex flex-col gap-4 z-20"><div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg space-y-4"><h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-2">Network Legend</h5>{Object.entries(nodeColors).map(([type, color]) => (<div key={type} className="flex items-center gap-3"><div className="w-3.5 h-3.5 rounded-md shadow-sm" style={{ backgroundColor: color }}></div><span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{type}</span></div>))}</div></div>)}
          </div>
          <div className="space-y-6">
            {selectedNode ? (
              <div className="bg-white rounded-[2.5rem] border-2 border-indigo-100 shadow-2xl p-10 animate-in slide-in-from-right-10"><div className="flex items-center gap-3 mb-6"><div className={`px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]`} style={{ backgroundColor: nodeColors[selectedNode.type as keyof typeof COLORS] }}>{selectedNode.type}</div></div><h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-none">{selectedNode.id}</h2><div className="space-y-6"><div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Activity className="w-3.5 h-3.5 text-indigo-500" /> Connections</div><div className="space-y-4">{graphData.links.filter(l => (typeof l.source === 'object' ? (l.source as any).id === selectedNode.id : l.source === selectedNode.id) || (typeof l.target === 'object' ? (l.target as any).id === selectedNode.id : l.target === selectedNode.id)).map((link, idx) => (<div key={idx} className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm group hover:bg-white hover:border-indigo-300 transition-all"><div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">{link.label}</div><div className="text-sm font-bold text-slate-900 flex items-center gap-2">{typeof link.source === 'object' ? (link.source as any).id : link.source} <ArrowRight className="w-3 h-3 text-slate-300" /> {typeof link.target === 'object' ? (link.target as any).id : link.target}</div></div>))}</div></div></div>
            ) : (
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden h-full min-h-[400px] flex flex-col justify-center text-center"><div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div><BookOpen className="w-12 h-12 text-amber-400 mb-8 mx-auto" /><h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-tight">Relational Logic</h3><p className="text-sm text-slate-400 font-bold leading-relaxed">Click any character node to explore standing.</p></div>
            )}
          </div>
        </div>
      </div>
      <style jsx global>{` .custom-scrollbar::-webkit-scrollbar { width: 5px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; } .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; } `}</style>
    </div>
  );
}
