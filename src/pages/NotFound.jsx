/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../style/NotFound.css";

class NotFound extends React.PureComponent {
    render(){
        return (
            <div>
                <div className="notf-wrapper">
                    <div className="notf-content">
                        <div className="notf-title">Did you know?</div>
                        <div className="notf-secondary">There are three things in this world that don't exist</div>
                        <div className="notf-spacer"></div>
                        <div className="notf-bullets">
                            <div className="notf-bullet">Dragons</div>
                            <div className="notf-bullet">Free meals</div>
                            <div className="notf-bullet">This page</div>
                        </div>
                        <Link to={"/"}>
                            <div className="notf-button">Back to the store</div>
                        </ Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound