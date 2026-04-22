'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Layers, Search, Map as MapIcon, ChevronRight, 
  ArrowRight, ShieldCheck, Globe, Database, Cpu
} from 'lucide-react';

const PROPOSALS = [
  {
    id: 'dashboard',
    title: 'Project Health Dashboard',
    subtitle: 'Infrastructure Visibility',
    description: 'A comprehensive monitoring system that ensures the scholarly heritage of Digital Humanities remains accessible for the next century. Tracks FAIR compliance, preservation status, and real-time technical health.',
    link: '/all-project-dashboard',
    icon: <Layers className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600',
    tags: ['Maintenance', 'FAIR Data', 'Analytics']
  },
  {
    id: 'search',
    title: 'Advanced Archive Search',
    subtitle: 'Discovery Engine',
    description: 'A modern search interface designed for historical records. Features 3-character intelligent autocomplete, faceted filtering by social status, and responsive data tables.',
    link: '/search-prototype',
    icon: <Search className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-600',
    tags: ['UX Design', 'Elastic Search', 'Historical Data']
  },
  {
    id: 'mapping',
    title: 'Interactive Mapping Engine',
    subtitle: 'Geospatial Visualization',
    description: 'High-performance Deck.gl visualization engine for Irish historical coordinates. Supports dynamic CSV uploads, smooth camera transitions, and multi-layered data storytelling.',
    link: '/map-prototype',
    icon: <MapIcon className="w-6 h-6" />,
    color: 'from-violet-500 to-purple-600',
    tags: ['Deck.gl', 'GIS', 'Interactive']
  }
];

export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-800 font-sans selection:bg-indigo-100">
      <main className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        
        {/* HERO SECTION */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-8">
              <ShieldCheck className="w-3.5 h-3.5" /> Technical Infrastructure Proposals
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight leading-none mb-8 max-w-4xl">
              Modernizing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Digital Humanities</span> Experience.
            </h1>
            <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-12">
              Three interconnected architectural solutions designed to improve accessibility, maintainability, and discovery across Maynooth University’s historical projects.
            </p>
            
            <div className="flex gap-12 text-slate-300">
               <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> <span className="text-xs font-bold uppercase tracking-widest">Global Access</span></div>
               <div className="flex items-center gap-2"><Database className="w-4 h-4" /> <span className="text-xs font-bold uppercase tracking-widest">Preservation</span></div>
               <div className="flex items-center gap-2"><Cpu className="w-4 h-4" /> <span className="text-xs font-bold uppercase tracking-widest">Intelligence</span></div>
            </div>
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
                <div className="h-full bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-100 transition-all duration-500 flex flex-col">
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${proposal.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {proposal.icon}
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2 block">{proposal.subtitle}</span>
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{proposal.title}</h3>
                  </div>

                  <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1">
                    {proposal.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {proposal.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 rounded-lg text-[9px] font-bold text-slate-400 uppercase tracking-wider">{tag}</span>
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
        <footer className="mt-32 pt-20 border-t border-slate-100 text-center">
           <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">Vision for Sustainability</h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-10 text-lg italic">
                "Technical architecture should not just serve the needs of today, but ensure the scholarly heritage of Digital Humanities remains accessible for the next century."
              </p>
              <div className="flex justify-center items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs">RS</div>
                 <div className="text-left">
                    <div className="text-sm font-bold text-slate-800">Rupavathi Subramani</div>
                    <div className="text-xs text-slate-400 font-medium">Software Engineering Lead Proposal</div>
                 </div>
              </div>
           </div>
        </footer>

      </main>
    </div>
  );
}
