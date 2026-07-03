function throwFatalError(message: string): never {
  throw new Error(message); // 🛑 Execution stops immediately; it never finishes
}

function startSystemHeartbeat(): never {
  while (true) {
    // Runs endlessly, never reaches the end of the function block
  }
}

throwFatalError("Something went wrong!");
startSystemHeartbeat();