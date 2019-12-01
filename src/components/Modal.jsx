/* eslint-disable no-unused-vars */
import React from "react";
import "../style/Modal.css"
import {IoMdCloseCircle} from "react-icons/all";
import cx from "classnames";
import PropTypes from "prop-types";

const Modal = ({children, open, onClose}) => {
    return (
        <div className={cx("modal", {open})}>
            <div className={"modal-inner"}>
                <IoMdCloseCircle className={"close"} onClick={onClose}/>
                {children}
            </div>
        </div>
    )
};

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
}

export default Modal;