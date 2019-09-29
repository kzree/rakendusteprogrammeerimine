/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header.jsx";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class ItemPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems(){
        fetch(`/api/items/${this.props.match.params.itemId}`)
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

    render() {
        return (
            <>
                <Header />
                <div>
                    <div className="wrapper">
                        <div className="product">
                            <img className="item_image" src={this.state.imgSrc}></img>
                            <div className="item_info">
                                <div className="item_name">{this.state.title}</div>
                                <div className="item_price">{this.state.price}</div>
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

export default ItemPage;