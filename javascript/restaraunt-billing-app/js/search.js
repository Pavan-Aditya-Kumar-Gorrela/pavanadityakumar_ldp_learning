import { tables, menuItems } from "./data.js";
import { renderTables, renderMenuItems } from "./render.js";

const tableSearch = document.getElementById("tableSearch");
const menuSearch = document.getElementById("menuSearch");

tableSearch.addEventListener("input", ()=>{
    const key = tableSearch.value.toLowerCase();
    const tempTable = tables.filter((table)=>{
        return table.name.toLowerCase().includes(key)
    });
    renderTables(tempTable);
});

menuSearch.addEventListener("input", ()=>{
    const key = menuSearch.value.toLowerCase();
    const tempMenu = menuItems.filter((item)=>{
        return item.name.toLowerCase().includes(key) || item.category.toLowerCase().includes(key);
    });
    renderMenuItems(tempMenu);
});
