import React from "react";
import PropTypes from "prop-types";
//import authConsumer from "../components/authConsumer.jsx";
//import protectedRedirect from "../components/protectedRedirect.jsx";
import "../style/UserPage.css";
import { UserPropTypes } from "../store/reducer";
import {connect} from "react-redux";
import { userUpdate, tokenUpdate } from "../store/actions.js";

class UserPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };

    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
        this.props.history.push(`/`);
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
                            <button onClick = {this.handleLogout}>Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
    };
};

export default connect(mapStateToProps)(UserPage);
//export default authConsumer(protectedRedirect(UserPage));