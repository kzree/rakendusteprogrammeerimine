/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./form.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userUpdate } from "../store/actions";
import { toast } from "react-toastify";
import * as services from "../services.js";

class LoginPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        services.login(this.state)
        .then(this.handleSuccess)
        .catch( err => {
            console.log("Error,", err);
            toast.error("Error logging in", {position: "bottom-right"});
        });
    }
    
    handleSuccess = ({ user}) => {
        this.props.dispatch(userUpdate(user));
        toast.success("You have logged in!", {position: "bottom-right"});
        this.props.history.push(`/users/${user._id}`);
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit = {this.handleSubmit}>
                        <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        <button className="form-button">login</button>
                        <p className="message">Not registered? <Link to={"/signup"}>Create an account</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(LoginPage);