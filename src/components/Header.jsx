/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { userIcon, cartIcon } from "../Icons";
import "./header.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";
import { UserPropTypes } from "../store/reducer.js";

const Header = ({user, cart}) => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="logo" src="/img/logo.png" alt="Logo"></img>
            </Link>
            <div className="buttons">
                {user && <ProfileIcon user={user} />}
                {!user && <LoginRegisterIcon />}
                <div className="divider"></div>
                <Link to={"/cart"}>
                    <div className="header-icon">
                        <img src={cartIcon} className="header-icon-img" alt="cart_icon" />
                        {cart.length > 0 && <Badge>{cart.length}</Badge>}
                    </div>
                </Link>
            </div>
        </div>
    )
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.shape(UserPropTypes),
    cart: PropTypes.arrayOf(ItemProps).isRequired,
};

const Badge = ({children}) => (
   <span className={"header-badge"}>
       {children}
   </span>
);

Badge.propTypes = {
    children: PropTypes.number.isRequired,
}

const LoginRegisterIcon = () => (
    <Link className={"header-icon"} to={"/login"}>
        <img src={userIcon} className="header-icon-img" alt="cart_icon" />
    </Link>
);

const ProfileIcon = ({ user }) => (
    <Link className={"header-icon"} to={`/users/${user._id}`}>
        <img src={userIcon} className="header-icon-img" alt="cart_icon" />
    </Link>
);

ProfileIcon.propTypes = {
    user: PropTypes.shape(UserPropTypes),
};

const mapStateToProps = (store) => {
    return {
        cart: store.cart,
        user: store.user,
    };
};

export default connect(mapStateToProps)(Header);