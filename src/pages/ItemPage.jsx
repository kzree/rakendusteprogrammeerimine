/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "../style/ItemPage.css";
import { addItem } from "../store/actions";
import {toast} from "react-toastify";

class ItemPage extends React.PureComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.handleBuy = this.handleBuy.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems() {
        fetch(`/api/v1/items/${this.props.match.params.itemId}`)
            .then(res => {
                return res.json();
            })
            .then(item => {
                console.log("item", item);
                this.setState({
                    ...item
                });
            })
            .catch(err => {
                console.log("item page", err);
            });
    }

    handleBuy(){
        this.props.dispatch(addItem(this.state));
        toast.success("Item added to cart", {position: "bottom-right"});
    }

    render() {
        console.log(this.props);
        return (
            <>
                <div>
                    <div className="wrapper">
                        <div className="product">
                            <div className="item-item-info-pic">
                                <img className="item-item-image" src={this.state.imgSrc}></img>
                                <div className="item-item-price">{this.state.price}€</div>
                                <button className="item-item-buy" onClick={this.handleBuy}>Add to cart</button>
                            </div>
                            <div className="item-item-info">
                                <div className="item-item-name">{this.state.title}</div>
                                <div className="item-item-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>

                                    <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

ItemPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default connect()(ItemPage);