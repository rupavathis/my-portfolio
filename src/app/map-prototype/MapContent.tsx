'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { IconLayer, ScatterplotLayer, BitmapLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl/maplibre';
import { FlyToInterpolator } from '@deck.gl/core';
import { Home } from 'lucide-react';
import Link from 'next/link';
import 'maplibre-gl/dist/maplibre-gl.css';

// Initial view centered on Ireland
const INITIAL_VIEW_STATE = {
  longitude: -7.6921,
  latitude: 53.3498,
  zoom: 6,
  pitch: 45,
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
  const [data, setData] = useState<Location[]>([]);
  const [viewState, setViewState] = useState<any>(INITIAL_VIEW_STATE);
  const [mounted, setMounted] = useState(false);
  const [showHistoricalMap, setShowHistoricalMap] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

        if (parsedData.length > 0) {
          setViewState({
            ...viewState,
            longitude: parsedData[0].longitude,
            latitude: parsedData[0].latitude,
            zoom: 8,
            transitionDuration: 2000,
            transitionInterpolator: new FlyToInterpolator()
          });
        }
      };
      reader.readAsText(file);
    }
  };

  const layers = useMemo(() => {
    const activeLayers: any[] = [
      new ScatterplotLayer({
        id: 'glow-layer',
        data,
        getPosition: (d: Location) => [d.longitude, d.latitude],
        getRadius: 3000,
        getFillColor: [59, 130, 246, 40],
        stroked: false,
      }),
      new ScatterplotLayer({
        id: 'dot-layer',
        data,
        getPosition: (d: Location) => [d.longitude, d.latitude],
        getRadius: 400,
        getFillColor: [255, 255, 255],
        getLineColor: [59, 130, 246],
        stroked: true,
        lineWidthMinPixels: 2,
      }),
      new IconLayer({
        id: 'icon-layer',
        data,
        pickable: true,
        iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: ICON_MAPPING,
        getIcon: () => 'marker',
        sizeScale: 12,
        getPosition: (d: Location) => [d.longitude, d.latitude],
        getSize: 5,
        getColor: [59, 130, 246],
        getPixelOffset: [0, -20]
      })
    ];

    if (showHistoricalMap) {
      activeLayers.unshift(
        new BitmapLayer({
          id: 'historical-map-layer',
          bounds: [-10.66, 51.3, -5.3, 55.45], // Ireland approximate bounds
          image: '/image.png',
          opacity: 0.7
        })
      );
    }

    return activeLayers;
  }, [data, showHistoricalMap]);

  const onViewStateChange = useCallback(({viewState}: {viewState: any}) => {
    setViewState(viewState);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex h-screen w-screen bg-[#FDFEFF] overflow-hidden text-slate-900">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col p-8 z-10 shadow-lg">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-6 group">
           <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
           <span className="text-[10px] font-bold uppercase tracking-widest">Return to Proposals</span>
        </Link>

        <div className="mb-10">
          <h1 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
            MAP PROTOTYPE
          </h1>
          <p className="text-[10px] text-slate-600 font-bold tracking-[0.2em] mt-1 ml-4 uppercase">
            Data Visualization
          </p>
        </div>
        
        <div className="flex flex-col gap-8 flex-1 overflow-hidden">          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
              Data Source
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-xs text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-[11px] file:font-bold file:uppercase
                file:bg-slate-100 file:text-slate-700
                hover:file:bg-blue-600 hover:file:text-white
                transition-all cursor-pointer border border-slate-100 rounded-full"
            />
          </div>

          <button
            onDoubleClick={() => {
              const hardcodedData: Location[] = [
                { name: 'Dublin', latitude: 53.3498, longitude: -6.2603 },
                { name: 'Cork', latitude: 51.8985, longitude: -8.4756 },
                { name: 'Galway', latitude: 53.2707, longitude: -9.0568 },
                { name: 'Limerick', latitude: 52.6638, longitude: -8.6267 },
                { name: 'Waterford', latitude: 52.2593, longitude: -7.1101 },
                { name: 'Belfast', latitude: 54.5973, longitude: -5.9301 }
              ];
              setData(hardcodedData);
              setViewState({
                ...viewState,
                longitude: -7.6921,
                latitude: 53.3498,
                zoom: 6,
                transitionDuration: 2000,
                transitionInterpolator: new FlyToInterpolator()
              });
            }}
            className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all group shadow-sm"
            title="Double-click to load sample data"
          >
            Load Sample <span className="lowercase font-normal opacity-50 block mt-1">(Double-click)</span>
          </button>

          <button
            onClick={() => setShowHistoricalMap(!showHistoricalMap)}
            className={`w-full py-4 px-4 rounded-xl border-2 flex items-center justify-between transition-all font-black text-[11px] uppercase tracking-widest ${
              showHistoricalMap 
                ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
                : 'bg-white border-slate-200 text-slate-600 hover:border-blue-500'
            }`}
          >
            <span>Historical Overlay</span>
            <div className={`w-8 h-4 rounded-full relative transition-all ${showHistoricalMap ? 'bg-blue-500' : 'bg-slate-300'}`}>
              <div className={`absolute top-1 w-2 h-2 rounded-full bg-white transition-all ${showHistoricalMap ? 'left-5' : 'left-1'}`}></div>
            </div>
          </button>

          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 shadow-sm">
            <p className="text-[11px] text-blue-800 font-medium leading-relaxed">
              Upload a CSV with <b>name, lat, long</b> to visualize points.
            </p>
          </div>

          {data.length > 0 && (
            <div className="flex-1 overflow-hidden flex flex-col min-h-0">
              <div className="flex justify-between items-end mb-4 px-1">
                <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
                  Active Points ({data.length})
                </h2>
                <button 
                  onClick={() => setData([])}
                  className="text-[10px] font-black text-rose-600 hover:text-rose-700 uppercase tracking-wider"
                >
                  Reset
                </button>
              </div>
              <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar">
                {data.map((loc, i) => (
                  <div 
                    key={i} 
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
                    onClick={() => setViewState({
                      ...viewState,
                      longitude: loc.longitude,
                      latitude: loc.latitude,
                      zoom: 12,
                      transitionDuration: 1000,
                      transitionInterpolator: new FlyToInterpolator()
                    })}
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">{loc.name}</div>
                    <div className="text-[10px] text-slate-500 mt-1 font-mono">{loc.latitude.toFixed(4)}, {loc.longitude.toFixed(4)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Map View */}
      <div className="flex-1 p-8 bg-[#FDFEFF]">
        <div className="w-full h-full relative rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-200">
          <DeckGL
            viewState={viewState}
            onViewStateChange={onViewStateChange}
            controller={true}
            layers={layers}
          >
            <Map
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            />
          </DeckGL>
        </div>
      </div>
    </div>
  );
}
