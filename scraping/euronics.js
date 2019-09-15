{
    const itemContainerClass = "oi-product-thumb";
    const imageClass = "image";
    const titleClass = "name";
    const priceClass = "price";

    const items = document.getElementsByClassName(itemContainerClass);
    const arr = [];

    Array.from(items).forEach(item =>{
        const imgs = item.getElementsByClassName(imageClass)[0];
        console.log(imgs);
        console.log(item.getElementsByClassName(titleClass)[0]);
        if(imgs.length === 0) return;
        const imageSource = item.getElementsByClassName(imageClass)[0].getElementsByTagName('img')[0].src;

        const title = item.getElementsByClassName(titleClass)[0].textContent;
        const price = item.getElementsByClassName(priceClass)[0].textContent;
        console.log(title);
        
        arr.push({
            imgSrc: imageSource,
            title,
            price,
            category: document.title.trim(),
        })
    });

    console.log(JSON.stringify(arr));
}