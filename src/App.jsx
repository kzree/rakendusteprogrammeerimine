/* eslint-disable no-unused-vars */
import React from "react";
import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import Header from "./components/Header.jsx";
import NotFound from "./pages/NotFound.jsx";
import CartPage from "./pages/CartPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "./store/configureStore.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const {store, persistor} = configureStore();


class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading = {null} persistor={persistor}>
					<BrowserRouter>
						<Route path={"/"} component={Header} />
						<Switch>

							<Route path="/" exact component={HomePage} />
							<Route path="/login" exact component={LoginPage} />

							<Route path="/signup" exact component={SignupPage} />
							<Route path="/users/:userId" exact component={UserPage} />
							<Route path="/items/:itemId" exact component={ItemPage} />
							<Route path="/cart" exact component={CartPage} />
							<Route component={NotFound} />
						</Switch>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;