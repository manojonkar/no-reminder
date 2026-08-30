'use client';

import React, { useState } from 'react';

interface SubAction {
  id: string;
  title: string;
  duration: string;
  date: string;
  time: string;
}

const AIDraftReview = () => {
  const [subActions, setSubActions] = useState<SubAction[]>([
    {
      id: '1',
      title: 'Outline core strategic pillars',
      duration: '45 min',
      date: 'Oct 12',
      time: '09:00 AM',
    },
    {
      id: '2',
      title: 'Draft slides for financial projections',
      duration: '60 min',
      date: 'Oct 13',
      time: '11:00 AM',
    },
    {
      id: '3',
      title: 'Final review and executive summary',
      duration: '30 min',
      date: 'Oct 14',
      time: '02:00 PM',
    }
  ]);

  const handleEdit = (id: string, field: keyof SubAction, value: string) => {
    setSubActions(prev => prev.map(action => action.id === id ? { ...action, [field]: value } : action));
  };

  const handleApprove = () => {
    // Approve and schedule logic
    console.log('Approved and Scheduled:', subActions);
  };

  return (
    <div className="bg-[#0A192F] text-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto font-sans">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#FFD700] mb-2">AI Draft Review</h2>
          <p className="text-gray-400">Review and adjust the AI-suggested breakdown for "Deliver Q4 Strategy Deck".</p>
        </div>
        <div className="bg-[#112240] p-3 rounded-lg border border-[#FFD700]/20">
          <span className="text-[#FFD700] text-sm font-semibold tracking-wider uppercase">Draft Mode</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {subActions.map((action, index) => (
          <div key={action.id} className="bg-[#112240] border border-gray-800 p-5 rounded-xl transition-all hover:border-[#FFD700]/50 group">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-grow space-y-3">
                <input
                  type="text"
                  value={action.title}
                  onChange={(e) => handleEdit(action.id, 'title', e.target.value)}
                  className="w-full bg-transparent border-b border-transparent focus:border-[#FFD700] text-lg font-medium text-white outline-none transition-colors pb-1"
                />
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2 bg-[#0A192F] px-3 py-1.5 rounded-md border border-gray-800 focus-within:border-[#FFD700]/50 transition-colors">
                    <svg className="w-4 h-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <input
                      type="text"
                      value={action.duration}
                      onChange={(e) => handleEdit(action.id, 'duration', e.target.value)}
                      className="bg-transparent w-16 outline-none text-white"
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-[#0A192F] px-3 py-1.5 rounded-md border border-gray-800 focus-within:border-[#FFD700]/50 transition-colors">
                    <svg className="w-4 h-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <input
                      type="text"
                      value={action.date}
                      onChange={(e) => handleEdit(action.id, 'date', e.target.value)}
                      className="bg-transparent w-20 outline-none text-white"
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-[#0A192F] px-3 py-1.5 rounded-md border border-gray-800 focus-within:border-[#FFD700]/50 transition-colors">
                     <svg className="w-4 h-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     <input
                      type="text"
                      value={action.time}
                      onChange={(e) => handleEdit(action.id, 'time', e.target.value)}
                      className="bg-transparent w-20 outline-none text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-800">
        <button className="px-6 py-3 rounded-lg text-gray-300 hover:text-white transition-colors font-medium">
          Cancel
        </button>
        <button 
          onClick={handleApprove}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-[#0A192F] font-bold shadow-lg shadow-[#FFD700]/20 hover:shadow-[#FFD700]/40 transform hover:-translate-y-0.5 transition-all"
        >
          Approve & Schedule
        </button>
      </div>
    </div>
  );
};

export default AIDraftReview;
