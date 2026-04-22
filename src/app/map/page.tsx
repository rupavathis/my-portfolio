'use client';

import React, { useState, useEffect, useMemo } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

// Coordinates
const CHENNAI = [80.2707, 13.0827];
const HYDERABAD = [78.4867, 17.3850];
const BANGALORE = [77.5946, 12.9716];

const INITIAL_VIEW_STATE = {
  longitude: 78.5,
  latitude: 15.0,
  zoom: 5.5,
  pitch: 60, // Higher pitch to see the vertical arc
  bearing: -10
};

// Helper to generate a 3D arc path [lon, lat, alt]
function create3DArc(start: number[], end: number[], maxHeight: number, segments = 50) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    // Linear interpolation for Lon/Lat
    const lon = start[0] + (end[0] - start[0]) * t;
    const lat = start[1] + (end[1] - start[1]) * t;
    // Parabolic curve for Altitude (Z)
    // h = 4 * H * t * (1 - t)
    const alt = 4 * maxHeight * t * (1 - t);
    points.push([lon, lat, alt]);
  }
  return points;
}

export default function MapPage() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let requestIdentifier: number;
    const animate = () => {
      setTime((t) => (t + 0.005) % 2);
      requestIdentifier = window.requestAnimationFrame(animate);
    };
    animate();
    return () => window.cancelAnimationFrame(requestIdentifier);
  }, []);

  // Pre-calculate the full paths
  const fullPath1 = useMemo(() => create3DArc(CHENNAI, HYDERABAD, 150000), []);
  const fullPath2 = useMemo(() => create3DArc(HYDERABAD, BANGALORE, 120000), []);

  // Slice the paths based on current time to show "growth"
  const currentPath1 = useMemo(() => {
    const progress = Math.min(1, time);
    const pointCount = Math.floor(fullPath1.length * progress);
    return fullPath1.slice(0, pointCount + 1);
  }, [time, fullPath1]);

  const currentPath2 = useMemo(() => {
    if (time < 1) return [];
    const progress = Math.min(1, time - 1);
    const pointCount = Math.floor(fullPath2.length * progress);
    return fullPath2.slice(0, pointCount + 1);
  }, [time, fullPath2]);

  const layers = [
    new PathLayer({
      id: 'path-1',
      data: [{ path: currentPath1, color: [255, 0, 128] }],
      getPath: (d: any) => d.path,
      getColor: (d: any) => d.color,
      widthMinPixels: 4,
      shadowEnabled: true
    }),
    new PathLayer({
      id: 'path-2',
      data: [{ path: currentPath2, color: [0, 255, 128] }],
      getPath: (d: any) => d.path,
      getColor: (d: any) => d.color,
      widthMinPixels: 4
    })
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black">
      <h1 className="text-2xl font-bold mb-6 text-white tracking-widest uppercase">3D Flight Path</h1>
      
      <div className="w-full max-w-5xl h-[700px] relative border border-gray-800 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={layers}
        >
          <Map
            mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
          />
        </DeckGL>
      </div>
      
      <div className="mt-8 flex gap-8">
        <div className={`text-xs uppercase tracking-widest ${time < 1 ? 'text-pink-500 animate-pulse' : 'text-gray-600'}`}>
          Chennai → Hyderabad
        </div>
        <div className={`text-xs uppercase tracking-widest ${time >= 1 ? 'text-green-500 animate-pulse' : 'text-gray-600'}`}>
          Hyderabad → Bangalore
        </div>
      </div>
    </div>
  );
}
