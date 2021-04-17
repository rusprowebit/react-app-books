const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const ADD_BOOK = 'ADD_MODAL';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
	visibleModal: false,
	book: []
}

export const modalReducer = (state = initialState, action) => {
	switch(action.type) {
		case SHOW_MODAL:
			return {...state, visibleModal: true}
		case HIDE_MODAL:
			return {...state, visibleModal: false}
		case ADD_BOOK: 
			return {...state, book: [...state.book, {title: action.title, count: action.count, rating: action.rating, id: action.id}]}
		case REMOVE_BOOK:
			return {...state, book: state.book.filter(b => b.id !== action.id)}
		default: return state
	}
}

export const showModalAction = () => {
	return {
		type: SHOW_MODAL
	}
}
export const hideModalAction = () => {
	return {
		type: HIDE_MODAL
	}
}

export const addBookAction = (title, count, rating) => {
	return {
		type: ADD_BOOK,
		title: title,
		count: count,
		rating: rating,
		id: Math.random()
	}
}

export const removeBookAction = (id) => {
	return {
		type: REMOVE_BOOK,
		id
	}
}