import React from "react";
import PropTypes from "prop-types";
import authConsumer from "../components/authConsumer.jsx";
import protectedRedirect from "../components/protectedRedirect.jsx";
import "../style/UserPage.css";

class UserPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div>
                <div className="user-wrapper">
                    <div className="user-content">
                        <div className="user-title">Hello {this.props.user.firstname} </div>
                        <div className="user-user-info">
                            <div className="user-user-info-field">Name: {this.props.user.firstname} {this.props.user.lastname}</div>
                            <div className="user-user-info-field">Email: {this.props.user.email}</div>
                            <div className="user-user-info-field">Date created: {this.props.user.createdAt}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default authConsumer(protectedRedirect(UserPage));