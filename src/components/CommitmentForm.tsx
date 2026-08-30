"use client";
import React, { useState } from 'react';

export const CommitmentForm: React.FC = () => {
  const [promise, setPromise] = useState('');
  const [stakeholder, setStakeholder] = useState('');
  const [datetime, setDatetime] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const lowerPromise = promise.toLowerCase();
    if (
      lowerPromise.includes('soon') ||
      lowerPromise.includes('asap') ||
      lowerPromise.includes('later')
    ) {
      setError("Hard Block: Vague terms like 'soon', 'ASAP', or 'later' are strictly prohibited. Exact clarity is required.");
      return;
    }

    // Simulate successful submission
    alert('Commitment successfully logged!');
    setPromise('');
    setStakeholder('');
    setDatetime('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Clarity Filter</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="promise" style={{ display: 'block', marginBottom: '0.5rem' }}>Promise</label>
          <input
            id="promise"
            type="text"
            value={promise}
            onChange={(e) => setPromise(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
            placeholder="e.g. Deliver the final report"
          />
        </div>
        
        <div>
          <label htmlFor="stakeholder" style={{ display: 'block', marginBottom: '0.5rem' }}>Stakeholder</label>
          <input
            id="stakeholder"
            type="text"
            value={stakeholder}
            onChange={(e) => setStakeholder(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
            placeholder="e.g. Jane Doe"
          />
        </div>

        <div>
          <label htmlFor="datetime" style={{ display: 'block', marginBottom: '0.5rem' }}>Date/Time</label>
          <input
            id="datetime"
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        {error && (
          <div style={{ color: 'red', fontWeight: 'bold', padding: '0.5rem', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
            {error}
          </div>
        )}

        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit Commitment
        </button>
      </form>
    </div>
  );
};
