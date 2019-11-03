/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({name, onChange, checked}) => {
    return (
        <label className="container">
        {name}
        <input
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange} />
            <span className="checkmark"></span>
            <br />
        </label>
    )
    
};


Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
};

export default Checkbox;