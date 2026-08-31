"use client";
import React from 'react';
import Image from 'next/image';
import GlobalHeader from '@/components/GlobalHeader';

interface ExecHealth {
  id: string;
  name: string;
  role: string;
  reliabilityScore: number;
  panelStatus: 'Verified' | 'Pending' | 'Failed';
  droppedPromises: number;
  downstreamImpact: number;
}

const teamData: ExecHealth[] = [
  { id: '1', name: 'Sarah Jenkins', role: 'Chief Marketing Officer', reliabilityScore: 98, panelStatus: 'Verified', droppedPromises: 0, downstreamImpact: 0 },
  { id: '2', name: 'David Chen', role: 'Chief Financial Officer', reliabilityScore: 100, panelStatus: 'Verified', droppedPromises: 0, downstreamImpact: 0 },
  { id: '3', name: 'Marcus Webb', role: 'VP of Engineering', reliabilityScore: 72, panelStatus: 'Failed', droppedPromises: 4, downstreamImpact: 12 },
  { id: '4', name: 'Elena Rostova', role: 'Chief Operations Officer', reliabilityScore: 88, panelStatus: 'Pending', droppedPromises: 1, downstreamImpact: 3 },
];

export default function CEOHeatmap() {
  const bottlenecks = teamData.filter(exec => exec.reliabilityScore < 80 || exec.panelStatus === 'Failed');

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#0A192F] flex flex-col">
      <GlobalHeader activeTab="heatmap" />

      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-12">
        
        {/* Title */}
        <h1 className="font-serif text-5xl font-bold mb-12 text-[#0A192F] tracking-tight">
          Command Center.<br />
          <span className="text-gray-400 font-normal">Organizational Health</span>
        </h1>

        {/* Bottleneck Alerts */}
        {bottlenecks.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Immediate Attention Required</h2>
            <div className="space-y-4">
              {bottlenecks.map(exec => (
                <div key={`alert-${exec.id}`} className="bg-red-50 border border-red-100 p-6 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                      {exec.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-900">{exec.name} is causing organizational drag.</h3>
                      <p className="text-red-700 text-sm">{exec.droppedPromises} dropped promises impacting {exec.downstreamImpact} cross-functional dependencies.</p>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition">
                    Initiate Coaching
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Heatmap Matrix */}
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Executive Team Reliability</h2>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="py-4 px-8 font-medium text-gray-500 text-sm">Executive</th>
                  <th className="py-4 px-8 font-medium text-gray-500 text-sm">Reliability Score</th>
                  <th className="py-4 px-8 font-medium text-gray-500 text-sm">360-Panel Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {teamData.map((exec) => {
                  
                  let scoreColor = 'text-emerald-500';
                  let scoreBg = 'bg-emerald-50';
                  if (exec.reliabilityScore < 90) { scoreColor = 'text-amber-500'; scoreBg = 'bg-amber-50'; }
                  if (exec.reliabilityScore < 80) { scoreColor = 'text-red-500'; scoreBg = 'bg-red-50'; }

                  let panelBadge = 'bg-gray-100 text-gray-600';
                  if (exec.panelStatus === 'Verified') panelBadge = 'bg-emerald-100 text-emerald-700';
                  if (exec.panelStatus === 'Failed') panelBadge = 'bg-red-100 text-red-700';

                  return (
                    <tr key={exec.id} className="hover:bg-gray-50/50 transition">
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-[#0A192F] font-bold">
                            {exec.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-[#0A192F]">{exec.name}</div>
                            <div className="text-sm text-gray-500">{exec.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <div className={`inline-flex items-center px-4 py-1.5 rounded-full font-bold ${scoreBg} ${scoreColor}`}>
                          {exec.reliabilityScore}%
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${panelBadge}`}>
                          {exec.panelStatus}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
