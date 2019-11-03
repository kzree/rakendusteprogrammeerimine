/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import ItemList from "../components/ItemList.jsx";
import css from "./index.css";
import checkboxCss from "../components/Checkbox.css";
import Checkbox from "../components/Checkbox.jsx";
import SortDropdown from "../components/SortDropdown.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedCategory: "phones",
            selectedCategories: ["phones"],
            allCategories: ["phones", "laptops"],
            filterBox: {display: 'none'},
            filterBoxVisible: false,
            limit: 36,
            sortDirection: -1
        }
        this.handleDropdown = this.handleDropdown.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.toggleFilterBox = this.toggleFilterBox.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.handleSortDropdown = this.handleSortDropdown.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems() {
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
        if (this.isSelected(event.target.name)) {
            const clone = this.state.selectedCategories.slice();
            const index = this.state.selectedCategories.indexOf(event.target.name);
            clone.splice(index, 1);
            this.setState({
                selectedCategories: clone
            });

        }
        else {
            this.setState({
                selectedCategories: this.state.selectedCategories.concat([event.target.name])
            });
        }

        this.setState({
            limit: 36
        })
    }

    handleSortDropdown(event) {
        console.log(event.target.value);
        this.setState({
            sortDirection: parseInt(event.target.value)
        })

        this.setState({
            limit: 36
        })
    }

    getVisibleItems() {

        return this.state.items
            .filter(item => this.isSelected(item.category))
            .sort((a, b) => {

                switch (this.state.sortDirection) {
                    case -1: return b.price - a.price;
                    case 1: return a.price - b.price;
                }
            });
    }

    isSelected(name){
        return this.state.selectedCategories.indexOf(name) >=0;
    }

    loadMore(){
        console.log(this.state.limit);
        this.setState({
            limit: this.state.limit + 36
        });
        
    }

    toggleFilterBox(){
        console.log(this.state.filterBox);
        if(this.state.filterBoxVisible === false){
            this.setState({
                filterBox: {display: 'flex'}
            });
            this.setState({
                filterBoxVisible: true
            });
        }else if(this.state.filterBoxVisible === true){
            this.setState({
                filterBox: {display: 'none'}
            });
            this.setState({
                filterBoxVisible: false
            });
        }
    }

    render() {
        const items = this.getVisibleItems();
        return (
            <>  
                <div className="info-bar">
                    <div className="info-bar-buttons">
                        <button className="info-bar-filters" onClick={this.toggleFilterBox}>Filters</button>
                    </div>
                    <div className="info-bar-sorting">
                        <SortDropdown 
                            direction={this.state.sortDirection}
                            onChange={this.handleSortDropdown}
                        />
                    </div>                    
                </div>
                <div className="filter-box" style={this.state.filterBox}>
                    <div className="filter-box-checkboxes">
                        {
                            this.state.allCategories.map(categoryName => {
                                return (
                                    <Checkbox
                                        key={categoryName}
                                        name={categoryName}
                                        onChange={this.handleDropdown}
                                        checked={this.isSelected(categoryName)}
                                    />
                                );
                            })
                        }
                    </div>
                </div>

                <div className="info-bar-items-shown">
                    Showing {this.state.limit} out of {items.length}
                </div>

                <ItemList items={this.getVisibleItems()} limit={this.state.limit}/>
                <div className="load-more-button">
                    <button onClick={this.loadMore} >Load more</button>
                </div>
                <div className="products-contact-info"></div>
            </>
        )

    }
}

export default HomePage;