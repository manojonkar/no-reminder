'use client';

import React, { useState } from 'react';

export const GhostwriterEscalation: React.FC = () => {
  const defaultDraft = "John, I am running behind on X. Resetting promise date to Y.";
  const [draftMessage, setDraftMessage] = useState(defaultDraft);

  const handleSendUpdate = () => {
    // In a real application, this would trigger an API call to send the message
    console.log(`Proactive update sent: ${draftMessage}`);
    alert(`Proactive update sent: ${draftMessage}`);
  };

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '24px',
      backgroundColor: '#fffaf0',
      maxWidth: '600px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h2 style={{ margin: '0 0 12px 0', color: '#c53030' }}>⚠️ At-Risk Escalation</h2>
      <p style={{ margin: '0 0 20px 0', color: '#4a5568', fontSize: '14px', lineHeight: '1.5' }}>
        One of your promises is about to miss its deadline. We've drafted a proactive message to help you communicate this to your stakeholder. You can edit it before sending.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="draft-message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#2d3748', fontSize: '14px' }}>
          Draft Message to Stakeholder
        </label>
        <textarea
          id="draft-message"
          value={draftMessage}
          onChange={(e) => setDraftMessage(e.target.value)}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e0',
            fontSize: '15px',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            resize: 'vertical'
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <button
          onClick={() => setDraftMessage(defaultDraft)}
          style={{
            backgroundColor: 'transparent',
            color: '#4a5568',
            padding: '10px 16px',
            border: '1px solid #cbd5e0',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px'
          }}
        >
          Reset Draft
        </button>
        <button
          onClick={handleSendUpdate}
          style={{
            backgroundColor: '#3182ce',
            color: 'white',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          Send Proactive Update
        </button>
      </div>
    </div>
  );
};

export default GhostwriterEscalation;
