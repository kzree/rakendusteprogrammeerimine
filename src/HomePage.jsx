/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import {phones, laptops} from "./database.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            items: phones,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        switch(event.target.value){
            case "phones":
                this.setState({
                    items: phones,
                });
                break;
            case "laptops":
                this.setState({
                    items: laptops,
                });
                break;
        }
    }

    render() {
        return (
            <>
                <Header />
                
                <div className="info-bar">
                    <select onChange={this.handleChange}>
                        <option value="phones">Telefonid</option>
                        <option value="laptops">Laptopid</option>
                    </select>
                </div>

                <ItemList items={this.state.items} />
            </>
        )

    }
}

export default HomePage;