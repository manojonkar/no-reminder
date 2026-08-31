"use client";
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A192F] font-sans text-white flex flex-col md:flex-row">
      
      {/* Left Half - 5 Box NFR System */}
      <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center p-8 border-r border-[#D4AF37]/20">
        <div className="relative w-full h-full max-h-screen flex items-center justify-center">
          <Image 
            src="/uploaded_2.jpg" 
            alt="5 Box NFR System" 
            width={800}
            height={800}
            className="object-contain max-h-[90vh] w-auto"
            priority
          />
        </div>
      </div>

      {/* Right Half - Content & Logo */}
      <div className="w-full md:w-1/2 flex flex-col">
        
        {/* Header with Logo on Top Right */}
        <header className="p-8 flex justify-end items-center w-full gap-6">
          <div className="flex items-center gap-3 font-serif text-3xl font-bold tracking-tight text-[#D4AF37]">
            NFR
            <Image src="/nfr_shield.jpg" alt="NFR Shield Logo" width={64} height={64} className="rounded-md" />
          </div>
          <nav className="text-sm font-medium ml-4">
            <button onClick={() => window.location.href = '/inbox'} className="px-6 py-2 bg-transparent border border-white/20 text-white rounded hover:bg-white/10 transition">
              Log In
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center p-8 md:p-12 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Stop Chasing.<br/>
            <span className="text-[#D4AF37]">Start Leading.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-12">
            The NFR (No follow up required) framework is to KILL BUSYness in the organizations and move to being High Performance Leaders and High Performance Organizations. This portal is a commitment fulfillment support system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button onClick={() => window.location.href = '/inbox'} className="px-8 py-4 bg-[#D4AF37] text-[#0A192F] font-bold text-lg rounded-lg hover:opacity-90 transition shadow-lg">
              Start Free Trial
            </button>
            <button onClick={() => window.location.href = '/inbox'} className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-lg hover:bg-white/20 transition">
              Log In to Portal
            </button>
          </div>
        </main>

      </div>
    </div>
  );
}
