function createItemElement(item) {
    let product = document.createElement("div");
    product.className = "item";

    let linkElement = document.createElement("a");
    let imageElement = document.createElement("img");
    let infoElement = document.createElement("div");
    infoElement.className = "item-info";
    let nameElement = document.createElement("div");
    nameElement.className = "item-name";
    let priceElement = document.createElement("div");
    priceElement.className = "item-price";

    linkElement.href = './item.html?name=' + item.title +'&price=' + item.price +'&src=./img/picture_missing.png'
    imageElement.src = "./img/picture_missing.png";
    priceElement.innerText = item.price;
    nameElement.innerText = item.title;
    product.append(linkElement);
    linkElement.append(imageElement);
    product.append(infoElement);
    infoElement.append(nameElement);
    infoElement.append(priceElement);

    return product;
}