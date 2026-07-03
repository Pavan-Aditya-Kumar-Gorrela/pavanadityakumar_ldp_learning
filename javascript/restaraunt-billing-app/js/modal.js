import {tables, menuItems} from "./data.js";
import {renderTables, renderMenuItems} from "./render.js";

const modal = document.getElementById("orderModal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.getElementById("closeModal");
const modalBody = document.getElementById("orderBody");
const modalTotal = document.getElementById("modalTotal");
const terminateSessionBtn = document.getElementById("closeSession");
let currTable = null;

function openModal(tableId){
    currTable = tables.find(table=>table.id === tableId);
    if(!currTable) return;
    modal.classList.add("show");
    modalTitle.textContent = currTable.name;
    renderOrders();
}

function closeModal(){
    modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);

function renderOrders(){
    modalBody.innerHTML = "";
    if(currTable.orders.length === 0){
        modalBody.innerHTML = "<p>No orders to display.</p>";
        modalTotal.textContent = "₹0";
        return;
    }
    currTable.orders.forEach((item, index) =>{
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
                <input type="number" 
                min="1" value="${item.quantity}" 
                data-id="${item.id}" 
                class="qty-input">
            </td>
            <td>
                <button class="delete-btn" data-id="${item.id}">
                    Delete
                </button>
            </td>
        `;
        modalBody.appendChild(row);
    });

    updateTotal();
    addEvents();

}

function updateTotal(){
    const total = currTable.orders.reduce((sum, item)=>{
        return sum + item.price * item.quantity;
    }, 0);
    modalTotal.textContent = `₹${total}`;
}

function addEvents(){

    const qtyInputs=document.querySelectorAll(".qty-input");

    qtyInputs.forEach(input=>{

        input.addEventListener("change",(e)=>{

            const id=Number(e.target.dataset.id);

            const qty=Number(e.target.value);

            const item=currTable.orders.find(i=>i.id===id);

            item.quantity=qty;

            renderOrders();

            renderTables(tables);

        });

    });

        const deleteBtns=document.querySelectorAll(".delete-btn");

    deleteBtns.forEach(btn=>{

        btn.addEventListener("click",(e)=>{

            const id=Number(e.target.dataset.id);

            currTable.orders=currTable.orders.filter(item=>item.id!==id);

            renderOrders();

            renderTables(tables);

        });

    });

}

terminateSessionBtn.addEventListener("click",()=>{

    if(currTable.orders.length===0){

        alert("No Orders");

        return;

    }

    let bill=`${currTable.name}\n\n`;

    currTable.orders.forEach(item=>{

        bill+=`${item.name}

${item.quantity} x ₹${item.price}

= ₹${item.quantity*item.price}

\n`;

    });

    const total=currTable.orders.reduce((sum,item)=>{

        return sum+item.price*item.quantity;

    },0);

    bill+=`\nTotal : ₹${total}`;

    alert(bill);

    currTable.orders=[];

    renderTables(tables);

    closeModal();

});


export { openModal, closeModal };