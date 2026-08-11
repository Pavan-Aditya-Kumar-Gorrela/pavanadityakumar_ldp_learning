import React, { Component } from 'react';
import LifecycleClassComponent from './Class';

interface AppState {
  parentCount: number;
  showChild: boolean;
  triggerError: boolean;
}

class CounterApp extends Component<{props:never}, AppState> {
  constructor(props: {props:never}) {
    super(props);
    this.state = {
      parentCount: 0,
      showChild: true,
      triggerError: false,
    };
  }

  render() {
    
    if (this.state.triggerError) {
      throw new Error("Simulated application crash!");
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto' }}>
        <h2>Parent Control Panel</h2>
        
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          
          <button 
            onClick={() => this.setState(prev => ({ parentCount: prev.parentCount + 1 }))}
            style={{ padding: '8px 12px', cursor: 'pointer' }}
          >
            Increment Count (Triggers Update)
          </button>

          
          <button 
            onClick={() => this.setState(prev => ({ showChild: !prev.showChild }))}
            style={{ padding: '8px 12px', cursor: 'pointer', backgroundColor: '#ffc107', border: 'none' }}
          >
            {this.state.showChild ? 'Unmount Child' : 'Mount Child'}
          </button>

          <button 
            onClick={() => this.setState({ triggerError: true })}
            style={{ padding: '8px 12px', cursor: 'pointer', backgroundColor: '#dc3545', color: '#fff', border: 'none' }}
          >
            Force Crash (Error Test)
          </button>
        </div>

        <hr style={{ margin: '20px 0' }} />

        {this.state.showChild ? (
          <LifecycleClassComponent count={this.state.parentCount} />
        ) : (
          <p style={{ color: '#666', fontStyle: 'italic' }}>Child component has been unmounted.</p>
        )}
      </div>
    );
  }
}

export default CounterApp;