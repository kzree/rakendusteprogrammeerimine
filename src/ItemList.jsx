/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";


const ItemList = (props) => {
    return (
        <div className={"product-wrapper"}>
            <div className={"products"}>
                {
                    props.items.map(function (item, i) {
                        return <Item
                            key={i}
                            title={item.title}
                            price={item.price}
                            imgSrc={item.imgSrc}
                        />
                    })
                }
            </div>
        </div>
    )
};

const Item = (props) => {
    return (
        <Link to={"/item"}>
            <div className="item">
                <img src={props.imgSrc} />
                <div className="item-info">
                    <div className="item-name">{props.title}</div>
                    <div className="item-price">{props.price}</div>
                </div>
            </div>
        </Link>
    )

}

export default ItemList;