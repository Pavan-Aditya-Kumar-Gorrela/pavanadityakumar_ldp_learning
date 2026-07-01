//Call back Functions:

function greet(callback){
    console.log("Hello");
    callback();
}

function sayGoodbye(){
    console.log("Goodbye");
}

greet(sayGoodbye);


function downloadFile(callback){
    setTimeout(() => {
        console.log("File downloaded");
    },3000);
    callback();
}

function process(){
    console.log("Processing file....");
}

downloadFile(process);