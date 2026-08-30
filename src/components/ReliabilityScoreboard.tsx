'use client';

import React from 'react';

const departments = [
  { name: 'Engineering', promisesKept: 95, escalated: 5, score: '95%' },
  { name: 'Sales', promisesKept: 92, escalated: 8, score: '92%' },
  { name: 'Marketing', promisesKept: 88, escalated: 12, score: '88%' },
  { name: 'Human Resources', promisesKept: 98, escalated: 2, score: '98%' },
  { name: 'Customer Support', promisesKept: 85, escalated: 15, score: '85%' },
];

export default function ReliabilityScoreboard() {
  return (
    <div style={{ padding: '3rem 2rem', backgroundColor: '#0A192F', color: '#D4AF37', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #D4AF37', paddingBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '2rem' }}>
          Enterprise Reliability Scoreboard
        </h1>
        
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', overflow: 'hidden', border: '1px solid #D4AF37', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}>
              <tr>
                <th style={{ padding: '1.5rem', borderBottom: '2px solid #D4AF37', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Department</th>
                <th style={{ padding: '1.5rem', borderBottom: '2px solid #D4AF37', textAlign: 'center', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Promises Kept</th>
                <th style={{ padding: '1.5rem', borderBottom: '2px solid #D4AF37', textAlign: 'center', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Escalated</th>
                <th style={{ padding: '1.5rem', borderBottom: '2px solid #D4AF37', textAlign: 'right', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>NFR Reliability Score</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, index) => (
                <tr key={index} style={{ 
                  borderBottom: index === departments.length - 1 ? 'none' : '1px solid rgba(212, 175, 55, 0.2)',
                  transition: 'background-color 0.3s ease'
                }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.05)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <td style={{ padding: '1.2rem 1.5rem', fontWeight: '600', fontSize: '1.1rem' }}>{dept.name}</td>
                  <td style={{ padding: '1.2rem 1.5rem', textAlign: 'center', opacity: 0.9 }}>{dept.promisesKept}</td>
                  <td style={{ padding: '1.2rem 1.5rem', textAlign: 'center', opacity: 0.9 }}>{dept.escalated}</td>
                  <td style={{ padding: '1.2rem 1.5rem', textAlign: 'right', fontSize: '1.25rem', fontWeight: 'bold', color: '#FFF' }}>
                    <span style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid rgba(212, 175, 55, 0.5)' }}>
                      {dept.score}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', opacity: 0.7 }}>
          <p>* NFR Reliability Score = (Promises Kept / Total Interactions) * 100</p>
          <p>Confidential & Proprietary - Internal Use Only</p>
        </div>
      </div>
    </div>
  );
}
