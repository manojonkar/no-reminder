import React from 'react';
import { CommitmentForm } from '@/components/CommitmentForm';
import { GhostwriterEscalation } from '@/components/GhostwriterEscalation';
import AIDraftReview from '@/components/AIDraftReview';
import IntegrationsPanel from '@/components/IntegrationsPanel';
import PeerReviewWidget from '@/components/PeerReviewWidget';
import ReliabilityScoreboard from '@/components/ReliabilityScoreboard';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white p-8 font-sans">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back. Stay on top of your execution and transformation.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Execution Hub */}
        <section className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0A192F] flex items-center justify-center text-sm">1</span>
              Execution Hub
            </h2>
            
            {/* Log a Commitment */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 hover:border-[#D4AF37]/50 transition-colors">
              <CommitmentForm />
            </div>

            {/* AI Draft Review */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 hover:border-[#D4AF37]/50 transition-colors">
              <AIDraftReview />
            </div>

            {/* Active Promises */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-xl font-medium mb-4">Active Promises</h3>
              <ul className="space-y-4">
                <li className="flex items-start justify-between p-4 bg-black/20 rounded-lg border-l-4 border-[#D4AF37]">
                  <div>
                    <h4 className="font-medium text-lg">Send Q3 Financial Report</h4>
                    <p className="text-sm text-gray-400 mt-1">Promised to Sarah Jenkins</p>
                  </div>
                  <span className="text-sm px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full">In 2 hours</span>
                </li>
              </ul>
            </div>

            {/* At-Risk Warnings & Ghostwriter Escalation */}
            <div className="bg-white/5 border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition-colors relative overflow-hidden mb-6">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <span className="text-red-400">⚠️</span> At-Risk Warnings
              </h3>
              <div className="mb-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <h4 className="font-medium text-red-200">Prepare Board Slides</h4>
                <p className="text-sm text-red-300/80 mt-1">Due in 30 minutes. Status: Not started.</p>
              </div>
              
              <GhostwriterEscalation />
            </div>

            {/* Integrations & Settings */}
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6 flex items-center gap-3 mt-8">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0A192F] flex items-center justify-center text-sm">⚙️</span>
              Passive Capture Integrations
            </h2>
            <IntegrationsPanel />

          </div>
        </section>

        {/* Right Side: Transformation Journey */}
        <section className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0A192F] flex items-center justify-center text-sm">2</span>
              Transformation Journey
            </h2>
            
            {/* Monthly 360 Certification */}
            <div className="mb-6">
              <PeerReviewWidget />
            </div>

            {/* Next Learning Module */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-xl font-medium mb-4">Next Learning Module</h3>
              <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-[#0A192F] to-[#1a2f52] border border-white/10 flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#D4AF37] text-[#0A192F] text-xs font-bold rounded-full uppercase tracking-wider">
                  Module 4
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">The Art of the Immediate No</h4>
                <p className="text-gray-300 text-sm mb-4">Learn how to protect your time gracefully and stop making false promises.</p>
                <div className="w-full bg-white/20 rounded-full h-2 mb-1">
                  <div className="bg-[#D4AF37] h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-xs text-gray-400 text-right w-full">45% Completed</span>
              </div>
            </div>



            {/* Enterprise Reliability Scoreboard */}
            <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6 flex items-center gap-3 mt-8">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0A192F] flex items-center justify-center text-sm">3</span>
              Enterprise View
            </h2>
            <ReliabilityScoreboard />

          </div>
        </section>
      </div>
    </div>
  );
}
