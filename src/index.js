const itemList = require("./itemList.js");
const item = require("./item.js");

console.log("Ready");

window.addEventListener("load", () => {
    itemList.setup();
    item.setup();
})
