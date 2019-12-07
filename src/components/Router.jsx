/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from "../pages/HomePage.jsx";
import ItemPage from "../pages/ItemPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import Header from "../components/Header.jsx";
import NotFound from "../pages/NotFound.jsx";
import CartPage from "../pages/CartPage.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as selectors from "../store/selectors.js";
import * as actions from "../store/actions.js";

class Router extends React.PureComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,

    }
    componentDidMount(){
        this.props.dispatch(actions.refreshUser());
    }
    render() {
        return (
            <BrowserRouter>
                <Route path={"/"} component={Header} />
                <ToastContainer className="toast-container" />
                <Switch>

                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" exact component={LoginPage} />

                    <Route path="/signup" exact component={SignupPage} />
                    <Route path="/users/:userId" exact component={UserPage} />
                    <Route path="/items/:itemId" exact component={ItemPage} />
                    <Route path="/cart" exact component={CartPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect()(Router);