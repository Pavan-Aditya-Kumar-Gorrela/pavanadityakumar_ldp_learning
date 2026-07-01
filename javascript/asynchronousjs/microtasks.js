console.log("1. Synchronous Start"); // Line 1

// Macrotask (Low priority)
setTimeout(() => {
  console.log("2. setTimeout (Macrotask)"); 
}, 0);

// Microtask via Promise (High priority)
Promise.resolve().then(() => {
  console.log("3. Promise .then (Microtask)");
});

// Explicit Microtask
queueMicrotask(() => {
  console.log("4. queueMicrotask (Microtask)");
});

console.log("5. Synchronous End"); // Line 2
