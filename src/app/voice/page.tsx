"use client";

import React, { useState } from 'react';
import GlobalHeader from '@/components/GlobalHeader';

export default function VoiceInterface() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      // In a real app, stop recording and process audio here
    } else {
      setIsListening(true);
      setTranscript("Listening...");
      // Simulate receiving transcript over time
      setTimeout(() => setTranscript("I promise to review the Q3 financials by tomorrow..."), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans text-[#0A192F]">
      <GlobalHeader activeTab="none" />
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 pb-24 relative overflow-hidden">
        
        {/* Transcription Area */}
        <div className="text-center max-w-md w-full mb-16 min-h-[140px] flex flex-col justify-end z-10">
           {isListening ? (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-2xl md:text-3xl font-light text-[#D4AF37] tracking-wide leading-relaxed">
                  {transcript}
                </p>
                {/* Visualizer Mock */}
                <div className="mt-8 flex justify-center space-x-1.5 h-10 items-center">
                    {[...Array(7)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1 bg-[#D4AF37] rounded-full animate-pulse" 
                        style={{ 
                          height: `${Math.max(30, Math.random() * 100)}%`,
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: '0.8s',
                          opacity: 0.8
                        }}
                      />
                    ))}
                </div>
             </div>
           ) : (
             <p className="text-xl md:text-2xl font-light text-gray-400/80 tracking-wide transition-opacity duration-300">
               Tap to capture a promise.
             </p>
           )}
        </div>

        {/* Microphone Button Area */}
        <div className="relative z-10">
          <button
            onClick={toggleListening}
            className={`relative group flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full transition-all duration-500 ease-out focus:outline-none ${
              isListening 
                ? 'bg-[#0A192F] scale-105 shadow-[0_0_60px_rgba(212,175,55,0.3)]' 
                : 'bg-white shadow-[0_15px_40px_rgba(10,25,47,0.06)] hover:shadow-[0_20px_50px_rgba(10,25,47,0.1)] hover:scale-105'
            }`}
            aria-label={isListening ? "Stop listening" : "Start listening"}
          >
            {/* Pulsing rings when listening */}
            {isListening && (
              <>
                <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-20" style={{ animationDuration: '2.5s' }}></div>
                <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-40" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
              </>
            )}
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isListening ? '#D4AF37' : '#0A192F'} 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`w-14 h-14 md:w-16 md:h-16 transition-colors duration-500 ${isListening ? 'animate-pulse' : ''}`}
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </button>
        </div>
        
        {/* Minimal background elements */}
        {isListening && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <div className="w-[80vw] h-[80vw] max-w-3xl max-h-3xl rounded-full bg-[#D4AF37] blur-3xl"></div>
            </div>
        )}
      </main>
    </div>
  );
}
