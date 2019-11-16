/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { userIcon, cartIcon } from "../Icons";
import css from "./header.css";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";

const Header = ({user}) => {
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

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
};

export default authConsumer(Header);