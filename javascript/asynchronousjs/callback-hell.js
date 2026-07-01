


//Callback Hell:

function verifyCart(cart, callback) {
  setTimeout(() => {
    console.log("1. Cart verified");
    callback(null, "cart_valid_123");
  }, 1000);
}

function chargePayment(cartId, callback) {
  setTimeout(() => {
    console.log("2. Payment charged successfully");
    callback(null, "receipt_789");
  }, 1000);
}

function shipOrder(receiptId, callback) {
  setTimeout(() => {
    console.log("3. Order shipped to customer");
    callback(null, "tracking_xyz456");
  }, 1000);
}


const myCart = ["laptop", "mouse"];

verifyCart(myCart, function(err, cartId) {
  if (err) {
    console.error("Cart error:", err);
  } else {
    
    chargePayment(cartId, function(err, receiptId) {
      if (err) {
        console.error("Payment error:", err);
      } else {
        
        shipOrder(receiptId, function(err, trackingId) {
          if (err) {
            console.error("Shipping error:", err);
          } else {
            console.log(`Success! Tracking ID: ${trackingId}`);
          }
        });
        
      }
    });
    
  }
});
