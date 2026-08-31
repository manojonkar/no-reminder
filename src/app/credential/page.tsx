"use client";

import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';

export default function UniversalCredential() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#0A192F] flex flex-col">
      <GlobalHeader activeTab="none" />
      
      <main className="flex-grow w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
        
        <div className="w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mt-8 relative overflow-hidden">
          
          {/* Background pattern */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 bg-[#0A192F] text-[#D4AF37] rounded-full flex items-center justify-center text-3xl font-serif mb-6 shadow-lg border-4 border-white">
              SJ
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-2">Sarah Jenkins</h1>
            <p className="text-gray-500 font-medium mb-8">Chief Marketing Officer</p>

            <div className="flex gap-12 w-full justify-center mb-12 border-y border-gray-100 py-8">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-light text-[#0A192F] mb-2">98<span className="text-xl text-gray-400">%</span></span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">NFR Score</span>
              </div>
              <div className="w-px bg-gray-100"></div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-light text-[#D4AF37] mb-2">360</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Verified</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 w-full text-left mb-8 border border-gray-100">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-[#D4AF37]">✓</span> High Performance Leader
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Sarah Jenkins is a certified NFR Leader. This credential verifies that she operates with zero organizational drag, requires no follow-ups, and consistently fulfills commitments ahead of deadlines.
              </p>
            </div>

            <button className="w-full py-4 bg-[#0077b5] text-white font-bold rounded-xl shadow-md hover:bg-[#006097] transition flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Add to LinkedIn Profile
            </button>

          </div>
        </div>
        
        <p className="mt-8 text-xs text-gray-400 font-medium">
          Verified by the No Follow-Up Required™ Trust Protocol
        </p>
      </main>
    </div>
  );
}
