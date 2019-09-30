/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { userIcon, cartIcon } from "./Icons";
import css from "./header.css";

const Header = () => {
    return(
        <div className="header">
            <Link to={"/"}>
                <img className="logo" src="/img/logo.png" alt="Logo"></img>
            </Link>
            <div className="buttons">
            <Link to={"/"}>
                <img src = {userIcon} className = "header_icon" alt="user_icon"/>
            </Link>        
                <div className="divider"></div>
            <Link to={"/"}>                
                <img src={cartIcon} className = "header_icon" alt="cart_icon"/>
            </Link>
            </div>
        </div>
    )
};

export default Header;