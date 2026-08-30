import React from 'react';

export default function DashboardPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#0A192F] text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Dashboard header */}
        <div className="flex justify-between items-center mb-12 border-b border-slate-700 pb-6">
          <div>
            <h1 className="text-3xl font-bold font-serif text-[#D4AF37]">NFR Executive Dashboard</h1>
            <p className="text-[#8892B0] mt-2 text-sm">Exception-Based Reporting (Zero Follow-up Required)</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#D4AF37] text-[#0A192F] px-5 py-2 rounded-lg font-bold hover:opacity-90 transition shadow-md">
              Voice Dictation (Mic)
            </button>
          </div>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Action Area (Exceptions) */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="bg-red-500 w-3 h-3 rounded-full inline-block animate-pulse"></span>
              Requires Your Attention (Exceptions)
            </h2>
            
            {/* Escalation Card 1 */}
            <div className="bg-white/5 border border-red-500/30 p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Q3 Financial Projections Delayed</h3>
                  <p className="text-sm text-[#8892B0]">Assignee: Sarah Jenkins (Finance)</p>
                </div>
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/20">
                  Blocked
                </span>
              </div>
              
              <div className="bg-black/20 p-4 rounded-lg mb-6 border border-white/5">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">BLUF (Bottom Line Up Front):</strong> Sarah is blocked because the APAC data hasn't been submitted by the regional team. 
                </p>
              </div>

              <div className="bg-[#D4AF37]/10 p-5 rounded-lg border border-[#D4AF37]/30">
                <p className="text-sm font-bold text-[#D4AF37] mb-2">✨ AI Proposed Solution:</p>
                <p className="text-sm text-white mb-4">Push the board review to next Tuesday and automatically escalate the data request to the VP of APAC.</p>
                <div className="flex gap-3">
                  <button className="bg-[#D4AF37] text-[#0A192F] px-4 py-2 rounded-md font-bold text-sm hover:opacity-90">
                    Approve Solution ✓
                  </button>
                  <button className="bg-transparent border border-[#8892B0] text-[#8892B0] px-4 py-2 rounded-md font-bold text-sm hover:bg-white/5">
                    Modify
                  </button>
                </div>
              </div>
            </div>

            {/* Escalation Card 2 */}
            <div className="bg-white/5 border border-yellow-500/30 p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Website Redesign Assets</h3>
                  <p className="text-sm text-[#8892B0]">Assignee: Marketing Agency</p>
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/20">
                  At Risk
                </span>
              </div>
              
              <div className="bg-[#D4AF37]/10 p-5 rounded-lg border border-[#D4AF37]/30 mt-4">
                <p className="text-sm font-bold text-[#D4AF37] mb-2">✨ AI Proposed Solution:</p>
                <p className="text-sm text-white mb-4">Release an additional $500 from the buffer budget for emergency freelance help to hit the Friday deadline.</p>
                <div className="flex gap-3">
                  <button className="bg-[#D4AF37] text-[#0A192F] px-4 py-2 rounded-md font-bold text-sm hover:opacity-90">
                    Authorize Budget ✓
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Auto-Tracked Items */}
          <div className="md:col-span-1 space-y-6">
            
            <div className="bg-white/5 border border-green-500/20 p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl font-serif text-green-400 mb-2">42</div>
              <h2 className="text-lg font-bold text-white">Tasks On Track</h2>
              <p className="text-xs text-[#8892B0] mt-2">NFR AI is automatically collecting status updates for these. No action needed.</p>
              <button className="text-xs text-[#D4AF37] underline mt-4 hover:text-white">View list (Not Recommended)</button>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Passively Extracted</h2>
              <p className="text-xs text-[#8892B0] mb-4">The AI automatically parsed these from your Slack and Zoom meetings today:</p>
              
              <div className="space-y-4">
                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                  <div className="text-xs text-gray-400 mb-1">From: Zoom Call (10:00 AM)</div>
                  <div className="text-sm text-white">"John will send the updated contracts by EOD Wednesday."</div>
                  <div className="text-xs text-green-400 mt-2 font-bold">✓ Logged & Tracking John</div>
                </div>
                
                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                  <div className="text-xs text-gray-400 mb-1">From: Slack #leadership</div>
                  <div className="text-sm text-white">"I'll have the deck ready for review tomorrow morning." (You)</div>
                  <div className="text-xs text-blue-400 mt-2 font-bold">✓ Added to your To-Do</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
