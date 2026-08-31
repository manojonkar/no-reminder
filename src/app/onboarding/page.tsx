"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Onboarding() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#0A192F] flex flex-col items-center justify-center p-6 py-16">
      
      <div className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
        
        <Image src="/logo.jpg" alt="NFR Logo" width={64} height={64} className="rounded-xl mb-8 shadow-sm" />
        
        <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
          Executive Setup
        </h1>
        
        <p className="text-gray-500 mb-10 text-lg">
          Welcome to the No Follow-Up Required framework. You are entering your 2-Week Shadow Phase. Let's configure your Executive Boundaries.
        </p>
        
        <div className="w-full space-y-6 text-left">
          
          {/* Step 1: Profile */}
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col gap-4 shadow-sm">
            <div>
              <h3 className="font-bold text-[#0A192F] text-lg">1. Executive Profile</h3>
              <p className="text-sm text-gray-500 mb-4">Establish your leadership identity within the portal.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Job Title" 
                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Organization Name" 
                className="w-full p-3 bg-white border border-gray-200 rounded-lg md:col-span-2 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          {/* Step 2: Channels */}
          <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#0A192F]">2. Connect Channels</h3>
              <p className="text-sm text-gray-500 max-w-xs mt-1">Authorize your preferred communication tools (Email, MS Teams, Slack, Google Workspace, CRM, etc.).</p>
            </div>
            <button className="px-5 py-2.5 bg-[#0A192F] text-white text-sm font-bold rounded-lg hover:bg-gray-800 transition shadow-sm whitespace-nowrap">
              Connect
            </button>
          </div>

          {/* Step 3: Panel */}
          <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-between opacity-50">
            <div>
              <h3 className="font-bold text-[#0A192F]">3. Nominate 360-Panel</h3>
              <p className="text-sm text-gray-500 max-w-xs mt-1">Select 10 peers for your monthly NFR verification audit.</p>
            </div>
            <button className="px-5 py-2.5 bg-gray-200 text-gray-500 text-sm font-bold rounded-lg cursor-not-allowed">
              Pending
            </button>
          </div>

          {/* Step 4: Boundaries */}
          <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-between opacity-50">
            <div>
              <h3 className="font-bold text-[#0A192F]">4. Define AI Boundaries</h3>
              <p className="text-sm text-gray-500 max-w-xs mt-1">Set up custom trigger words and block private channels.</p>
            </div>
            <button className="px-5 py-2.5 bg-gray-200 text-gray-500 text-sm font-bold rounded-lg cursor-not-allowed">
              Pending
            </button>
          </div>

        </div>

        <div className="flex gap-4 mt-12 w-full justify-center">
          <button onClick={() => window.location.href='/'} className="px-6 py-3 text-sm text-gray-500 hover:text-[#0A192F] transition font-bold tracking-wider">
            CANCEL
          </button>
          <button onClick={() => window.location.href='/inbox'} className="px-8 py-3 bg-[#D4AF37] text-[#0A192F] text-sm font-bold rounded-lg hover:opacity-90 transition shadow-md">
            START SHADOW PHASE
          </button>
        </div>

      </div>
    </div>
  );
}
