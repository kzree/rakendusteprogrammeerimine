/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./Dropdown.css";


const SortDropdown = ({direction, onChange}) => {
    return(
        <div className = "box">
            <select value={direction} onChange = {onChange} >
                <option value={-1}>Price high to low</option>
                <option value={1}>Price low to high</option>
            </select>
        </div>
    )
    
}

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SortDropdown;