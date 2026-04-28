'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { IconLayer, ScatterplotLayer, BitmapLayer, PolygonLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl/maplibre';
import { FlyToInterpolator } from '@deck.gl/core';
import { Home, MousePointer2, Share2, Check, Mail, MessageSquare, Users2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import 'maplibre-gl/dist/maplibre-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: -7.6921,
  latitude: 53.3498,
  zoom: 6,
  pitch: 0,
  bearing: 0
};

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
};

interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

export default function MapContent() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Location[]>([]);
  const [viewState, setViewState] = useState<any>(INITIAL_VIEW_STATE);
  const [mounted, setMounted] = useState(false);
  const [showHistoricalMap, setShowHistoricalMap] = useState(false);
  
  const [selection, setSelection] = useState<{ minLng: number, minLat: number, maxLng: number, maxLat: number } | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [startPoint, setStartPoint] = useState<[number, number] | null>(null);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    setMounted(true);
    const selectedNames = searchParams.get('selected');
    if (selectedNames) {
      const namesArray = selectedNames.split(',').map(n => decodeURIComponent(n));
      const hardcodedData: Location[] = [
        { name: 'Dublin', latitude: 53.3498, longitude: -6.2603 },
        { name: 'Cork', latitude: 51.8985, longitude: -8.4756 },
        { name: 'Galway', latitude: 53.2707, longitude: -9.0568 },
        { name: 'Limerick', latitude: 52.6638, longitude: -8.6267 },
        { name: 'Waterford', latitude: 52.2593, longitude: -7.1101 },
        { name: 'Belfast', latitude: 54.5973, longitude: -5.9301 }
      ];
      setData(hardcodedData);
      const sharedItems = hardcodedData.filter(d => namesArray.includes(d.name));
      if (sharedItems.length > 0) {
        const lats = sharedItems.map(d => d.latitude);
        const lngs = sharedItems.map(d => d.longitude);
        setSelection({
          minLng: Math.min(...lngs) - 0.1, maxLng: Math.max(...lngs) + 0.1,
          minLat: Math.min(...lats) - 0.1, maxLat: Math.max(...lats) + 0.1
        });
        setViewState({
          ...INITIAL_VIEW_STATE,
          longitude: (Math.min(...lngs) + Math.max(...lngs)) / 2,
          latitude: (Math.min(...lats) + Math.max(...lats)) / 2,
          zoom: 7, transitionDuration: 1000, transitionInterpolator: new FlyToInterpolator()
        });
      }
    }
  }, [searchParams]);

  const selectedItems = useMemo(() => {
    if (!selection) return [];
    return data.filter(d => 
      d.longitude >= selection.minLng && d.longitude <= selection.maxLng &&
      d.latitude >= selection.minLat && d.latitude <= selection.maxLat
    );
  }, [data, selection]);

  const handleShare = () => {
    if (selectedItems.length === 0) return;
    const names = selectedItems.map(item => encodeURIComponent(item.name)).join(',');
    const url = `${window.location.origin}${window.location.pathname}?selected=${names}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true); setShowShareModal(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getDistance = (p1: [number, number], p2: [number, number]) => {
    const dx = p1[0] - p2[0];
    const dy = p1[1] - p2[1];
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const lines = text.split('\n');
        const parsedData: Location[] = [];
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            const parts = line.split(',');
            if (parts.length >= 3) {
              const name = parts[0].trim();
              const lat = parseFloat(parts[1].trim());
              const lon = parseFloat(parts[2].trim());
              if (!isNaN(lat) && !isNaN(lon)) {
                parsedData.push({ name, latitude: lat, longitude: lon });
              }
            }
          }
        }
        setData(parsedData);
      };
      reader.readAsText(file);
    }
  };

  const layers = useMemo(() => {
    const activeLayers: any[] = [
      new ScatterplotLayer({
        id: 'glow-layer', data, getPosition: (d: Location) => [d.longitude, d.latitude], getRadius: 3000,
        getFillColor: (d: Location) => {
          if (selection) {
            const inLng = d.longitude >= selection.minLng && d.longitude <= selection.maxLng;
            const inLat = d.latitude >= selection.minLat && d.latitude <= selection.maxLat;
            if (inLng && inLat) return [244, 63, 94, 120]; 
          }
          return [59, 130, 246, 40]; 
        },
        updateTriggers: { getFillColor: [selection] }
      }),
      new IconLayer({
        id: 'icon-layer', data, pickable: true, iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: ICON_MAPPING, getIcon: () => 'marker', sizeScale: 12, getPosition: (d: Location) => [d.longitude, d.latitude], getSize: 5,
        getColor: (d: Location) => {
          if (selection) {
            const inLng = d.longitude >= selection.minLng && d.longitude <= selection.maxLng;
            const inLat = d.latitude >= selection.minLat && d.latitude <= selection.maxLat;
            if (inLng && inLat) return [244, 63, 94]; 
          }
          return [59, 130, 246]; 
        },
        getPixelOffset: [0, -20], updateTriggers: { getColor: [selection] }
      })
    ];
    if (showHistoricalMap) {
      activeLayers.unshift(new BitmapLayer({ id: 'historical-map-layer', bounds: [-10.66, 51.3, -5.3, 55.45], image: '/prototypes/image.png', opacity: 0.7 }));
    }
    if (selection) {
      activeLayers.push(new PolygonLayer({
        id: 'selection-box', data: [{ polygon: [[selection.minLng, selection.minLat], [selection.maxLng, selection.minLat], [selection.maxLng, selection.maxLat], [selection.minLng, selection.maxLat], [selection.minLng, selection.minLat]] }],
        getPolygon: d => d.polygon, getFillColor: [59, 130, 246, 30], getLineColor: [59, 130, 246, 255], getLineWidth: 2, lineWidthUnits: 'pixels', stroked: true, filled: true
      }));
    }
    return activeLayers;
  }, [data, showHistoricalMap, selection]);

  if (!mounted) return null;

  return (
    <div className="flex h-screen w-screen bg-[#FDFEFF] overflow-hidden text-slate-900">
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 p-10 max-w-md w-full relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100 mx-auto"><Check className="w-8 h-8" /></div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Analysis Copied!</h3>
                <p className="text-sm text-slate-500 font-bold leading-relaxed mb-8">Your research snapshot has been saved and is ready to be shared.</p>
                <div className="w-full space-y-3 mb-8">
                   <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-blue-300 transition-all"><div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><Mail className="w-4 h-4" /></div><span className="text-[9px] font-bold text-slate-500">Email</span></div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-indigo-300 transition-all"><div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><Users2 className="w-4 h-4" /></div><span className="text-[9px] font-bold text-slate-500">Teams</span></div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-purple-300 transition-all"><div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><MessageSquare className="w-4 h-4" /></div><span className="text-[9px] font-bold text-slate-500">Slack</span></div>
                   </div>
                </div>
                <button onClick={() => setShowShareModal(false)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-xl">Return to Map</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="w-80 bg-white border-r border-slate-200 flex flex-col p-8 z-10 shadow-lg">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-6 group">
           <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" /><span className="text-[10px] font-bold uppercase tracking-widest">Return to Proposals</span>
        </Link>
        <div className="mb-10">
          <h1 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2"><div className="w-2 h-6 bg-blue-600 rounded-full"></div>MAP PROTOTYPE</h1>
          <p className="text-[10px] text-slate-600 font-bold tracking-[0.2em] mt-1 ml-4 uppercase">Data Visualization</p>
        </div>
        <div className="flex flex-col gap-8 flex-1 overflow-hidden">
          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">Data Source</label>
            <input type="file" accept=".csv" onChange={handleFileUpload} className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[11px] file:font-bold file:uppercase file:bg-slate-100 file:text-slate-700 hover:file:bg-blue-600 hover:file:text-white transition-all cursor-pointer border border-slate-100 rounded-full" />
          </div>
          <button onDoubleClick={() => {
              const hardcodedData: Location[] = [{ name: 'Dublin', latitude: 53.3498, longitude: -6.2603 }, { name: 'Cork', latitude: 51.8985, longitude: -8.4756 }, { name: 'Galway', latitude: 53.2707, longitude: -9.0568 }, { name: 'Limerick', latitude: 52.6638, longitude: -8.6267 }, { name: 'Waterford', latitude: 52.2593, longitude: -7.1101 }, { name: 'Belfast', latitude: 54.5973, longitude: -5.9301 }];
              setData(hardcodedData);
              setViewState({ ...viewState, longitude: -7.6921, latitude: 53.3498, zoom: 6, transitionDuration: 2000, transitionInterpolator: new FlyToInterpolator() });
            }} className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all group shadow-sm">Load Sample <span className="lowercase font-normal opacity-50 block mt-1">(Double-click)</span></button>
          <button onClick={() => setShowHistoricalMap(!showHistoricalMap)} className={`w-full py-4 px-4 rounded-xl border-2 flex items-center justify-between transition-all font-black text-[11px] uppercase tracking-widest ${showHistoricalMap ? 'bg-slate-900 border-slate-900 text-white shadow-xl' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-500'}`}><span>Historical Overlay</span><div className={`w-8 h-4 rounded-full relative transition-all ${showHistoricalMap ? 'bg-blue-500' : 'bg-slate-300'}`}><div className={`absolute top-1 w-2 h-2 rounded-full bg-white transition-all ${showHistoricalMap ? 'left-5' : 'left-1'}`}></div></div></button>
          <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2"><MousePointer2 className="w-3.5 h-3.5 text-indigo-600" /><p className="text-[10px] text-indigo-800 font-black uppercase tracking-wider">Spatial Analysis</p></div>
            <p className="text-[11px] text-indigo-700 font-medium leading-relaxed">Click and drag to draw a <b>Rectangle</b> and extract data within the selected boundary.</p>
          </div>
          {selection && (<button onClick={() => { setSelection(null); setStartPoint(null); }} className="w-full py-3 text-[10px] font-black text-rose-600 uppercase tracking-widest border-2 border-rose-100 rounded-xl hover:bg-rose-50 transition-all shadow-sm">Clear Selection</button>)}
          {data.length > 0 && (<div className="flex-1 overflow-hidden flex flex-col min-h-0"><div className="flex justify-between items-end mb-4 px-1"><h2 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Active Points ({data.length})</h2><button onClick={() => setData([])} className="text-[10px] font-black text-rose-600 hover:text-rose-700 uppercase tracking-wider">Reset</button></div><div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar">{data.map((loc, i) => (<div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group" onClick={() => setViewState({ ...viewState, longitude: loc.longitude, latitude: loc.latitude, zoom: 12, transitionDuration: 1000, transitionInterpolator: new FlyToInterpolator() })}><div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">{loc.name}</div><div className="text-[10px] text-slate-500 mt-1 font-mono">{loc.latitude.toFixed(4)}, {loc.longitude.toFixed(4)}</div></div>))}</div></div>)}
        </div>
      </div>
      <div className="flex-1 p-8 bg-[#FDFEFF] relative">
        <div className="absolute top-12 right-12 z-20 flex flex-col items-end gap-3">
          <button onClick={handleShare} disabled={selectedItems.length === 0} className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all active:scale-95 ${selectedItems.length > 0 ? 'bg-slate-900 text-white hover:bg-indigo-600' : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'}`}>{copied ? (<><Check className="w-4 h-4 text-emerald-400" />Copied!</>) : (<><Share2 className="w-4 h-4" />Share Analysis ({selectedItems.length})</>)}</button>
          {selectedItems.length > 0 && (<div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl max-w-xs animate-in slide-in-from-top-4"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-100 pb-2">Selected Nodes</p><div className="flex flex-wrap gap-1.5">{selectedItems.slice(0, 5).map(item => (<span key={item.name} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-[9px] font-bold border border-indigo-100">{item.name}</span>))}{selectedItems.length > 5 && <span className="text-[9px] font-bold text-slate-400 px-1">+{selectedItems.length - 5} more</span>}</div></div>)}
        </div>
        <div className="w-full h-full relative rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-200 cursor-crosshair">
          <DeckGL viewState={viewState} onViewStateChange={({viewState}) => setViewState({ ...viewState, pitch: 0, bearing: 0 })} controller={{ dragPan: !isSelecting, dragRotate: false }} layers={layers} onDragStart={(info) => { if (info.coordinate) { setIsSelecting(true); setStartPoint(info.coordinate as [number, number]); setSelection({ minLng: info.coordinate[0], minLat: info.coordinate[1], maxLng: info.coordinate[0], maxLat: info.coordinate[1] }); return true; } }} onDrag={(info) => { if (isSelecting && startPoint && info.coordinate) { setSelection({ minLng: Math.min(startPoint[0], info.coordinate[0]), maxLng: Math.max(startPoint[0], info.coordinate[0]), minLat: Math.min(startPoint[1], info.coordinate[1]), maxLat: Math.max(startPoint[1], info.coordinate[1]) }); return true; } }} onDragEnd={() => setIsSelecting(false)}><Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" /></DeckGL>
        </div>
      </div>
    </div>
  );
}
