/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to={"/"}>
                <img className="logo" src="./img/logo.png" alt="Logo"></img>
            </Link>
            <div className="buttons">
                <button>Login/Signup</button>
                <div className="divider"></div>
                <button>Cart</button>
            </div>
        </div>
    )
};

export default Header;