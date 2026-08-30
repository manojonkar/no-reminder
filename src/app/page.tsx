"use client";

import { useState } from "react";

export default function LandingPage() {
  const [reports, setReports] = useState<number | "">("");
  const [meetingHours, setMeetingHours] = useState<number | "">("");
  const [chaseHours, setChaseHours] = useState<number | "">("");
  const [step, setStep] = useState<"calculator" | "result" | "onboarding">("calculator");
  const [topLoop, setTopLoop] = useState("");

  const assumedSalary = 250000;
  const hourlyRate = assumedSalary / 1920; // 48 weeks * 40 hours
  const totalHoursWeek = (Number(meetingHours) || 0) + (Number(chaseHours) || 0);
  const annualHours = totalHoursWeek * 48;
  const annualCost = annualHours * hourlyRate;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("result");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-midnight-navy dark:text-subtle-silver flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-6xl w-full mx-auto">
        <div className="font-serif text-2xl font-bold tracking-tight text-champagne-gold" aria-hidden="true">
          NFR
        </div>
        <nav className="text-sm font-medium" aria-label="Main Navigation">
          <button className="px-4 py-2 text-slate-grey hover:text-midnight-navy dark:hover:text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white">
            Sign In
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-grow flex flex-col items-center justify-center p-6 sm:p-12" tabIndex={-1}>
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          
          <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-midnight-navy dark:text-white leading-tight">
            Stop Chasing. <br />
            <span className="text-champagne-gold">Start Leading.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-grey dark:text-subtle-silver max-w-2xl mb-12">
            The No Follow-Up Required (NFR) framework reclaims the time and money you waste managing other people's commitments.
          </p>

          {/* Flow Container */}
          <div className="bg-white dark:bg-[#0A192F] rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-xl border border-subtle-silver dark:border-slate-grey/30">
            
            {step === "calculator" && (
              <div className="animate-in fade-in zoom-in duration-500">
                <h2 className="text-2xl font-bold mb-2" id="calculator-heading">The Leadership Tax Calculator</h2>
                <p className="text-slate-grey dark:text-subtle-silver mb-8 text-sm">
                  Discover the hidden cost of organizational drag.
                </p>
                <form onSubmit={handleCalculate} className="space-y-6 text-left" aria-labelledby="calculator-heading">
                  <div>
                    <label htmlFor="reports-input" className="block text-sm font-semibold mb-2">How many direct reports do you have?</label>
                    <input 
                      id="reports-input"
                      type="number"
                      required
                      min="0"
                      className="w-full px-4 py-3 rounded-lg border border-subtle-silver dark:border-slate-grey bg-transparent focus:outline-none focus:ring-2 focus:ring-champagne-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white"
                      placeholder="e.g. 5"
                      value={reports}
                      onChange={(e) => setReports(Number(e.target.value) || "")}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="meeting-hours-input" className="block text-sm font-semibold mb-2">Hours spent in status updates per week?</label>
                    <input 
                      id="meeting-hours-input"
                      type="number"
                      required
                      min="0"
                      className="w-full px-4 py-3 rounded-lg border border-subtle-silver dark:border-slate-grey bg-transparent focus:outline-none focus:ring-2 focus:ring-champagne-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white"
                      placeholder="e.g. 10"
                      value={meetingHours}
                      onChange={(e) => setMeetingHours(Number(e.target.value) || "")}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="chase-hours-input" className="block text-sm font-semibold mb-2">Hours spent chasing emails/Slack per week?</label>
                    <input 
                      id="chase-hours-input"
                      type="number"
                      required
                      min="0"
                      className="w-full px-4 py-3 rounded-lg border border-subtle-silver dark:border-slate-grey bg-transparent focus:outline-none focus:ring-2 focus:ring-champagne-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white"
                      placeholder="e.g. 5"
                      value={chaseHours}
                      onChange={(e) => setChaseHours(Number(e.target.value) || "")}
                      aria-required="true"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#0A192F] dark:bg-champagne-gold text-white dark:text-[#0A192F] font-bold py-4 rounded-lg hover:opacity-90 transition shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white"
                  >
                    Calculate My Leadership Tax
                  </button>
                </form>
              </div>
            )}

            {step === "result" && (
              <div className="animate-in slide-in-from-right duration-500 text-center" aria-live="polite">
                <h2 className="text-2xl font-bold mb-6">Your Annual Follow-Up Burden</h2>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <div className="bg-subtle-silver/30 dark:bg-slate-grey/20 p-6 rounded-xl flex-1">
                    <p className="text-slate-grey dark:text-subtle-silver text-sm font-semibold uppercase tracking-wider mb-2">Time Wasted</p>
                    <p className="text-4xl font-serif font-bold text-[#E07A5F]">{annualHours} <span className="text-lg">hrs</span></p>
                  </div>
                  <div className="bg-subtle-silver/30 dark:bg-slate-grey/20 p-6 rounded-xl flex-1">
                    <p className="text-slate-grey dark:text-subtle-silver text-sm font-semibold uppercase tracking-wider mb-2">Money Wasted</p>
                    <p className="text-4xl font-serif font-bold text-[#E07A5F]">${annualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                  </div>
                </div>

                <p className="text-slate-grey dark:text-subtle-silver mb-8 text-sm max-w-md mx-auto">
                  *Based on an estimated executive baseline. This is time and money spent just verifying if people did their jobs.
                </p>

                <button 
                  onClick={() => setStep("onboarding")}
                  className="w-full bg-champagne-gold text-[#0A192F] font-bold py-4 rounded-lg hover:opacity-90 transition shadow-md text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white"
                >
                  Reclaim These {annualHours} Hours
                </button>
              </div>
            )}

            {step === "onboarding" && (
              <div className="animate-in slide-in-from-right duration-500 text-left" aria-live="polite">
                <h2 className="text-2xl font-bold mb-2">Let's Fix Your Biggest Drain</h2>
                <p className="text-slate-grey dark:text-subtle-silver mb-6 text-sm">
                  We'll start small. What is the single most annoying follow-up loop you deal with right now?
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="top-loop-input" className="block text-sm font-semibold mb-2">The Loop (Who & What)</label>
                    <input 
                      id="top-loop-input"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-subtle-silver dark:border-slate-grey bg-transparent focus:outline-none focus:ring-2 focus:ring-champagne-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white"
                      placeholder="e.g. Asking Sarah for the weekly marketing metrics"
                      value={topLoop}
                      onChange={(e) => setTopLoop(e.target.value)}
                    />
                  </div>
                  
                  <div className="pt-4 space-y-4">
                    <p className="text-sm font-semibold text-center border-b border-subtle-silver dark:border-slate-grey pb-4">
                      Create your free NFR account to save this loop and start your 3-week curriculum.
                    </p>
                    <button onClick={() => window.location.href = '/dashboard'} className="w-full border border-slate-grey text-[#0A192F] dark:text-white font-semibold py-3 rounded-lg hover:bg-subtle-silver dark:hover:bg-slate-grey/30 transition flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                      Continue with Google
                    </button>
                    <button onClick={() => window.location.href = '/dashboard'} className="w-full border border-slate-grey text-[#0A192F] dark:text-white font-semibold py-3 rounded-lg hover:bg-subtle-silver dark:hover:bg-slate-grey/30 transition flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      Continue with LinkedIn
                    </button>
                    <button className="text-xs text-center text-slate-grey mt-4 cursor-pointer hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy dark:focus-visible:outline-white rounded">
                      Or send setup instructions to my EA
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
