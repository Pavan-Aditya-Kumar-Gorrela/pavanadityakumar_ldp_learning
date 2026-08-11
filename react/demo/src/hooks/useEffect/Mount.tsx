import { useState,useEffect } from "react";

export default function Mount() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  useEffect(() => {
    console.log("Name and count updated:", name, count);
  }, [name, count]);

  useEffect(() => {
    return () => {
      console.log("Component unmounted");
    }
    }, []);

  return (
    <>
      <h2>Check the console to see the mount effect</h2>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Hello {name}</h2>
    </>
  );
}