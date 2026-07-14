import React, { useState } from 'react';
import LifecycleFunctionalComponent from './Fuinction';

const CounterAppFunctional: React.FC = () => {
  const [parentCount, setParentCount] = useState<number>(0);
  const [showChild, setShowChild] = useState<boolean>(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Parent Control Panel (Functional)</h2>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {/* 1. Triggers the UPDATING lifecycle effects by modifying props */}
        <button 
          onClick={() => setParentCount(prev => prev + 1)}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Increment Count (Triggers Update)
        </button>

        {/* 2. Triggers the UNMOUNTING / MOUNTING cleanup returns */}
        <button 
          onClick={() => setShowChild(prev => !prev)}
          style={{ padding: '8px 12px', cursor: 'pointer', backgroundColor: '#ffc107', border: 'none' }}
        >
          {showChild ? 'Unmount Child' : 'Mount Child'}
        </button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      
      {showChild ? (
        <LifecycleFunctionalComponent count={parentCount} />
      ) : (
        <p style={{ color: '#666', fontStyle: 'italic' }}>Child component has been unmounted.</p>
      )}
    </div>
  );
};

export default CounterAppFunctional;