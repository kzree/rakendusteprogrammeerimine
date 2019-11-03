/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { userIcon, cartIcon } from "../Icons";
import css from "./header.css";

const Header = () => {
    return(
        <div className="header">
            <Link to={"/"}>
                <img className="logo" src="/img/logo.png" alt="Logo"></img>
            </Link>
            <div className="buttons">
                <Link to={"/login"}>
                    <div className="header-icon">
                        <img src = {userIcon} className = "header-icon-img" alt="user_icon"/>
                    </div>
                </Link>
                <div className="divider"></div>
                <Link to={"/"}>                
                    <div className="header-icon">
                            <img src={cartIcon} className = "header-icon-img" alt="cart_icon"/>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Header;