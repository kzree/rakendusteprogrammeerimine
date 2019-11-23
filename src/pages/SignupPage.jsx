/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./form.css";
import * as services from "../services.js";

class SignupPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password:"",
            confirmpassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event){ 
        event.preventDefault();
        services.signup(this.state)
        .then( () =>{
            toast.success("Registered successfully", {position: "bottom-right"});
            this.props.history.push("/login");
        })
        .catch ( err => {
            toast.error("Error registering!", {position: "bottom-right"});
        });  
    }
    render(){
        return (
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit = {this.handleSubmit}>
                        <input type="text" name="firstname" placeholder="first name" onChange={this.handleChange}/>
                        <input type="text" name="lastname" placeholder="last name" onChange={this.handleChange}/>
                        <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                        <input type="password" placeholder="confirm password" name="confirmpassword" onChange={this.handleChange}/>
                        <input type="text" placeholder="email address" name="email" onChange={this.handleChange}/>
                        <button className="form-button">register</button>
                        <p className="message">Already registered? <Link to={"/login"}>Sign in</Link></p>
                    </form> 
                </div>
            </div>
        );
    }
}

export default SignupPage;