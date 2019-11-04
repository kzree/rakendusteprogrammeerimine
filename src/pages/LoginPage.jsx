/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

class LoginPage extends React.PureComponent {
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
        console.log("handle change", event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submit", this.state);
        fetch("/api/v1/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
        .then( res => {
            console.log("response", res);
        })
        .catch( err => {
            console.log("Error", err);
        });
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

export default LoginPage;