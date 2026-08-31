"use client";
import React, { useState } from "react";
import Image from "next/image";
import GlobalHeader from "@/components/GlobalHeader";

interface DraftPromise {
  id: string;
  promise: string;
  stakeholder: string;
  datetime: string;
  source: string;
  weight: "H" | "M" | "L" | null;
  isVague: boolean;
}

const mockDrafts: DraftPromise[] = [
  {
    id: "1",
    promise: "I will send you the Q3 Marketing Deck",
    stakeholder: "Sarah Jenkins",
    datetime: "2026-09-04T15:00",
    source: "Slack",
    weight: null,
    isVague: false,
  },
  {
    id: "2",
    promise: "I will look into the budget numbers soon",
    stakeholder: "David Chen",
    datetime: "",
    source: "Email",
    weight: null,
    isVague: true,
  }
];

export default function DraftInbox() {
  const [drafts, setDrafts] = useState<DraftPromise[]>(mockDrafts);
  const [selectedWeight, setSelectedWeight] = useState<{ [key: string]: "H" | "M" | "L" }>({});
  
  // Manual entry modal states
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  const [manualPromise, setManualPromise] = useState("");
  const [manualStakeholder, setManualStakeholder] = useState("");
  const [manualSource, setManualSource] = useState("WhatsApp");

  const handleWeightSelect = (id: string, weight: "H" | "M" | "L") => {
    setSelectedWeight({ ...selectedWeight, [id]: weight });
  };

  const handleApprove = (id: string) => {
    if (!selectedWeight[id]) {
      alert("Please select a weight (H/M/L) before approving.");
      return;
    }
    setDrafts(drafts.filter(d => d.id !== id));
  };

  const handleDelete = (id: string) => {
    setDrafts(drafts.filter(d => d.id !== id));
  };
  
  const handleManualSubmit = () => {
    if (!manualPromise || !manualStakeholder) return;
    const newDraft: DraftPromise = {
      id: Date.now().toString(),
      promise: manualPromise,
      stakeholder: manualStakeholder,
      datetime: "", // intentionally vague for AI coach demo
      source: manualSource,
      weight: null,
      isVague: true // Defaults to vague to show AI Coach
    };
    setDrafts([newDraft, ...drafts]);
    setIsManualModalOpen(false);
    setManualPromise("");
    setManualStakeholder("");
    setManualSource("WhatsApp");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#0A192F] flex flex-col">
      <GlobalHeader activeTab="drafts" />

      <main className="flex-grow w-full max-w-3xl mx-auto px-6 py-12 relative">
        <div className="flex justify-between items-end mb-12">
          <h1 className="font-serif text-5xl font-bold text-[#0A192F] tracking-tight">
            Good Morning.<br />
            <span className="text-gray-400 font-normal">You have {drafts.length} drafts.</span>
          </h1>
          <button 
            onClick={() => setIsManualModalOpen(true)}
            className="px-6 py-3 bg-[#0A192F] text-white font-bold rounded-lg hover:bg-gray-800 transition shadow-md whitespace-nowrap mb-2"
          >
            + Log Offline Promise
          </button>
        </div>

        {isManualModalOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl flex flex-col gap-4">
              <h2 className="text-2xl font-bold font-serif mb-2 text-[#0A192F]">Log Manual Promise</h2>
              
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">What did you promise?</label>
                <input type="text" value={manualPromise} onChange={e => setManualPromise(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#D4AF37]" placeholder="e.g. I will send the finalized budget..." />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">To whom?</label>
                <input type="text" value={manualStakeholder} onChange={e => setManualStakeholder(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#D4AF37]" placeholder="Name / Team" />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Source</label>
                <select value={manualSource} onChange={e => setManualSource(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#D4AF37]">
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="In-Person">In-Person Meeting</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Text Message">Text Message</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex gap-4 mt-4">
                <button onClick={() => setIsManualModalOpen(false)} className="flex-1 py-3 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition">Cancel</button>
                <button onClick={handleManualSubmit} className="flex-1 py-3 bg-[#D4AF37] text-[#0A192F] text-sm font-bold rounded-lg shadow-sm hover:opacity-90 transition">Save to Inbox</button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {drafts.length === 0 ? (
            <p className="text-xl text-gray-400">Inbox zero. You have no pending commitments.</p>
          ) : (
            drafts.map((draft) => (
              <div key={draft.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-md">
                {draft.isVague && (
                  <div className="mb-4 text-sm font-medium text-amber-600 flex items-center gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <span>⚠️</span> AI Coach: This deadline is vague. Please assign an exact date and time to prevent follow-ups.
                  </div>
                )}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-medium mb-2">{draft.promise}</h2>
                    <p className="text-gray-500">To: {draft.stakeholder} • Captured from {draft.source}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-end justify-between gap-6 border-t border-gray-100 pt-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Deadline</label>
                    <input type="datetime-local" defaultValue={draft.datetime} className="bg-gray-50 border border-gray-200 text-[#0A192F] text-sm rounded-lg focus:ring-[#D4AF37] focus:border-[#D4AF37] block p-2.5 outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Impact Weight</label>
                    <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                      <button onClick={() => handleWeightSelect(draft.id, "L")} className={`px-4 py-1.5 text-sm font-medium rounded-md transition ${selectedWeight[draft.id] === "L" ? "bg-white shadow text-[#0A192F]" : "text-gray-400 hover:text-gray-600"}`}>Low</button>
                      <button onClick={() => handleWeightSelect(draft.id, "M")} className={`px-4 py-1.5 text-sm font-medium rounded-md transition ${selectedWeight[draft.id] === "M" ? "bg-white shadow text-[#0A192F]" : "text-gray-400 hover:text-gray-600"}`}>Med</button>
                      <button onClick={() => handleWeightSelect(draft.id, "H")} className={`px-4 py-1.5 text-sm font-medium rounded-md transition ${selectedWeight[draft.id] === "H" ? "bg-white shadow text-[#0A192F]" : "text-gray-400 hover:text-gray-600"}`}>High</button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleDelete(draft.id)} className="px-6 py-2.5 text-sm font-medium text-gray-500 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition">Delete</button>
                    <button onClick={() => handleApprove(draft.id)} className="px-8 py-2.5 text-sm font-bold text-[#0A192F] bg-[#D4AF37] hover:bg-[#c4a130] rounded-lg transition shadow-sm">Approve</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
