'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Layers, Search, Map as MapIcon, ChevronRight, 
  ArrowRight, ShieldCheck, Globe, Database, Cpu,
  Network
} from 'lucide-react';

const PROPOSALS = [
  {
    id: 'mapping',
    title: 'Foundational Tool 1 - Map',
    subtitle: 'Interactive Mapping',
    description: 'Instantly visualize historical datasets through a high-performance geospatial engine.',
    link: '/map-prototype',
    icon: <MapIcon className="w-6 h-6" />,
    color: 'from-violet-500 to-purple-600',
    tags: ['GIS', 'Spatial', 'Patterns']
  },
  {
    id: 'graph',
    title: 'Foundational Tool 2 - Knowledge Graph',
    subtitle: 'Discovery Engine',
    description: 'Extract and map complex social webs from historical text to reveal hidden patterns.',
    link: '/knowledge-graph',
    icon: <Network className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-600',
    tags: ['Network', 'AI', 'Discovery']
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    subtitle: 'Infrastructure Visibility',
    description: 'Ensure projects health by measuring their availability, reliability metrics and monitoring.',
    link: '/all-project-dashboard',
    icon: <Layers className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600',
    tags: ['Health', 'Metrics', 'Monitoring']
  }
];

export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans selection:bg-indigo-100">
      <main className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        
        {/* HERO SECTION */}
        <section className="mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-[10px] font-bold text-indigo-700 uppercase tracking-[0.2em] mb-8">
              <ShieldCheck className="w-3.5 h-3.5" /> Scholar-Centric Research Tools
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-none mb-8 max-w-4xl">
              Accelerating <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Humanities Research</span>
            </h1>
            <p className="text-2xl text-slate-600 font-bold max-w-2xl leading-relaxed mb-12">
              Empowering scholars with tools to visualize, discover, and sustain digital research at scale.
            </p>       
          </motion.div>
        </section>

        {/* PROPOSALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPOSALS.map((proposal, idx) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={proposal.link} className="group block h-full">
                <div className="h-full bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-300 transition-all duration-500 flex flex-col">
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${proposal.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {proposal.icon}
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">{proposal.subtitle}</span>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{proposal.title}</h3>
                  </div>

                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                    {proposal.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {proposal.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 rounded-lg text-[9px] font-bold text-slate-500 uppercase tracking-wider border border-slate-200">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Launch Prototype <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <footer className="mt-32 pt-20 border-t border-slate-200 text-center">
           <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Vision for Sustainability</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg italic">
                "Technical architecture should not just serve the needs of today, but ensure the scholarly heritage of Digital Humanities remains accessible for the next century."
              </p>
              <div className="flex justify-center items-center gap-4">
                 <div className="text-left">
                    <div className="text-sm font-bold text-slate-900">Rupavathi Subramani</div>
                 </div>
              </div>
           </div>
        </footer>

      </main>
    </div>
  );
}
