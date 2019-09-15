{
    const itemContainerClass = "oi-product-thumb";
    const imageClass = "image";
    const titleClass = "name";
    const priceClass = "price";

    const items = document.getElementsByClassName(itemContainerClass);
    const arr = [];

    Array.from(items).forEach(item =>{
        const imgs = item.getElementsByClassName(imageClass);
        if(imgs.length === 0) return;
        const img = imgs[0];

        console.log("lol");
        const src = img.dataset.src;
        console.log(src);

        //if(!src) return;

        const title = item.getElementsByClassName(titleClass)[0].textContent;
        const price = item.getElementsByClassName(priceClass)[0].textContent;
        console.log("title", title);
        
        arr.push({
            imgSrc: src,
            title,
            price,
            category: document.title.split("|")[0].trim(),
        })
    });

    console.log(JSON.stringify(arr));
}