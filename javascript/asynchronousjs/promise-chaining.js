
//Promise Chaining

function delayNumber(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*2);
        },1000);
    });
}

delayNumber(5)
    .then((result)=>{
        console.log(result);
        return delayNumber(result);
    })
    .then((result)=>{
        console.log(result);
        return delayNumber(result);
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.error("Error:", error);
    });