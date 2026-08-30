"use client";
import React, { useState } from 'react';

export const CommitmentForm: React.FC = () => {
  const [promise, setPromise] = useState('');
  const [stakeholder, setStakeholder] = useState('');
  const [datetime, setDatetime] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const lowerPromise = promise.toLowerCase();
    if (
      lowerPromise.includes('soon') ||
      lowerPromise.includes('asap') ||
      lowerPromise.includes('later')
    ) {
      setError("Hard Block: Vague terms like 'soon', 'ASAP', or 'later' are strictly prohibited. Exact clarity is required.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/commitments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promise, stakeholder, datetime }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit commitment');
      }

      setSuccess(true);
      setPromise('');
      setStakeholder('');
      setDatetime('');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
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

        {success && (
          <div style={{ color: 'green', fontWeight: 'bold', padding: '0.5rem', border: '1px solid green', backgroundColor: '#e6ffe6' }}>
            Commitment successfully logged!
          </div>
        )}

        <button type="submit" disabled={isLoading} style={{ padding: '0.75rem', backgroundColor: isLoading ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: isLoading ? 'not-allowed' : 'pointer' }}>
          {isLoading ? 'Analyzing Promise...' : 'Submit Commitment'}
        </button>
      </form>
    </div>
  );
};
