"use client";
import React from "react";
import Image from "next/image";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#0A192F] flex flex-col items-center justify-center p-6">
      
      <div className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
        
        <Image src="/logo.jpg" alt="NFR Logo" width={64} height={64} className="rounded-xl mb-8 shadow-sm" />
        
        <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
          Executive Setup
        </h1>
        
        <p className="text-gray-500 mb-10 text-lg">
          Welcome to the No Follow-Up Required framework. You are entering your 2-Week Shadow Phase. The AI will monitor your commitments silently.
        </p>
        
        <div className="w-full space-y-4 text-left">
          <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#0A192F]">1. Connect Workspaces</h3>
              <p className="text-sm text-gray-500">Authorize Slack and Microsoft 365.</p>
            </div>
            <button className="px-4 py-2 bg-[#0A192F] text-white text-sm font-bold rounded-lg hover:bg-gray-800 transition">
              Connect
            </button>
          </div>

          <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-between opacity-50">
            <div>
              <h3 className="font-bold text-[#0A192F]">2. Nominate 360-Panel</h3>
              <p className="text-sm text-gray-500">Select 10 peers for your monthly audit.</p>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-500 text-sm font-bold rounded-lg cursor-not-allowed">
              Pending
            </button>
          </div>

          <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-between opacity-50">
            <div>
              <h3 className="font-bold text-[#0A192F]">3. Define AI Boundaries</h3>
              <p className="text-sm text-gray-500">Set up custom trigger words.</p>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-500 text-sm font-bold rounded-lg cursor-not-allowed">
              Pending
            </button>
          </div>
        </div>

        <button onClick={() => window.location.href='/'} className="mt-12 text-sm text-gray-400 hover:text-[#0A192F] transition font-bold uppercase tracking-wider">
          ← Cancel & Return
        </button>

      </div>
    </div>
  );
}
