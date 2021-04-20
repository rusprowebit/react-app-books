import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer';
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
	modal: modalReducer,
	book: bookReducer
})