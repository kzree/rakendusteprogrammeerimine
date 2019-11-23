/* eslint-disable no-unused-vars */
import { createStore } from "redux";

const USER_SUCCESS = "USER_SUCCESS";
const USER_REQUEST = "USER_REQUEST";
const USER_FAILURE = "USER_FAILURE";

const ITEM_ADDED = "ITEM_ADDED";
const ITEM_REMOVED = "ITEM_REMOVED";

export const addItem = (_id) => ({
	type: ITEM_ADDED,
	payload: _id,
})

const initialState = {
	user: {
		email: null,
		_id: null,
		token: null
	},
	cart: [

	]
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case USER_SUCCESS: {
			return {
				...state,
				...action.payload,
			}
		}
		case ITEM_ADDED: {
			return {
				...state,
				cart: state.cart.concat([action.payload])
			};
		}
		default:{
			return state;
		}
	}
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

export default store;