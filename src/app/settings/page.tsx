import GlobalHeader from '@/components/GlobalHeader';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F]">
      <GlobalHeader activeTab="none" />
      
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Rules Engine
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            Configure the cultural parameters of the organization. Proceed with extreme caution.
          </p>
        </header>

        <section className="space-y-12">
          {/* Rule: Algorithmic Decay */}
          <div className="flex items-start justify-between border-b border-gray-100 pb-8">
            <div className="pr-12">
              <h2 className="text-xl font-medium tracking-wide mb-2 text-[#0A192F]">
                Algorithmic Decay
              </h2>
              <p className="text-gray-500 leading-relaxed font-light">
                Punish chronic reschedulers automatically. Every rescheduled meeting reduces the initiator's organizational priority score.
              </p>
            </div>
            <div className="flex-shrink-0 pt-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#D4AF37]"></div>
              </label>
            </div>
          </div>

          {/* Rule: Shared Pain */}
          <div className="flex items-start justify-between border-b border-gray-100 pb-8">
            <div className="pr-12">
              <h2 className="text-xl font-medium tracking-wide mb-2 text-[#0A192F]">
                Shared Pain
              </h2>
              <p className="text-gray-500 leading-relaxed font-light">
                Penalize both parties for dependency failures. If a task blocks another and fails, both the blocker and the blocked share the cultural demerit.
              </p>
            </div>
            <div className="flex-shrink-0 pt-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#D4AF37]"></div>
              </label>
            </div>
          </div>

          {/* Rule: Strict Escalation Enforcement */}
          <div className="flex items-start justify-between border-b border-gray-100 pb-8">
            <div className="pr-12">
              <h2 className="text-xl font-medium tracking-wide mb-2 text-[#0A192F]">
                Strict Escalation Enforcement
              </h2>
              <p className="text-gray-500 leading-relaxed font-light">
                Bypass middle management automatically if issues linger beyond their SLA. Instant visibility to the CEO dashboard.
              </p>
            </div>
            <div className="flex-shrink-0 pt-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#D4AF37]"></div>
              </label>
            </div>
          </div>
        </section>

        <div className="mt-20 flex justify-center">
          <button className="px-8 py-3 bg-[#0A192F] text-[#D4AF37] font-medium tracking-widest text-sm uppercase hover:bg-opacity-90 transition-colors">
            Deploy Rules
          </button>
        </div>
      </main>
    </div>
  );
}
