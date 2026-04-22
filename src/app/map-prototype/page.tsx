'use client';

import dynamic from 'next/dynamic';

const MapContent = dynamic(() => import('./MapContent'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-screen items-center justify-center bg-[#F8FAFC]">
      <div className="text-slate-400 font-medium animate-pulse">Initializing Map...</div>
    </div>
  )
});

export default function MapPrototypePage() {
  return <MapContent />;
}
