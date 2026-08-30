'use client';

import React, { useState } from 'react';

const IntegrationsPanel = () => {
  const [m365Connected, setM365Connected] = useState(false);
  const [workspaceConnected, setWorkspaceConnected] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#0a192f] mb-4">Passive Capture Settings</h2>
      <p className="text-gray-600 mb-6">
        Connect your workspace tools to automatically capture tasks, notes, and reminders without any manual entry.
      </p>

      <div className="space-y-4">
        {/* Microsoft 365 Card */}
        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50 hover:border-[#FFD700] hover:shadow-sm transition-all duration-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-700 font-bold text-xl shadow-sm">
              M
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#0a192f]">Microsoft 365 (Teams/Outlook)</h3>
              <p className="text-sm text-gray-500">Capture action items from meetings and emails.</p>
            </div>
          </div>
          <button
            onClick={() => setM365Connected(!m365Connected)}
            className={`px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0a192f] ${
              m365Connected
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-[#0a192f] text-[#FFD700] hover:bg-[#112240]'
            }`}
          >
            {m365Connected ? 'Connected' : 'Connect'}
          </button>
        </div>

        {/* Google Workspace & Slack Card */}
        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl bg-gray-50 hover:border-[#FFD700] hover:shadow-sm transition-all duration-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-700 font-bold text-xl shadow-sm">
              G/S
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#0a192f]">Google Workspace & Slack</h3>
              <p className="text-sm text-gray-500">Sync messages and documents to extract tasks.</p>
            </div>
          </div>
          <button
            onClick={() => setWorkspaceConnected(!workspaceConnected)}
            className={`px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0a192f] ${
              workspaceConnected
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-[#0a192f] text-[#FFD700] hover:bg-[#112240]'
            }`}
          >
            {workspaceConnected ? 'Connected' : 'Connect'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPanel;
