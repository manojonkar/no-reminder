import React from 'react';

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans selection:bg-[#D4AF37] selection:text-[#0A192F]">
      {/* Header Section */}
      <header className="py-16 px-8 text-center bg-gradient-to-b from-[#050c17] to-[#0A192F]">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#D4AF37] tracking-tight">
          Academy
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
          Welcome to your dedicated learning hub. Master the <span className="font-semibold text-white">Kill BUSYness</span> curriculum and reclaim your time.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 border-l-4 border-[#D4AF37] pl-6 py-2">
          <h2 className="text-3xl font-bold text-white">Chapter 6: Kill BUSYness</h2>
          <p className="text-gray-400 mt-2 text-lg">Shift from being busy to being productive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Micro-Video Lessons */}
          <div className="bg-[#112240] rounded-xl p-8 border border-[#233554] hover:border-[#D4AF37] transition-all duration-300 shadow-lg group">
            <div className="w-12 h-12 bg-[#0A192F] rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">Micro-Video Lessons</h3>
            <p className="text-gray-400 mb-6">Bite-sized, high-impact video content designed to teach core concepts in minutes.</p>
            <button className="px-6 py-2 bg-transparent border border-[#D4AF37] text-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-[#0A192F] font-semibold transition-colors">
              Start Watching
            </button>
          </div>

          {/* Audio Memos */}
          <div className="bg-[#112240] rounded-xl p-8 border border-[#233554] hover:border-[#D4AF37] transition-all duration-300 shadow-lg group">
            <div className="w-12 h-12 bg-[#0A192F] rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">Audio Memos</h3>
            <p className="text-gray-400 mb-6">Listen on the go. Deep dive discussions and guided reflections to solidify your learning.</p>
            <button className="px-6 py-2 bg-transparent border border-[#D4AF37] text-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-[#0A192F] font-semibold transition-colors">
              Listen Now
            </button>
          </div>

          {/* Interactive Worksheets */}
          <div className="bg-[#112240] rounded-xl p-8 border border-[#233554] hover:border-[#D4AF37] transition-all duration-300 shadow-lg group">
            <div className="w-12 h-12 bg-[#0A192F] rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">Interactive Worksheets</h3>
            <p className="text-gray-400 mb-6">Apply what you've learned with downloadable templates and actionable exercises.</p>
            <button className="px-6 py-2 bg-transparent border border-[#D4AF37] text-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-[#0A192F] font-semibold transition-colors">
              View Worksheets
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
