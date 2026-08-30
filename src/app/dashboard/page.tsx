import React from 'react';

export default function DashboardPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-grey text-midnight-navy p-8">
      {/* Dashboard header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-champagne-gold">Executive Dashboard</h1>
        <div className="flex gap-4">
          <button className="bg-champagne-gold text-midnight-navy px-4 py-2 rounded-md font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy">
            Daily Digest
          </button>
          <div className="relative">
            <button 
              className="bg-midnight-navy text-champagne-gold px-4 py-2 rounded-md font-medium border border-champagne-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy"
              aria-label="Notifications, 3 unread"
            >
              Notifications
            </button>
            <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-full" aria-hidden="true">
              3
            </span>
          </div>
        </div>
      </div>

      {/* Bento Box Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hero Metrics (Top Row) */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-champagne-gold">
            <h3 className="text-sm text-gray-800 font-semibold mb-2">Revenue (Q3)</h3>
            <div className="text-4xl font-bold text-midnight-navy mb-2">$4.2M</div>
            <div className="text-sm text-green-800 font-medium">↑ 15% WoW (Driven by EU campaign)</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-champagne-gold">
            <h3 className="text-sm text-gray-800 font-semibold mb-2">System Uptime</h3>
            <div className="text-4xl font-bold text-midnight-navy mb-2">99.99%</div>
            <div className="text-sm text-green-800 font-medium">Nominal across all regions</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-champagne-gold">
            <h3 className="text-sm text-gray-800 font-semibold mb-2">Active Users</h3>
            <div className="text-4xl font-bold text-midnight-navy mb-2">124K</div>
            <div className="text-sm text-red-700 font-medium">↓ 2% (Monitor retention rate)</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-champagne-gold">
            <h3 className="text-sm text-gray-800 font-semibold mb-2">Open Issues</h3>
            <div className="text-4xl font-bold text-midnight-navy mb-2">12</div>
            <div className="text-sm text-gray-800 font-medium">3 critical, 9 minor</div>
          </div>
        </div>

        {/* Action Center & Notifications (Right Column) */}
        <div className="md:col-span-1 space-y-6">
          {/* Action Center */}
          <div className="bg-midnight-navy p-6 rounded-xl shadow-md text-white">
            <h2 className="text-xl font-bold text-champagne-gold mb-4">Action Center</h2>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="font-semibold text-sm mb-1">Approve Q4 Budget</div>
                <div className="text-xs text-gray-300 mb-3">Due by tomorrow EOD</div>
                <button className="bg-champagne-gold text-midnight-navy text-xs px-3 py-1 rounded w-full font-medium hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Review & Approve
                </button>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="font-semibold text-sm mb-1">Security Patch Deployment</div>
                <div className="text-xs text-gray-300 mb-3">Awaiting final sign-off</div>
                <button className="bg-champagne-gold text-midnight-navy text-xs px-3 py-1 rounded w-full font-medium hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Authorize Release
                </button>
              </div>
            </div>
          </div>

          {/* Tiered Notifications */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-midnight-navy mb-4">Latest Insights</h2>
            <div className="space-y-4">
              {/* Tier 1 - Critical */}
              <div className="border-l-4 border-red-700 pl-3">
                <div className="text-xs font-bold text-red-700 mb-1">URGENT (Tier 1)</div>
                <div className="text-sm font-semibold text-midnight-navy">Payment Gateway Latency</div>
                <div className="text-xs text-gray-800 mt-1">
                  <strong>BLUF:</strong> EU payments taking &gt;3s. Routing traffic to backup provider recommended to prevent cart abandonment.
                </div>
              </div>
              
              {/* Tier 2 - Important */}
              <div className="border-l-4 border-champagne-gold pl-3">
                <div className="text-xs font-bold text-gray-800 mb-1">IMPORTANT (Tier 2)</div>
                <div className="text-sm font-semibold text-midnight-navy">Marketing Campaign Goal Met</div>
                <div className="text-xs text-gray-800 mt-1">
                  <strong>BLUF:</strong> Q3 Lead Gen target achieved 2 weeks early. Consider reallocating remaining ad spend.
                </div>
              </div>

              {/* Tier 3 - FYI */}
              <div className="border-l-4 border-blue-800 pl-3">
                <div className="text-xs font-bold text-blue-800 mb-1">FYI (Tier 3)</div>
                <div className="text-sm font-semibold text-midnight-navy">Weekly Database Backup Complete</div>
                <div className="text-xs text-gray-800 mt-1">
                  Completed in 45m with 0 errors.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
