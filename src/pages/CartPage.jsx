/* eslint-disable no-unused-vars */
import React from "react";
import { getItems } from "../actions/itemsActions.js";
import PropTypes from "prop-types";
import { FaRegTrashAlt, FaAngleRight } from "react-icons/fa";
import "./cart.css";

class CartPage extends React.PureComponent {
    state = {
        rows: []
    };

    componentDidMount() {
        getItems()
        .then(items => {
            this.setState( {
                rows: items.slice(0,4)
            });
        })
        .catch(err => {
            console.log(err);
            console.error("Something went wrong fetching");
        });
    }

    render() {
        return (
            <div className={"cart-wrapper"}>
                <div className={"box cart"}>
                    <Table
                        rows={this.state.rows}
                    />
                </div>
                <div className={"box cart_summary"}>
                    <table>
                        <tbody>
                            <div className="cart-summary-info">
                                <tr><td>Items in cart:</td><td>4</td></tr>
                                <tr><td>Price:</td><td>1520 €</td></tr>
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

const Table = ({rows}) => {
    return (
        <div className={"table"}>
            <div className={"row"}>
                <div className={"cell"}>Item</div>
                <div className={"cell cell--grow"}>Name</div>
                <div className={"cell"}>Category</div>
                <div className={"cell cell--right"}>Price</div>
                <div className={"cell cell--small"}></div>
            </div>
            {rows.map( (row) => <Row key={row._id} {...row} />)}
        </div>
    );
};
Table.propTypes = {
    rows: PropTypes.array.isRequired,
};
const Row = ({title, imgSrc, category, price}) => {
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
                <FaRegTrashAlt/>
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

Row.propTypes = ItemProps;
export default CartPage;