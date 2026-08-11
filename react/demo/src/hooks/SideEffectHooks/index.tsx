import {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
} from "react";

export default function App() {
  console.log("🟡 Component Render");

  // Runs first
  useInsertionEffect(() => {
    console.log("🟢 useInsertionEffect Started");

    setTimeout(() => {
      console.log("🟢 useInsertionEffect -> 1 second later");
    }, 1000);

    return () => {
      console.log("🟢 useInsertionEffect Cleanup");
    };
  }, []);

  // Runs second
  useLayoutEffect(() => {
    console.log("🔵 useLayoutEffect Started");

    setTimeout(() => {
      console.log("🔵 useLayoutEffect -> 2 seconds later");
    }, 2000);

    return () => {
      console.log("🔵 useLayoutEffect Cleanup");
    };
  }, []);

  // Runs last
  useEffect(() => {
    console.log("🟣 useEffect Started");

    setTimeout(() => {
      console.log("🟣 useEffect -> 3 seconds later");
    }, 3000);

    return () => {
      console.log("🟣 useEffect Cleanup");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hooks Execution Order</h1>
      <p>Open the browser console to observe the execution sequence.</p>
    </div>
  );
}