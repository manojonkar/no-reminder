'use client';

import React, { useState, useEffect } from 'react';

const PeerReviewWidget = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [status, setStatus] = useState('Pending');
  const [isInitiating, setIsInitiating] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const diff = endOfMonth.getTime() - now.getTime();

      if (diff <= 0) return '0d 0h 0m 0s';

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      return `${d}d ${h}h ${m}m ${s}s`;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInitiate = () => {
    setIsInitiating(true);
    // Simulate sending questionnaire to 10 peers
    setTimeout(() => {
      setStatus('In Progress (Questionnaires Sent)');
      setIsInitiating(false);
      alert('Questionnaire successfully sent to 10 peers.');
    }, 1500);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg border-t-4 border-blue-600 flex flex-col items-center text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Monthly NFRL Certification</h2>
      
      <div className="w-full bg-gray-50 rounded p-4">
        <p className="text-sm text-gray-500 uppercase tracking-wide">Current Status</p>
        <p className={`text-lg font-semibold mt-1 ${status === 'Pending' ? 'text-amber-600' : 'text-blue-600'}`}>
          {status}
        </p>
      </div>

      <div className="w-full bg-gray-50 rounded p-4">
        <p className="text-sm text-gray-500 uppercase tracking-wide">Time Remaining</p>
        <p className="text-xl font-mono font-bold text-gray-800 mt-1">{timeLeft}</p>
      </div>

      <button
        onClick={handleInitiate}
        disabled={isInitiating || status !== 'Pending'}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow disabled:opacity-50 transition-colors"
      >
        {isInitiating ? 'Initiating...' : 'Initiate 360 Peer Review'}
      </button>
    </div>
  );
};

export default PeerReviewWidget;
