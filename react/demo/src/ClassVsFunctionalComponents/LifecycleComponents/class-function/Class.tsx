import React, { Component} from 'react';
import type { ErrorInfo } from 'react';

interface Props {
  count: number;
}

interface State {
  name: string;
  hasError: boolean;
}

class LifecycleClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'John Doe',
      hasError: false,
    };
    console.log('1. Constructor called');
  }


  static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null {
    console.log(`2. getDerivedStateFromProps called with nextProps: ${nextProps.count}, prevState: ${prevState.name}`);
    return null;
  }


  componentDidMount(): void {
    console.log('4. componentDidMount called (API calls, subscriptions, DOM manipulation)');
  }


  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log('5. shouldComponentUpdate called');
    return nextProps.count !== this.props.count || nextState.name !== this.state.name;
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): { scrollPosition: number } {
    console.log(`6. getSnapshotBeforeUpdate called with prevProps: ${prevProps.count}, prevState: ${prevState.name}`);
    return { scrollPosition: 100 }; 

  }
  
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: { scrollPosition: number }): void {
    console.log('7. componentDidUpdate called. Snapshot:', snapshot);
  }


  componentWillUnmount(): void {
    console.log('8. componentWillUnmount called (Clear intervals, unsubscribe)');
  }


  static getDerivedStateFromError(error: Error): Partial<State> {
    console.log(`Error Boundary: getDerivedStateFromError called`, error);
    return { hasError: true };
  }

  
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Error Boundary: componentDidCatch called', error, errorInfo);
  }

  
  render() {
    console.log('3. Render called');
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <p>Props Count: {this.props.count}</p>
      </div>
    );
  }
}

export default LifecycleClassComponent;