import { dragStart, allowDrop, drop } from "./dragdrop.js";
import { openModal } from "./modal.js";
export function renderTables(tables){
    
    const tablesContainer = document.getElementById("tables");
    tablesContainer.innerHTML = "";
    tables.forEach(table=>{
        const total = table.orders.reduce((sum, item)=>{
            return sum + item.price * item.quantity;
        }, 0);
        const totalItems = table.orders.reduce((sum, item)=>{
            return sum + item.quantity;
        }, 0);
        const tableDiv = document.createElement("div");
        tableDiv.classList.add("table-card");
        tableDiv.dataset.tableId = table.id;
        tableDiv.innerHTML=`
            <h3>${table.name}</h3>
            <p>Total: ₹${total}</p>
            <span>Items: ${totalItems}</span>
        `;

        tableDiv.addEventListener("dragover", allowDrop);
        tableDiv.addEventListener("drop", (event)=>{
            drop(event, table.id);
        });
        tableDiv.addEventListener("click", ()=>{
            openModal(table.id);
        });
        tablesContainer.appendChild(tableDiv);
    })

    
};

export function renderMenuItems(menuItems){
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "";
    menuItems.forEach(item=>{
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu-card");
        menuDiv.draggable = true;
        menuDiv.dataset.itemId = item.id;
        menuDiv.innerHTML=`
            <div>
            <h3>${item.name}</h3>
            <small>${item.category}</small>
            </div>
            <h2>₹${item.price}</h2>
        `;
        menuDiv.addEventListener("dragstart",(event)=>{
            dragStart(event, item.id);
        })
        menuContainer.appendChild(menuDiv);
    })
}  

