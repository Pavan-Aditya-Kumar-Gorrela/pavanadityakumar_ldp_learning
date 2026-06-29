// function login(callback){
//     console.log("Logging In.....");
//     setTimeout(()=>{
//         console.log("Login Successfully");
//         callback();
//     },1000);
// }

// function selectRestaurant(callback) {
//     console.log("Selecting Restaurant...");
//     setTimeout(() => {
//         console.log("Restaurant Selected");
//         callback();
//     }, 1000);
// }

// function selectFood(callback) {
//     console.log("Selecting Food...");
//     setTimeout(() => {
//         console.log("Food Selected");
//         callback();
//     }, 1000);
// }

// function makePayment(callback) {
//     console.log("Processing Payment...");
//     setTimeout(() => {
//         console.log("Payment Successful");
//         callback();
//     }, 1000);
// }

// function trackOrder(callback) {
//     console.log("Tracking Order...");
//     setTimeout(() => {
//         console.log("Order Delivered");
//         if (callback) callback(); // Optional final callback
//     }, 1000);
// }

// login(() => {
//     selectRestaurant(() => {
//         selectFood(() => {
//             makePayment(() => {
//                 trackOrder(() => {
//                     console.log("🎉 All steps completed successfully!");
//                 });
//             });
//         });
//     });
// });

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Hello");