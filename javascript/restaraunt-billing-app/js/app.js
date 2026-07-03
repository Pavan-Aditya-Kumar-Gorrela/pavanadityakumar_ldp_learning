import { tables, menuItems } from "./data.js";
import { renderTables, renderMenuItems } from "./render.js";
import './search.js';

renderTables(tables);

renderMenuItems(menuItems);