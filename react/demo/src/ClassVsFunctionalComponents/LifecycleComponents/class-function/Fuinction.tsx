import React, { useState, useEffect, useMemo, useRef } from 'react';

interface Props {
  count: number;
}

const LifecycleFunctionalComponent: React.FC<Props> = ({ count }) => {
  // Replaces Constructor
  const [name] = useState<string>('John Doe');
  
  // A ref to help track if this is the very first time the component renders
  const isMounted = useRef(false);

  
  // Replaces getDerivedStateFromProps
  useMemo(() => {
    console.log(`2. Sync/Memo tracking called with count: ${count}, name: ${name}`);
  }, [count, name]);

  // Replaces componentDidMount
  useEffect(() => {
    console.log('4. componentDidMount equivalent called (API calls, subscriptions)');
    isMounted.current = true;

    // Replaces componentWillUnmount
    return () => {
      console.log('8. componentWillUnmount equivalent called (Clear intervals, unsubscribe)');
    };
  }, []);

  // Replaces componentDidUpdate
  useEffect(() => {
    // We check isMounted.current so this block ONLY fires on changes, not on initial birth.
    if (!isMounted.current) return;
    console.log(`7. componentDidUpdate equivalent called. New count prop is: ${count}`);
  }, [count]); 

  // Rendering phase 
  console.log('3. Render equivalent called (Function body executed)');
  
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Props Count: {count}</p>
    </div>
  );
};

// Replaces shouldComponentUpdate
// React.memo stops the component from re-rendering if the props haven't changed.
export default React.memo(LifecycleFunctionalComponent, (prevProps, nextProps) => {
  console.log('5. shouldComponentUpdate equivalent evaluating...');
  return prevProps.count === nextProps.count;
});