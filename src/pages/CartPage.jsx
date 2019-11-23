/* eslint-disable no-unused-vars */
import React from "react";
import { getItems } from "../actions/itemsActions.js";
import PropTypes from "prop-types";
import { FaRegTrashAlt, FaAngleRight } from "react-icons/fa";
import {connect} from "react-redux";
import "./cart.css";
import { removeItem } from "../store/actions.js";
import {toast} from "react-toastify";
import * as selectors from "../store/selectors.js";

class CartPage extends React.PureComponent {
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    calcNumbers = () => {
        const sum = Math.round(this.props.cart.reduce((acc, item) => acc + item.price, 0));
        return {
            sum
        }
    }

    handleTrash = (_id) => {
        this.props.dispatch(removeItem(_id))
        toast.error("Item removed from cart", {position: "bottom-right"});
    }

    render() {
        const {sum} = this.calcNumbers();
        return (
            <div className={"cart-wrapper"}>
                <div className={"box cart"}>
                    <Table
                        onTrash={this.handleTrash}
                        rows={this.props.cart}
                    />
                </div>
                <div className={"box cart_summary"}>
                    <table>
                        <tbody>
                            <div className="cart-summary-info">
                                <tr><td>Items in cart:</td><td>{this.props.cart.length}</td></tr>
                                <tr><td>Price:</td><td>{sum}€</td></tr>
                            </div>
                            <tr>
                                <td></td>
                                <td><div className={"submit-button"}>Order<FaAngleRight /></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const Table = ({rows, onTrash}) => {
    return (
        <div className={"table"}>
            <div className={"row"}>
                <div className={"cell"}>Item</div>
                <div className={"cell cell--grow"}>Name</div>
                <div className={"cell"}>Category</div>
                <div className={"cell cell--right"}>Price</div>
                <div className={"cell cell--small"}></div>
            </div>
            {rows.map( (row, index) => <Row onTrash={onTrash} key={index} {...row} />)}
        </div>
    );
};
Table.propTypes = {
    rows: PropTypes.array.isRequired,
    onTrash: PropTypes.func.isRequired,
};
const Row = ({_id, title, imgSrc, category, price, onTrash}) => {
    return (
        <div className={"row"}>
            <div className={"cell"}>
                <img src={imgSrc} />
            </div>
            <div className={"cell cell--grow"}>
                {title}
            </div>
            <div className={"cell"}>
                {category}
            </div>
            <div className={"cell cell--right"}>
                {price} €
            </div>
            <div className={"cell cell--small cell--center"}>
                <FaRegTrashAlt title = "Remove from cart" className = "cart-trash" onClick={() => onTrash(_id)}/>
            </div>
        </div>
    );
};
export const ItemProps = {
    _id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

Row.propTypes = {
    ...ItemProps,
    onTrash: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => {
    return {
        cart: selectors.getCart(store),
    };
};

export default connect(mapStateToProps)(CartPage);