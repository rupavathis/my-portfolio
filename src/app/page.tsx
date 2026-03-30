import Image from "next/image";

const achievements = [
  {
    title: "SME & Modernization Lead",
    description: "Selected as Subject Matter Expert at Virtusa to lead the modernization of legacy pricing applications for BT Ireland.",
    icon: "🚀",
  },
  {
    title: "Academic Excellence",
    description: "Successfully navigated a significant career transition into higher education at Maynooth University.",
    icon: "🎓",
  },
  {
    title: "Industrial Intelligence",
    description: "Developed intelligent systems at Eaton, focusing on performance and enterprise-scale maintainability.",
    icon: "⚡",
  },
  {
    title: "Cloud Scale @ Microsoft",
    description: "Currently driving high-impact solutions within Microsoft's ecosystem, leveraging years of modernization expertise.",
    icon: "💻",
  },
];

const timeline = [
  {
    period: "Early Career — 2020",
    role: "Software Developer (SME)",
    company: "Virtusa / BT Ireland",
    description: "Started in Chennai, moved to Belfast as a Subject Matter Expert. Led modernization of legacy pricing systems for British Telecom.",
    color: "bg-blue-600",
    location: "Chennai ✈️ Belfast"
  },
  {
    period: "2020 Sep — 2024 July",
    role: "Software Professional",
    company: "Maynooth University",
    description: "Contributed to academic systems and digital transformation within the University environment.",
    color: "bg-emerald-600",
    location: "Maynooth, Ireland"
  },
  {
    period: "2024 Aug — 2025 July",
    role: "Intelligent Systems Engineer",
    company: "Eaton Intelligent",
    description: "Focused on building intelligent, data-driven solutions for industrial and enterprise applications.",
    color: "bg-amber-500",
    location: "Ireland"
  },
  {
    period: "2025 Aug — Present",
    role: "Software Engineer",
    company: "Microsoft",
    description: "Currently part of the Microsoft team, working on world-class software at global scale.",
    color: "bg-sky-500",
    location: "Ireland"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tighter">RS</span>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#journey" className="hover:text-blue-600 transition-colors">Career Path</a>
            <a href="#achievements" className="hover:text-blue-600 transition-colors">Impact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about" className="py-24 px-6 md:py-32">
          <div className="container mx-auto max-w-4xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
              Rupavathi Subramani
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              From Chennai to Belfast, and onto Microsoft. A journey of modernization, intelligence, and scale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#journey" className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all dark:bg-zinc-50 dark:text-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-none">
                View My Career Path
              </a>
              <a href="mailto:contact@rupavathi.com" className="px-8 py-3 border border-zinc-300 rounded-full font-medium hover:bg-zinc-100 transition-all dark:border-zinc-700 dark:hover:bg-zinc-900">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Visual Journey Section */}
        <section id="journey" className="py-24 bg-white dark:bg-zinc-950 px-6 overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-4">The Career Roadmap</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">Tracing my professional evolution across industries and borders.</p>
              <div className="h-1.5 w-24 bg-blue-600 rounded mx-auto mt-6"></div>
            </div>

            <div className="relative">
              {/* Complex Journey Graphic */}
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.07] pointer-events-none hidden xl:block">
                <svg viewBox="0 0 1000 600" className="w-full h-full">
                  <path 
                    d="M 50 500 Q 150 100 300 300 T 550 200 T 800 100" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    strokeDasharray="20 20"
                    className="text-blue-600 animate-[dash_15s_linear_infinite]"
                  />
                  {/* Milestones */}
                  <circle cx="50" cy="500" r="12" fill="currentColor" className="text-blue-600" />
                  <circle cx="300" cy="300" r="12" fill="currentColor" className="text-emerald-600" />
                  <circle cx="550" cy="200" r="12" fill="currentColor" className="text-amber-500" />
                  <circle cx="800" cy="100" r="12" fill="currentColor" className="text-sky-500" />
                  
                  <text x="40" y="540" fontSize="18" fontWeight="bold" fill="currentColor">Chennai</text>
                  <text x="290" y="340" fontSize="18" fontWeight="bold" fill="currentColor">Belfast</text>
                  <text x="540" y="240" fontSize="18" fontWeight="bold" fill="currentColor">Maynooth</text>
                  <text x="790" y="140" fontSize="18" fontWeight="bold" fill="currentColor">Microsoft</text>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {timeline.map((step, index) => (
                  <div key={index} className="group relative bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/5">
                    <div className={`absolute top-8 left-[-1rem] w-2 h-16 ${step.color} rounded-full hidden md:block opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-black tracking-widest uppercase px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400">
                        {step.period}
                      </span>
                      <span className="text-sm font-bold text-blue-600">{step.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{step.company}</h3>
                    <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">{step.role}</p>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Impact Section */}
        <section id="achievements" className="py-24 px-6 bg-zinc-50 dark:bg-black">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Key Achievements</h2>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900 hover:-translate-y-2 transition-transform shadow-sm">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-2xl font-black tracking-tighter block mb-2">RS</span>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              © 2026 Rupavathi Subramani. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 font-medium">
            <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">GitHub</a>
            <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
