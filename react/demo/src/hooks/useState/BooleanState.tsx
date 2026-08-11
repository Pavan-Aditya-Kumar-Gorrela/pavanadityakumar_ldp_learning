import { useState } from "react";

export default function BooleanState() {
  const [isVisible, setIsVisible] = useState(true);
  return(
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is visible!</p>}
    
    </>
  )
}