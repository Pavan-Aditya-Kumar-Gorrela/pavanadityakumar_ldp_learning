//error handling in promises

function orderPizza(isBurnt){
    return new Promise((resolve,reject)=>{
        if(isBurnt){
            reject("Pizza is burnt");
        }
        else{
            resolve("Pizza is ready");
        }
    })
}


// ============scene 1============
console.log("Ordering pizza 1...");
orderPizza(false)
    .then(message => console.log(message))
    .catch(error => console.error("Error:", error));

// ============scene 2============

setTimeout(() => {
    console.log("Ordering pizza 2...");
    orderPizza(true)
        .then(message => console.log(message))
        .catch(error => console.error("Error:", error));
}, 2000);
