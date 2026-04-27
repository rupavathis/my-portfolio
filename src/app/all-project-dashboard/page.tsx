'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Users, Zap, Shield, AlertCircle, 
  Cpu, ChevronRight, BarChart3,
  Terminal, HardDrive, FileText, Search, Download, 
  Eye, CheckCircle2, AlertTriangle, Info, Layers,
  Database, Home
} from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  lead: string;
  pi: string;
  fundedBy: string;
  duration: string;
  role: string;
  description: string;
  isCurrent: boolean;
  // Infrastructure Metrics
  uptime: number;
  lastUpdate: string;
  apiAvailability: number;
  brokenLinks: number;
  // Content Metrics
  recordsCount: number;
  cataloguedPercent: number;
  metadataScore: number;
  digitizedCount: number;
  // Engagement
  users: number;
  searches: number;
  pageViews: number;
  downloads: number;
  contributors: number;
  avgSessionTime: string;
  // Health & Compliance
  status: 'operational' | 'maintenance' | 'issue' | 'at-risk';
  preservationStatus: 'Verified' | 'Monitoring' | 'Stale';
  fairCompliance: {
    findable: number;
    accessible: number;
    interoperable: number;
    reusable: number;
  };
  color: string;
  metrics: {
    cpu: number;
    memory: number;
    latency: number;
    errorRate: number;
    weeklyTrend: number[];
  };
}

const PROJECTS: Project[] = [
  {
    id: 'intempo',
    name: 'INTEMPO',
    lead: 'Raul Carstocea',
    pi: 'Prof. Raul Carstocea',
    fundedBy: 'European Research Council (ERC)',
    duration: '2025–2030',
    role: 'Principal Investigator',
    description: 'Insurgent Temporalities: Fascism as a Global Anti-Universalist Project. Investigates fascism through a global lens.',
    isCurrent: true,
    uptime: 100,
    lastUpdate: '2026-04-20',
    apiAvailability: 100,
    brokenLinks: 0,
    recordsCount: 1200,
    cataloguedPercent: 15,
    metadataScore: 92,
    digitizedCount: 450,
    users: 120,
    searches: 800,
    pageViews: 5400,
    downloads: 300,
    contributors: 18,
    avgSessionTime: '10m 15s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 90, accessible: 85, interoperable: 88, reusable: 92 },
    color: 'bg-indigo-500',
    metrics: { cpu: 5, memory: 28, latency: 85, errorRate: 0.00, weeklyTrend: [10, 15, 25, 35, 45, 50, 55] }
  },
  {
    id: 'colvet',
    name: 'COLVET',
    lead: 'Dónal Hassett',
    pi: 'Prof. Dónal Hassett',
    fundedBy: 'European Research Council (ERC)',
    duration: '2024–2028',
    role: 'Principal Investigator',
    description: 'Bringing the Veteran into Colonial History. Explores the global history of veterancy within colonial contexts.',
    isCurrent: true,
    uptime: 99.9,
    lastUpdate: '2026-04-19',
    apiAvailability: 100,
    brokenLinks: 0,
    recordsCount: 850,
    cataloguedPercent: 10,
    metadataScore: 85,
    digitizedCount: 200,
    users: 85,
    searches: 450,
    pageViews: 2100,
    downloads: 150,
    contributors: 8,
    avgSessionTime: '7m 30s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 82, accessible: 88, interoperable: 80, reusable: 85 },
    color: 'bg-rose-500',
    metrics: { cpu: 4, memory: 22, latency: 90, errorRate: 0.00, weeklyTrend: [5, 8, 12, 18, 22, 25, 28] }
  },
  {
    id: 'brokensong',
    name: 'BROKENSONG',
    lead: 'Karen Desmond',
    pi: 'Prof. Karen Desmond',
    fundedBy: 'European Research Council (ERC)',
    duration: '2023–2028',
    role: 'Principal Investigator',
    description: 'Polyphonic Singing and Communities of Music Writing. Focuses on medieval music in Britain and Ireland (c. 1150–1350).',
    isCurrent: true,
    uptime: 99.9,
    lastUpdate: '2026-04-10',
    apiAvailability: 100,
    brokenLinks: 1,
    recordsCount: 4500,
    cataloguedPercent: 35,
    metadataScore: 94,
    digitizedCount: 3200,
    users: 280,
    searches: 1800,
    pageViews: 8900,
    downloads: 600,
    contributors: 15,
    avgSessionTime: '12m 10s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 95, accessible: 92, interoperable: 94, reusable: 90 },
    color: 'bg-violet-500',
    metrics: { cpu: 18, memory: 48, latency: 140, errorRate: 0.01, weeklyTrend: [30, 32, 35, 38, 40, 42, 45] }
  },
  {
    id: 'ogham',
    name: 'OG(H)AM',
    lead: 'Nora White',
    pi: 'Dr. Nora White',
    fundedBy: 'Research Ireland / AHRC',
    duration: '2021–2025',
    role: 'Digital Lead',
    description: 'Harnessing digital technologies to transform understanding of ogham writing.',
    isCurrent: true,
    uptime: 99.8,
    lastUpdate: '2026-04-18',
    apiAvailability: 99,
    brokenLinks: 4,
    recordsCount: 3200,
    cataloguedPercent: 88,
    metadataScore: 95,
    digitizedCount: 2800,
    users: 650,
    searches: 3200,
    pageViews: 12400,
    downloads: 850,
    contributors: 24,
    avgSessionTime: '14m 20s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 98, accessible: 94, interoperable: 92, reusable: 96 },
    color: 'bg-emerald-500',
    metrics: { cpu: 15, memory: 42, latency: 110, errorRate: 0.01, weeklyTrend: [45, 48, 52, 50, 55, 58, 60] }
  },
  {
    id: 'emisos',
    name: 'EMISoS',
    lead: 'Nora White',
    pi: 'Dr. Nora White',
    fundedBy: 'Research Ireland',
    duration: '2023–2027',
    role: 'Technical Lead',
    description: 'Early Medieval Irish Scripts on Stone. Studies the origins and development of Irish epigraphic culture.',
    isCurrent: true,
    uptime: 99.9,
    lastUpdate: '2026-04-15',
    apiAvailability: 100,
    brokenLinks: 1,
    recordsCount: 2100,
    cataloguedPercent: 42,
    metadataScore: 89,
    digitizedCount: 1500,
    users: 320,
    searches: 1500,
    pageViews: 6200,
    downloads: 420,
    contributors: 12,
    avgSessionTime: '9m 45s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 85, accessible: 80, interoperable: 82, reusable: 85 },
    color: 'bg-blue-500',
    metrics: { cpu: 12, memory: 35, latency: 125, errorRate: 0.02, weeklyTrend: [20, 25, 28, 32, 35, 40, 42] }
  },
  {
    id: 'diagnostic',
    name: 'DiAgnostic',
    lead: 'David Stifter',
    pi: 'Prof. David Stifter',
    fundedBy: 'Research Ireland',
    duration: '2023–2027',
    role: 'Principal Investigator',
    description: 'Tracing Diatopic Variation in a Corpus of Old Irish. Analyzes linguistic variations in Old Irish texts.',
    isCurrent: true,
    uptime: 99.9,
    lastUpdate: '2026-04-12',
    apiAvailability: 100,
    brokenLinks: 0,
    recordsCount: 5200,
    cataloguedPercent: 28,
    metadataScore: 91,
    digitizedCount: 1200,
    users: 150,
    searches: 1200,
    pageViews: 4500,
    downloads: 320,
    contributors: 6,
    avgSessionTime: '15m 45s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 92, accessible: 85, interoperable: 95, reusable: 88 },
    color: 'bg-amber-500',
    metrics: { cpu: 22, memory: 55, latency: 180, errorRate: 0.00, weeklyTrend: [15, 18, 22, 25, 28, 30, 32] }
  },
  {
    id: 'leigheas',
    name: 'LEIGHEAS',
    lead: 'Deborah Hayden',
    pi: 'Dr. Deborah Hayden',
    fundedBy: 'Research Ireland / IRC',
    duration: '2022–2027',
    role: 'Principal Investigator',
    description: 'Language, Education and Medical Learning in the Premodern Gaelic World.',
    isCurrent: true,
    uptime: 99.8,
    lastUpdate: '2026-04-14',
    apiAvailability: 99,
    brokenLinks: 2,
    recordsCount: 3800,
    cataloguedPercent: 55,
    metadataScore: 93,
    digitizedCount: 2200,
    users: 210,
    searches: 1400,
    pageViews: 5800,
    downloads: 410,
    contributors: 9,
    avgSessionTime: '11m 20s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 94, accessible: 88, interoperable: 90, reusable: 92 },
    color: 'bg-cyan-500',
    metrics: { cpu: 14, memory: 40, latency: 130, errorRate: 0.01, weeklyTrend: [25, 28, 30, 32, 35, 38, 40] }
  },
  {
    id: 'letters',
    name: 'Letters 1916–23',
    lead: 'Stavros Angelis',
    pi: 'Prof. Susan Schreibman',
    fundedBy: 'IRC / An Post',
    duration: '2017–2019',
    role: 'Infrastructure Architect',
    description: 'Archive of letters from the Irish Revolution. Focuses on democratization of historical access.',
    isCurrent: false,
    uptime: 99.9,
    lastUpdate: '2026-04-05',
    apiAvailability: 100,
    brokenLinks: 2,
    recordsCount: 15420,
    cataloguedPercent: 92,
    metadataScore: 88,
    digitizedCount: 12100,
    users: 945,
    searches: 4200,
    pageViews: 18500,
    downloads: 1200,
    contributors: 45,
    avgSessionTime: '8m 24s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 95, accessible: 90, interoperable: 85, reusable: 80 },
    color: 'bg-slate-500',
    metrics: { cpu: 12, memory: 45, latency: 120, errorRate: 0.01, weeklyTrend: [45, 52, 49, 60, 55, 62, 58] }
  },
  {
    id: 'macmorris',
    name: 'MacMorris',
    lead: 'Maynooth University',
    pi: 'Prof. Pat Palmer',
    fundedBy: 'Irish Research Council (IRC)',
    duration: '2019–2023',
    role: 'Infrastructure Lead',
    description: 'Deep mapping cultural and social networks of Early Modern Ireland.',
    isCurrent: false,
    uptime: 99.8,
    lastUpdate: '2026-04-07',
    apiAvailability: 100,
    brokenLinks: 0,
    recordsCount: 22400,
    cataloguedPercent: 98,
    metadataScore: 96,
    digitizedCount: 18500,
    users: 980,
    searches: 6800,
    pageViews: 24000,
    downloads: 3100,
    contributors: 64,
    avgSessionTime: '15m 30s',
    status: 'operational',
    preservationStatus: 'Verified',
    fairCompliance: { findable: 98, accessible: 96, interoperable: 94, reusable: 95 },
    color: 'bg-indigo-600',
    metrics: { cpu: 8, memory: 34, latency: 95, errorRate: 0.00, weeklyTrend: [60, 65, 72, 68, 75, 82, 80] }
  }
];

export default function AllProjectDashboard() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS[0]);

  const currentProjects = useMemo(() => PROJECTS.filter(p => p.isCurrent), []);
  const pastProjects = useMemo(() => PROJECTS.filter(p => !p.isCurrent), []);

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans selection:bg-indigo-100">
      <div className="flex h-screen overflow-hidden">
        
        {/* SIDEBAR */}
        <div className="w-96 bg-white border-r border-slate-200 flex flex-col shadow-[20px_0_60px_rgba(0,0,0,0.02)] z-20 overflow-y-auto custom-scrollbar">
          <div className="p-8">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group">
               <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Return to Proposals</span>
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-[1.25rem] bg-slate-900 flex items-center justify-center shadow-lg">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-slate-900 uppercase leading-none mb-1">Project Health</h1>
                <p className="text-[10px] text-indigo-600 font-semibold tracking-wider uppercase">Infrastructure Observatory</p>
              </div>
            </div>

           

            <div className="space-y-8">
              {/* CURRENT PROJECTS */}
              <div>
                <h2 className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest px-2 mb-4 flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Current Projects
                </h2>
                <div className="space-y-2">
                  {currentProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`w-full group flex items-center justify-between p-4 rounded-[1.25rem] transition-all duration-300 ${
                        selectedProject?.id === project.id
                          ? 'bg-slate-900 shadow-xl scale-[1.01]'
                          : 'hover:bg-slate-50 border border-transparent hover:border-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${project.color}`}>
                          {project.name[0]}
                        </div>
                        <div className="text-left">
                          <div className={`text-xs font-bold ${selectedProject?.id === project.id ? 'text-white' : 'text-slate-800'}`}>
                            {project.name}
                          </div>
                          <div className={`text-[10px] ${selectedProject?.id === project.id ? 'text-slate-400' : 'text-slate-500'}`}>{project.pi}</div>
                        </div>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 transition-all ${selectedProject?.id === project.id ? 'text-white' : 'text-slate-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* PAST PROJECTS */}
              <div>
                <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-4 flex items-center gap-2">
                  <Database className="w-3 h-3" /> Past Projects
                </h2>
                <div className="space-y-2">
                  {pastProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`w-full group flex items-center justify-between p-4 rounded-[1.25rem] transition-all duration-300 ${
                        selectedProject?.id === project.id
                          ? 'bg-slate-900 shadow-xl scale-[1.01]'
                          : 'hover:bg-slate-50 border border-transparent hover:border-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${project.color}`}>
                          {project.name[0]}
                        </div>
                        <div className="text-left">
                          <div className={`text-xs font-bold ${selectedProject?.id === project.id ? 'text-white' : 'text-slate-800'}`}>
                            {project.name}
                          </div>
                          <div className={`text-[10px] ${selectedProject?.id === project.id ? 'text-slate-400' : 'text-slate-500'}`}>{project.pi}</div>
                        </div>
                      </div>
                      {project.status === 'at-risk' || project.status === 'issue' ? (
                        <AlertTriangle className={`w-3.5 h-3.5 text-amber-500 animate-pulse`} />
                      ) : (
                        <ChevronRight className={`w-3.5 h-3.5 transition-all ${selectedProject?.id === project.id ? 'text-white' : 'text-slate-300'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-10 bg-[#FDFEFF] custom-scrollbar">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-6xl mx-auto"
              >
                {/* PROJECT HEADER */}
               

                <div className="mb-10">
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">{selectedProject.name}</h1>
                  <p className="text-xl text-slate-600 font-medium max-w-3xl leading-relaxed mb-10">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Principal Investigator</div>
                      <div className="text-sm font-bold text-slate-900">{selectedProject.pi}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Funded By</div>
                      <div className="text-sm font-bold text-slate-900">{selectedProject.fundedBy}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Duration</div>
                      <div className="text-sm font-bold text-slate-900">{selectedProject.duration}</div>
                    </div>
                  </div>
                </div>

                {/* SCHOLARLY CONTENT METRICS */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-50 text-blue-700 rounded-xl"><FileText className="w-4 h-4" /></div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Records</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900">{selectedProject.recordsCount.toLocaleString()}</div>
                    <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase">Total in Database</div>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl"><CheckCircle2 className="w-4 h-4" /></div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Catalogued</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900">{selectedProject.cataloguedPercent}%</div>
                    <div className="mt-3 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full" style={{ width: `${selectedProject.cataloguedPercent}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-violet-50 text-violet-700 rounded-xl"><Info className="w-4 h-4" /></div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Metadata</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900">{selectedProject.metadataScore}%</div>
                    <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase">Completeness Index</div>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-amber-50 text-amber-700 rounded-xl"><Activity className="w-4 h-4" /></div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Digitized</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900">{selectedProject.digitizedCount.toLocaleString()}</div>
                    <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase">Media Assets</div>
                  </div>
                </div>

                {/* ENGAGEMENT & REASEARCH METRICS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                  <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">User Engagement Trends</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-400 mb-2"><Search className="w-3 h-3" /> <span className="text-[10px] font-bold uppercase tracking-widest">Searches</span></div>
                        <div className="text-3xl font-black tracking-tight">{selectedProject.searches.toLocaleString()}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-400 mb-2"><Eye className="w-3 h-3" /> <span className="text-[10px] font-bold uppercase tracking-widest">Views</span></div>
                        <div className="text-3xl font-black tracking-tight">{selectedProject.pageViews.toLocaleString()}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-400 mb-2"><Download className="w-3 h-3" /> <span className="text-[10px] font-bold uppercase tracking-widest">Downloads</span></div>
                        <div className="text-3xl font-black tracking-tight">{selectedProject.downloads.toLocaleString()}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-400 mb-2"><Users className="w-3 h-3" /> <span className="text-[10px] font-bold uppercase tracking-widest">Scholars</span></div>
                        <div className="text-3xl font-black tracking-tight">{selectedProject.contributors}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Technical Integrity</h3>
                      <div className="space-y-5">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-500 uppercase tracking-widest">API Uptime</span>
                          <span className="text-emerald-700 font-black">{selectedProject.apiAvailability}%</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-500 uppercase tracking-widest">Broken Links</span>
                          <span className={`${selectedProject.brokenLinks > 10 ? 'text-rose-600' : 'text-slate-900'} font-black`}>{selectedProject.brokenLinks}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-500 uppercase tracking-widest">Latency</span>
                          <span className="text-slate-900 font-black">{selectedProject.metrics.latency}ms</span>
                        </div>
                      </div>
                    </div>
                    {selectedProject.status === 'at-risk' && (
                      <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-200">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <p className="text-[10px] text-amber-900 font-bold leading-normal uppercase tracking-wider">
                          Critical: Content review required.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

               
                {/* WARNING LOG */}
                {selectedProject.status !== 'operational' && (
                  <div className="p-8 rounded-[2.5rem] bg-rose-50 border border-rose-200 mb-10 flex items-center gap-8 animate-pulse">
                    <div className="p-4 bg-rose-100 text-rose-700 rounded-2xl shadow-sm"><AlertTriangle className="w-8 h-8" /></div>
                    <div>
                      <div className="text-xs font-black text-rose-900 uppercase tracking-[0.2em] mb-1">Maintenance Alert</div>
                      <p className="text-sm text-rose-800 font-bold leading-relaxed">Legacy migration or stale metadata identified. Immediate technical attention required to maintain scholarly integrity.</p>
                    </div>
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
      `}</style>
    </div>
  );
}
