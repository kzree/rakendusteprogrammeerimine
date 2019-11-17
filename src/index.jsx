/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import Header from "./components/Header.jsx";
import NotFound from "./pages/NotFound.jsx";
import CartPage from "./pages/CartPage.jsx";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import store from "./store.js";

console.log(store);

const defaultAuth = {
	token: null,
	user: {
		_id: null,
		email: null,
		firstname: null,
		lastname: null,
		createdAt: null,
	},
}
export const AuthContext = React.createContext(defaultAuth);

class App extends React.Component {
	state = defaultAuth;
	handleLogin = ({ token, user }) => {
		this.setState({
			user, token
		});
	};

	render() {
		return (
			<AuthContext.Provider value={this.state}>
				<BrowserRouter>
				<Route path={"/"} component = {Header} /> 
					<Switch>

						<Route path="/" exact component={HomePage} />
						<Route
							path="/login"
							exact
							render={(props) =>
								<LoginPage
									{...props}
									onLogin={this.handleLogin}
								/>}
						/>
						<Route path="/signup" exact component={SignupPage} />
						<Route path="/users/:userId" exact component={UserPage}/>
						<Route path="/items/:itemId" exact component={ItemPage} />
						<Route path="/cart" exact component = {CartPage}/>
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</AuthContext.Provider>

		);
	}
}

const root = document.getElementById("app");

ReactDOM.render(<App />, root);