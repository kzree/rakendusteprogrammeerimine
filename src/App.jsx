/* eslint-disable no-unused-vars */
import React from "react";
import configureStore from "./store/configureStore.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./components/Router.jsx"
import 'react-toastify/dist/ReactToastify.css';

const {store, persistor} = configureStore();


class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading = {null} persistor={persistor}>
					<Router />
				</PersistGate>
			</Provider>
		);
	}
}

export default App;