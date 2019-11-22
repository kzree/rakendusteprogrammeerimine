/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { userIcon, cartIcon } from "../Icons";
import "./header.css";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";

const Header = ({token, user }) => {
    console.log("header", token, user);
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="logo" src="/img/logo.png" alt="Logo"></img>
            </Link>
            <div className="buttons">
                {user.email && <ProfileIcon user={user} />}
                {!user.email && <LoginRegisterIcon />}
                <div className="divider"></div>
                <Link to={"/cart"}>
                    <div className="header-icon">
                        <img src={cartIcon} className="header-icon-img" alt="cart_icon" />
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

const LoginRegisterIcon = () => (
    <Link className={"header-icon"} to={"/login"}>
        <img src={userIcon} className="header-icon-img" alt="cart_icon"/>
    </Link>
);

const ProfileIcon = ({ user }) => (
    <Link className={"header-icon"} to={`/users/${user._id}`}>
        <img src={userIcon} className="header-icon-img" alt="cart_icon"/>
    </Link>
);

ProfileIcon.propTypes = {
    user: PropTypes.object.isRequired
  };

export default authConsumer(Header);