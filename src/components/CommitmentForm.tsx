"use client";
import React, { useState } from 'react';

export const CommitmentForm: React.FC = () => {
  const [promise, setPromise] = useState('');
  const [stakeholder, setStakeholder] = useState('');
  const [datetime, setDatetime] = useState('');
  const [weightage, setWeightage] = useState('Medium');
  const [steps, setSteps] = useState<{id: number, description: string, deadline: string}[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      try {
        // @ts-ignore
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
          const recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.interimResults = true;
          
          recognition.onresult = (event: any) => {
            let currentTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              currentTranscript += event.results[i][0].transcript;
            }
            setPromise(currentTranscript);
          };
          
          recognition.onend = () => {
            setIsListening(false);
          };
          
          recognition.start();
        } else {
          alert("Speech recognition not supported in this browser.");
          setIsListening(false);
        }
      } catch (err) {
        alert("Microphone access denied or error occurred.");
        setIsListening(false);
      }
    }
  };

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
        body: JSON.stringify({ promise, stakeholder, datetime, weightage, steps }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit commitment');
      }

      setSuccess(true);
      setPromise('');
      setStakeholder('');
      setDatetime('');
      setWeightage('Medium');
      setSteps([]);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const addStep = () => {
    setSteps([...steps, { id: Date.now(), description: '', deadline: '' }]);
  };

  const updateStep = (index: number, field: 'description' | 'deadline', value: string) => {
    const newSteps = [...steps];
    newSteps[index][field] = value;
    setSteps(newSteps);
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Clarity Filter</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="promise" style={{ display: 'block', marginBottom: '0.5rem' }}>Promise</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              id="promise"
              type="text"
              value={promise}
              onChange={(e) => setPromise(e.target.value)}
              required
              style={{ flex: 1, padding: '0.5rem' }}
              placeholder="e.g. Deliver the final report"
            />
            <button
              type="button"
              onClick={toggleListening}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: isListening ? '#ffe6e6' : '#f0f0f0',
                color: isListening ? '#cc0000' : '#333',
                border: '1px solid',
                borderColor: isListening ? '#ff4d4d' : '#ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                minWidth: '100px'
              }}
              title="Speak your promise"
            >
              {isListening ? '🛑 Stop' : '🎙️ Speak'}
            </button>
          </div>
          {isListening && <small style={{ color: '#e63946', display: 'block', marginTop: '0.25rem', fontWeight: '500' }}>Listening to your promise...</small>}
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
          <label htmlFor="datetime" style={{ display: 'block', marginBottom: '0.5rem' }}>Deadline</label>
          <input
            id="datetime"
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label htmlFor="weightage" style={{ display: 'block', marginBottom: '0.5rem' }}>Weightage</label>
          <select
            id="weightage"
            value={weightage}
            onChange={(e) => setWeightage(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '4px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1rem' }}>Manageable Steps</h3>
          <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1rem' }}>
            * For reference of the promising leader only. Break down the promise to ensure timely delivery.
          </p>
          
          {steps.map((step, index) => (
            <div key={step.id} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Step description"
                value={step.description}
                onChange={(e) => updateStep(index, 'description', e.target.value)}
                style={{ flex: 1, padding: '0.5rem' }}
                required
              />
              <input
                type="datetime-local"
                value={step.deadline}
                onChange={(e) => updateStep(index, 'deadline', e.target.value)}
                style={{ padding: '0.5rem' }}
                required
              />
              <button 
                type="button" 
                onClick={() => removeStep(index)}
                style={{ padding: '0.5rem', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                X
              </button>
            </div>
          ))}
          
          <button 
            type="button" 
            onClick={addStep}
            style={{ padding: '0.5rem', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
          >
            + Add Step
          </button>
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
