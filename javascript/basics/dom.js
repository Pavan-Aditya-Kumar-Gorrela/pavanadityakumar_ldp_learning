// console.log(document.getElementById("hero"));
// console.log(document.getElementsByClassName("card")[1]);
// console.log(document.getElementsByTagName("h1")[0]);
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));


// console.log(document.getElementById("title"));
// console.log(document.getElementsByTagName("p")[0]);
// console.log(document.querySelectorAll(".text"));
// document.querySelectorAll(".text").forEach((para, idx) => {
//     console.log(`Paragraph ${idx + 1}: ${para.textContent}`)
// });

// let addBtn = document.getElementById("addBtn");
// let cartEle = document.getElementById("cart");
// let emptycart = document.getElementsByClassName("empty-cart")[0];
// let count =0;
// const products = ["Laptop", "Mouse", "Keyboard"];

// addBtn.addEventListener("click",()=>{
//     if(count <= products.length+1){
//     const product = products.shift();
//     const li = document.createElement("li");
//     li.textContent = product;
//     cartEle.appendChild(li);
//     ++count;
//     }
//     if(count > 0) {
//         emptycart.style.display = "none";
//     }
    
// })

const addBtn = document.getElementById("addBtn");
const Image = document.getElementById("image");
addBtn.addEventListener("click",()=>{
    Image.setAttribute("src", "./download.jfif");
Image.setAttribute("alt","Image not found");
console.log(Image.hasAttribute("width"));
Image.removeAttribute("width");
})
