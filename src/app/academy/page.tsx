import GlobalHeader from "@/components/GlobalHeader";
// @ts-ignore
import { PlayCircle, CheckCircle, Lock } from "lucide-react";

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A192F] font-sans selection:bg-[#D4AF37] selection:text-[#0A192F]">
      <GlobalHeader activeTab="academy" />

      <main className="max-w-6xl mx-auto px-6 py-32 space-y-40">
        {/* Hero Section */}
        <header className="text-center space-y-8 max-w-4xl mx-auto">
          <p className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm">
            NFR Academy
          </p>
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-2xl border-4 border-[#D4AF37] bg-white">
              <img 
                src="/kill-busyness-lion.jpg" 
                alt="KILL BUSYness Lion Emblem" 
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A192F]">
              KILL BUSYness
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Premium educational curriculum designed to permanently eliminate administrative friction from your workflow.
          </p>
        </header>

        {/* Featured Chapter */}
        <section className="space-y-12">
          <div className="flex items-center justify-between border-b border-gray-100 pb-8">
            <h2 className="text-3xl font-light tracking-tight">Chapter 6: The Follow-Up Audit</h2>
            <span className="text-[#D4AF37] font-medium">In Progress</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0&controls=1&rel=0" 
                title="Leadership & Follow-Up" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium">The Leadership Tax Audit</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                Identify the silent leaks in your organization. Ask yourself: How much of your day is spent chasing others? How much of your team's day is spent waiting on you? In this masterclass module, we break down the exact mathematical formula to calculate your team's Leadership Tax, and the automated NFR framework to reclaim it.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-4 bg-[#0A192F] text-white rounded-xl shadow-md font-bold hover:bg-gray-800 transition-colors">
                  Resume Lesson
                </button>
                <button className="px-8 py-4 bg-white text-[#0A192F] border border-gray-200 shadow-sm rounded-xl font-bold hover:border-gray-300 transition-colors">
                  View Workbook
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Micro-Video Lessons */}
        <section className="space-y-12">
          <h2 className="text-3xl font-light tracking-tight border-b border-gray-100 pb-8">
            Micro-Video Lessons
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The 5-Minute CRM Detox", duration: "4:12", completed: true },
              { title: "Automating the 'Just Checking In'", duration: "6:45", completed: true },
              { title: "Building the NFR Funnel", duration: "8:30", completed: false },
              { title: "Advanced Trigger Mapping", duration: "12:15", locked: true },
              { title: "Client Retention Architecture", duration: "15:00", locked: true },
              { title: "Scaling Without Staff", duration: "9:20", locked: true },
            ].map((lesson, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video bg-gray-50 rounded-xl mb-6 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {lesson.locked ? (
                    <Lock className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                  ) : (
                    <PlayCircle className="w-10 h-10 text-[#0A192F] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={1} />
                  )}
                  {!lesson.locked && (
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-[#0A192F]">
                      {lesson.duration}
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h4 className={`text-lg font-medium ${lesson.locked ? 'text-gray-400' : 'text-[#0A192F]'}`}>
                    {lesson.title}
                  </h4>
                  {lesson.completed && (
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NFR Certification Status */}
        <section className="space-y-12 pb-32">
          <h2 className="text-3xl font-light tracking-tight border-b border-gray-100 pb-8">
            NFR Certification Status
          </h2>
          
          <div className="bg-[#0A192F] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <svg className="w-64 h-64 text-[#D4AF37]" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0L61 39H100L68.5 62L80.5 100L50 76.5L19.5 100L31.5 62L0 39H39L50 0Z" />
              </svg>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">
                    Current Level
                  </p>
                  <h3 className="text-4xl font-light">Architect</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium text-gray-300">
                    <span>Progress to Master</span>
                    <span>68%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D4AF37] w-[68%]" />
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  You are 2 modules away from achieving Master certification. Complete the Advanced Trigger Mapping and Client Retention Architecture lessons to unlock your credential.
                </p>
              </div>
              
              <div className="flex items-center justify-center md:justify-end">
                <div className="text-center p-8 border border-white/10 rounded-2xl backdrop-blur-sm bg-white/5">
                  <p className="text-5xl font-light text-[#D4AF37] mb-2">14</p>
                  <p className="text-sm font-medium text-gray-300 uppercase tracking-widest">
                    CEU Credits Earned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
