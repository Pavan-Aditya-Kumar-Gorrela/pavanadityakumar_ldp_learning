
//Promises;

function verifyCartPromise(cart) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("1. Cart verified");
            resolve("cart_valid_123");
        }, 1000);
    });
}

function chargePaymentPromise(cartId) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("2. Payment charged successfully");
            resolve("receipt_789");
        }, 1000);
    });
}

function shipOrderPromise(receiptId) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("3. Order shipped to customer");
            resolve("tracking_xyz456");
        }, 1000);
    });
}


const myCartPromise = ["laptop", "mouse"];

verifyCartPromise(myCartPromise)
    .then(cartId => chargePaymentPromise(cartId))
    .then(receiptId => shipOrderPromise(receiptId))
    .then(trackingId => console.log(`Success! Tracking ID: ${trackingId}`))
    .catch(err => console.error("Error:", err));



