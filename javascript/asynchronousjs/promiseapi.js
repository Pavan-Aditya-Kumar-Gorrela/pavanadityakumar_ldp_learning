const taskFast = new Promise((resolve) => setTimeout(() => resolve("Fast Data ⚡"), 500));
const taskSlow = new Promise((resolve) => setTimeout(() => resolve("Slow Data 🐢"), 2000));
const taskError = new Promise((_, reject) => setTimeout(() => reject("Error Failed! ❌"), 1000));


Promise.all([taskFast, taskSlow, taskError])
  .then((results) => console.log("Promise.all Success:", results))
  .catch((err) => console.error("Promise.all Failed:", err)); 



setTimeout(() => {
  Promise.allSettled([taskFast, taskSlow, taskError])
    .then((results) => {
      console.log("Promise.allSettled Results:");
      console.log(results);
    });
}, 2500); 



setTimeout(() => {
  Promise.race([taskFast, taskSlow, taskError])
    .then((winner) => console.log("Promise.race Winner:", winner))
    .catch((err) => console.error("Promise.race Loser:", err));
}, 5000);



setTimeout(() => {
  Promise.any([taskFast, taskSlow, taskError])
    .then((firstSuccess) => console.log("Promise.any First Success:", firstSuccess))
    .catch((aggregateError) => console.error("All failed:", aggregateError));
}, 7500);

