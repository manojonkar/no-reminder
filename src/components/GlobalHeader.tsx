"use client";
import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  activeTab?: 'drafts' | 'heatmap' | 'academy' | 'none';
}

export default function GlobalHeader({ activeTab = 'none' }: HeaderProps) {
  return (
    <header className="px-6 py-4 flex justify-between items-center w-full bg-white shadow-sm border-b border-gray-100 z-50 relative">
      {/* Left Top: NFR System Image */}
      <div className="flex items-center">
        <Image 
          src="/uploaded_2.jpg" 
          alt="5 Box NFR System" 
          width={120} 
          height={40} 
          className="object-contain cursor-pointer" 
          onClick={() => window.location.href = '/'}
        />
      </div>

      {/* Center Navigation */}
      <nav className="text-sm font-medium flex gap-8 text-gray-500 hidden md:flex">
        <a 
          href="/inbox" 
          className={`transition pb-1 ${activeTab === 'drafts' ? 'text-[#0A192F] font-bold border-b-2 border-[#D4AF37]' : 'hover:text-[#0A192F]'}`}
        >
          Drafts
        </a>
        <a 
          href="/dashboard" 
          className={`transition pb-1 ${activeTab === 'heatmap' ? 'text-[#0A192F] font-bold border-b-2 border-[#D4AF37]' : 'hover:text-[#0A192F]'}`}
        >
          Heatmap
        </a>
        <a 
          href="/academy" 
          className={`transition pb-1 ${activeTab === 'academy' ? 'text-[#0A192F] font-bold border-b-2 border-[#D4AF37]' : 'hover:text-[#0A192F]'}`}
        >
          Academy
        </a>
        <a 
          href="/voice" 
          className="hover:text-[#0A192F] transition pb-1"
        >
          Voice UI
        </a>
        <a 
          href="/settings" 
          className="hover:text-[#0A192F] transition pb-1"
        >
          Settings
        </a>
      </nav>

      {/* Right Top: NFR Shield Logo */}
      <div className="flex items-center gap-3 font-serif text-xl font-bold tracking-tight text-[#D4AF37]">
        <span className="hidden sm:inline">NFR</span>
        <Image 
          src="/nfr_shield.jpg" 
          alt="NFR Shield Logo" 
          width={40} 
          height={40} 
          className="rounded-md" 
        />
      </div>
    </header>
  );
}
