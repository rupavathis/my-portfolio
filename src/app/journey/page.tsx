'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Code2, 
  Rocket, 
  ChevronDown,
  LineChart,
  Layout
} from 'lucide-react';

// --- Components ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const Card = ({ title, subtitle, content, points, icon: Icon, color }: any) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl max-w-4xl w-full">
    <div className="flex items-center gap-4 mb-6">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={32} className="text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-blue-400 font-medium">{subtitle}</p>
      </div>
    </div>
    <div className="space-y-4 text-gray-300">
      <p className="text-lg leading-relaxed">{content}</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Main Page ---

export default function JourneyPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-[#050505] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left z-50" 
        style={{ scaleX }}
      />

      {/* Floating Navigation (Simplified) */}
      <nav className="fixed top-8 right-8 z-40 hidden md:flex flex-col gap-4">
        <div className="h-32 w-px bg-white/10 mx-auto" />
        <span className="text-[10px] uppercase tracking-[0.3em] vertical-text text-gray-500 origin-center rotate-90 whitespace-nowrap">
          2017 — 2026 JOURNEY
        </span>
      </nav>

      {/* Slide 1: Introduction */}
      <Section className="items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            From Enterprise Systems <br /> to Global Identity
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            A 9-Year Journey in Full-Stack Engineering, Innovation, and Leadership.
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-20 flex justify-center"
          >
            <ChevronDown size={40} className="text-blue-500" />
          </motion.div>
        </motion.div>
      </Section>

      {/* Slide 2 & 3: Virtusa & BT */}
      <Section>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <Card 
            icon={Briefcase}
            color="bg-purple-600"
            title="The Foundation: Virtusa & BT"
            subtitle="2017 — Software Engineer"
            content="My career began with solving complex enterprise problems for British Telecom's wholesale pricing systems. This was where I learned how technology decisions affect real business outcomes."
            points={[
              "Modernised legacy apps to React/.NET Core",
              "95% improvement in system performance",
              "Selected as SME for Belfast transformation",
              "Migrated key services to the Cloud"
            ]}
          />
          <div className="flex-1 space-y-8">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Rocket className="text-purple-400" size={20} />
                The Growth Angle
              </h3>
              <p className="text-gray-400">Moving beyond implementation to leading technical decisions and cloud transformation projects.</p>
            </div>
            <div className="text-8xl font-black text-white/5 select-none">VIRTUSA</div>
          </div>
        </div>
      </Section>

      {/* Slide 4, 5, 6: Maynooth University */}
      <Section className="bg-gradient-to-b from-black to-blue-950/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl font-bold mb-4">Building from Scratch</h2>
            <p className="text-blue-400 text-xl mb-6">Maynooth University: MACMORRIS</p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Deck.gl', 'D3.js', 'PostgreSQL', 'Python', 'Azure', 'NGINX'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">{tech}</span>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <video 
                src="/macmorris.mov" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-mono text-blue-400 tracking-tighter uppercase">Platform Demonstration: Interactive Historical Mapping</span>
              </div>
            </div>
            <Card 
              icon={Layout}
              color="bg-blue-600"
              title="Bringing Research to Life"
              subtitle="The Creator Phase"
              content="I designed and built a Digital Humanities platform from the ground up, translating academic research into interactive maps and network graphs."
              points={[
                "End-to-end platform architecture",
                "Interactive maps (Deck.gl/D3.js)",
                "Automated Python ETL pipelines",
                "Managed full platform lifecycle"
              ]}
            />
            <div className="p-8 border-l-2 border-blue-500 bg-blue-500/5">
              <p className="italic text-gray-300 font-serif text-lg">
                "I discovered that one of my strengths is making complex information easy to understand through thoughtful design and visualisation."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Slide 7: Eaton */}
      <Section>
        <div className="flex flex-col items-center">
          <Card 
            icon={Cpu}
            color="bg-orange-600"
            title="Real-Time IoT Systems"
            subtitle="Eaton — Senior Frontend Engineer"
            content="Adapting my skills to the energy technology space, building dashboards for real-time power distribution monitoring."
            points={[
              "IoT sensor data visualisation",
              "Automated reporting systems",
              "Modernised CI/CD practices",
              "Actionable building insights"
            ]}
          />
          <div className="mt-12 flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <Database size={48} />
            <LineChart size={48} />
            <Code2 size={48} />
          </div>
        </div>
      </Section>

      {/* Slide 8 & 9: Microsoft */}
      <Section className="bg-gradient-to-b from-black to-indigo-950/30">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <Card 
            icon={Globe}
            color="bg-blue-500"
            title="Global Scale Identity"
            subtitle="Microsoft — Security & Identity"
            content="Working on Microsoft Entra (Azure AD) to build secure identity experiences used by millions worldwide."
            points={[
              "Passkey-based authentication flows",
              "Passwordless strategy contribution",
              "Led High-Severity Incident Response",
              "Managed 48-hour SLA risk mitigation"
            ]}
          />
          <div className="flex-1 text-center md:text-left">
            <ShieldCheck size={120} className="text-blue-500 mb-6 mx-auto md:mx-0" />
            <h3 className="text-3xl font-bold mb-4">Trusted Technical Leader</h3>
            <p className="text-gray-400 text-lg">
              Presenting security findings to senior leadership and managing critical feature rollouts at a global scale.
            </p>
          </div>
        </div>
      </Section>

      {/* Slide 10: Conclusion */}
      <Section className="items-center text-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">Looking Back and Looking Forward</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Ownership", source: "Virtusa" },
              { label: "Creativity", source: "Maynooth" },
              { label: "Adaptability", source: "Eaton" },
              { label: "Leadership", source: "Microsoft" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500 transition-colors">
                <div className="text-blue-500 font-bold text-xl mb-1">{item.label}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest">{item.source}</div>
              </div>
            ))}
          </div>
          <p className="text-3xl font-light italic text-gray-300 leading-relaxed mb-12">
            “My journey has been about growing from a developer into someone who can design, build, lead, and deliver technology that matters.”
          </p>
          <div className="h-24 w-px bg-gradient-to-b from-blue-500 to-transparent mx-auto" />
        </div>
      </Section>

      <footer className="py-10 text-center text-gray-600 text-sm tracking-widest uppercase">
        2017 — 2026 • Career Journey Platform
      </footer>
    </main>
  );
}
