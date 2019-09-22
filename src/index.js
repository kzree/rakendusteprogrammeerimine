//const itemList = require("./itemList.js");
//const item = require("./item.js");
import itemList from "./itemList.js";
import item from "./item.js";

console.log("Ready");

window.addEventListener("load", () => {
    itemList.setup();
    item.setup();
})
