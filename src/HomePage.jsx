/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedCategory: "phones",
        }
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems (){
        fetch("/api/items")
            .then(res => {
                console.log("res", res);
                return res.json();
            })
            .then(items => {
                console.log("items", items);
                this.setState({
                    items
                });
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    handleDropdown(event) {
        console.log(event.target.value);
        this.setState({
            selectedCategory: event.target.value
        });
    }

    getVisibleItems() {
        return this.state.items.filter(item => item.category === this.state.selectedCategory);
    }

    render() {
        return (
            <>
                <Header />

                <div className="info-bar">
                    <select onChange={this.handleDropdown}>
                        <option value="phones">Telefonid</option>
                        <option value="laptops">Laptopid</option>
                    </select>
                </div>

                <ItemList items={this.getVisibleItems()} />
            </>
        )

    }
}

export default HomePage;