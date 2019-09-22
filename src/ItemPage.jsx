/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header.jsx";
import ReactDOM from "react-dom";
import { phones } from "./database.js"

class ItemPage extends React.PureComponent {
    render() {
        const item = phones[0];
        return (
            <>
                <Header />
                <div>
                    <div className="wrapper">
                        <div className="product">
                            <img className = "item_image" src={item.imgSrc}></img>
                            <div className="item_info">
                                <div className="item_name">{item.title}</div>
                                <div className="item_price">{item.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ItemPage;