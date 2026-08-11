import { useState } from "react";

export default function FunctionalUpdates() {
  const [count , setCount] = useState(0);

  return (
    <>
        <h2>{count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
            Increment
        </button>
    </>
  )
}