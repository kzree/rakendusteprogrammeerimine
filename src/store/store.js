/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const USER_SUCCESS = "USER_SUCCESS";
const USER_REQUEST = "USER_REQUEST";
const USER_FAILURE = "USER_FAILURE";

const ITEM_ADDED = "ITEM_ADDED";
const ITEM_REMOVED = "ITEM_REMOVED";

export const addItem = (item) => ({
	type: ITEM_ADDED,
	payload: item,
});

export const removeItem = (_id) => ({
    type: ITEM_REMOVED,
    payload: _id,
});

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
		case ITEM_REMOVED: {
			return {
				...state,
				cart: removeItemById(state.cart, action.payload)
			}
		}
		default:{
			return state;
		}
	}
};

const store = createStore(reducer, applyMiddleware(logger));
store.subscribe(() => console.log(store.getState()));

const removeItemById = (items, _id) => {
    const index = items.findIndex(item => item._id === _id);
    if(index === -1) return items;
    const copy = items.slice();
    copy.splice(index, 1);
    return copy;
};

export default store;