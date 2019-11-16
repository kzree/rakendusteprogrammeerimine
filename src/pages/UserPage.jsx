import React from "react";
import PropTypes from "prop-types";

class UserPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div>
                Hello mr {this.props.user.lastname}
            </div>
        );
    }
}

export default UserPage;