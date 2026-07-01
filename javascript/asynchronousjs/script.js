function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: "Alice" }), 1000);
  });
}

function fetchOrders(userName) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Laptop", "Mouse"]), 1000);
  });
}

// ==========================================
// THE OLD WAY (Promise Chaining)
// ==========================================
function loadDataWithPromises() {
  console.log("Promises: Starting...");
  fetchUser(1)
    .then((user) => fetchOrders(user.name))
    .then((orders) => console.log("Promises Success:", orders));
    console.log("Promises: Finished initiating...");
}

// ==========================================
// THE MODERN WAY (Async/Await)
// ==========================================
async function loadDataWithAsyncAwait() {
  console.log("Async/Await: Starting...");
  

  const user = await fetchUser(1); 
  const orders = await fetchOrders(user.name); 
  
  console.log("Async/Await Success:", orders);
  console.log("Async/Await: Finished initiating...");
}

loadDataWithAsyncAwait(); 
loadDataWithPromises();

