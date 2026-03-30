"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const achievements = [
  {
    title: "Project Milestone",
    description: "Successfully led a team of 10 to deliver a mission-critical enterprise solution 2 months ahead of schedule.",
    icon: "🏆",
  },
  {
    title: "Innovation Award",
    description: "Developed an AI-driven automation tool that reduced operational costs by 30% annually.",
    icon: "💡",
  },
  {
    title: "Client Excellence",
    description: "Maintained a 100% client satisfaction rate across multiple high-stakes projects.",
    icon: "🤝",
  },
  {
    title: "Process Improvement",
    description: "Implemented a new CI/CD pipeline that improved deployment frequency by 50%.",
    icon: "⚙️",
  },
];

const timeline = [
  {
    period: "Early Career — 2020",
    role: "Software Developer (SME)",
    company: "Virtusa / British Telecom (BT)",
    description: "First I started my career as 'Software developer' in Virtusa. I worked with our client British Telecom (BT) on pricing and sales systems that generate quotations for wholesale customers using both real-time and historical data. Selected as a Subject Matter Expert, I worked on-site at BT Ireland’s headquarters in Belfast, where I led the modernisation of key legacy pricing applications onto a new technology stack, improved system performance and maintainability, and contributed to the migration of core pricing and quotation services from on-premises infrastructure to the cloud.",
    color: "from-blue-600 to-indigo-700",
    location: "Chennai ✈️ Belfast",
    bgText: "VIRTUSA"
  },
  {
    period: "2020 Sep — 2024 July",
    role: "Software Professional",
    company: "Maynooth University",
    description: "I switched to Maynooth University where I contributed to academic systems and digital transformation, managing complex administrative platforms during a period of rapid modernization.",
    color: "from-emerald-600 to-teal-700",
    location: "Maynooth, Ireland",
    bgText: "MAYNOOTH"
  },
  {
    period: "2024 Aug — 2025 July",
    role: "Intelligent Systems Engineer",
    company: "Eaton Intelligent",
    description: "Joined Eaton Intelligent to focus on building intelligent, data-driven solutions for industrial and enterprise applications, bridging the gap between hardware and software.",
    color: "from-amber-500 to-orange-600",
    location: "Ireland",
    bgText: "EATON"
  },
  {
    period: "2025 Aug — Present",
    role: "Software Engineer",
    company: "Microsoft",
    description: "Currently working at Microsoft, contributing to world-class software at global scale and leveraging expertise in modernization and intelligent systems.",
    color: "from-sky-500 to-blue-600",
    location: "Ireland",
    bgText: "MICROSOFT"
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-blue-200">
      {/* Navigation Header */}
      <header className="sticky top-0 z-[100] w-full border-b border-zinc-200 bg-white/70 backdrop-blur-md dark:border-zinc-800 dark:bg-black/70">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tighter">RS</span>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#journey" className="hover:text-blue-600 transition-colors">The Journey</a>
            <a href="#achievements" className="hover:text-blue-600 transition-colors">Achievements</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about" className="relative h-screen flex items-center px-6 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          >
             <svg viewBox="0 0 800 800" className="w-full h-full text-blue-600">
                <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
                <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
             </svg>
          </div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 leading-[0.9]">
              Rupavathi <br /> Subramani
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed">
              A results-driven professional dedicated to building high-impact digital solutions and leading teams toward technical excellence.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#journey" className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:scale-105 transition-all dark:bg-zinc-50 dark:text-zinc-900 shadow-xl shadow-blue-500/20">
                View Achievements
              </a>
              <a href="mailto:contact@rupavathi.com" className="px-10 py-4 border border-zinc-300 rounded-full font-bold hover:bg-zinc-100 transition-all dark:border-zinc-700 dark:hover:bg-zinc-900">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex justify-center p-2">
              <div className="w-1 h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Parallax Journey Section */}
        <section id="journey" className="relative py-24 bg-zinc-100 dark:bg-zinc-950">
          <div className="container mx-auto px-6 mb-20 text-center">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Professional Journey</h2>
             <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm font-bold">Scroll to see my experience</p>
          </div>

          <div className="max-w-5xl mx-auto px-6 pb-32">
            <div className="space-y-[20vh]">
              {timeline.map((step, index) => (
                <div 
                  key={index} 
                  className="sticky top-32 group"
                >
                  <div className={`relative overflow-hidden bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-zinc-200 dark:border-zinc-800 transition-all duration-500 group-hover:scale-[1.01]`}>
                    {/* Background Parallax Text */}
                    <div className="absolute -right-10 -bottom-10 text-[10rem] font-black text-zinc-100 dark:text-zinc-800 opacity-50 select-none pointer-events-none group-hover:translate-x-4 transition-transform duration-700">
                      {step.bgText}
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl text-white shadow-2xl shrink-0`}>
                        {index === 0 ? "🇮🇳" : index === 3 ? "Ⓜ️" : "🍀"}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="text-sm font-black tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-4 py-1 rounded-full">
                            {step.period}
                          </span>
                          <span className="text-zinc-400 font-bold uppercase text-xs tracking-widest">{step.location}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">{step.company}</h3>
                        <p className="text-xl font-bold text-zinc-600 dark:text-zinc-300 mb-6">{step.role}</p>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="achievements" className="py-32 px-6 bg-white dark:bg-black">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Professional Achievements</h2>
              <div className="h-2 w-24 bg-blue-600 rounded mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div 
                  key={index} 
                  className="p-8 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-xl font-black mb-3 group-hover:text-white">{item.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed group-hover:text-blue-50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 bg-zinc-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <span className="text-3xl font-black tracking-tighter block mb-4">RS</span>
            <p className="text-zinc-500 text-sm">
              © 2026 Rupavathi Subramani. Built with Next.js and Tailwind CSS.
            </p>
          </div>
          <div className="flex gap-12 font-black tracking-widest uppercase text-xs">
            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
