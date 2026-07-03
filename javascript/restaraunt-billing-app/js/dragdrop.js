import { tables, menuItems } from "./data.js";
import { renderTables } from "./render.js";
function dragStart(event, menuId){
    event.dataTransfer.setData("menuId", menuId);
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event, tableId){
    event.preventDefault();
    const menuId = Number(event.dataTransfer.getData("menuId"));
    const menu = menuItems.find(item=>item.id === menuId);
    const table = tables.find(table=>table.id === tableId);
    if(!menu || !table) return;
    const existing = table.orders.find(order=>order.id === menuId);
    if(existing){
        existing.quantity++;
    }else{
        table.orders.push({
            ...menu,
            quantity: 1
        });
    }

    renderTables(tables);
}

export { dragStart, allowDrop, drop };