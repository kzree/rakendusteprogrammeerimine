/*alert("Name: " + name + "\nPrice: $" + price + "\nsrc: " + src);*/

let searchParams = new URLSearchParams(window.location.search);
let name = searchParams.get("name");
let price = searchParams.get("price");
let src = searchParams.get("src");

let image = document.createElement("img");
image.src = src;
image.className = "item_image";

let info = document.createElement("div");
info.id = "item_info";
info.className = "item_info";

let productName = document.createElement("div");
let productPrice = document.createElement("div");
productName.className = "item_name";
productPrice.className = "item_price";
productName.innerHTML = "Toode: " + name;
productPrice.innerHTML = "Hind: $" + price;

document.getElementById("product").appendChild(image);
document.getElementById("product").appendChild(info);
document.getElementById("item_info").appendChild(productName);
document.getElementById("item_info").appendChild(productPrice);
