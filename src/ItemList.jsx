/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ItemList = (props) => {
    return (
        <div className={"product-wrapper"}>
            <div className={"products"}>
                {
                    props.items.map(function (item, i) {
                        if(i < props.limit){
                            return <Item
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                imgSrc={item.imgSrc}
                            />
                        }
                    })
                }
            </div>
        </div>
    )
};

ItemList.propTypes = {
    items: PropTypes.array,
    limit: PropTypes.number
};


const Item = (props) => {
    return (
        <Link to={`/items/${props.id}`}>
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

Item.propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}
export default ItemList;