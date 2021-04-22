const ADD_BOOK = 'ADD_MODAL';
const REMOVE_BOOK = 'REMOVE_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';

const initialState = {
	book: []
}

export const bookReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_BOOK: 
			return {...state, book: [...state.book, {title: action.title, count: action.count, rating: action.rating, id: action.id}]}
		case REMOVE_BOOK:
			return {...state, book: state.book.filter(b => b.id !== action.id)}
		case EDIT_BOOK: 
			return {...state, book: [...state.book.filter(({ id }) => id !== action.book.id), {title: action.title, count: action.count, rating: action.rating, id: action.id} ]}
		default: return state
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

export const editBookAction = (title, count, rating, book) => {
	return {
		type: EDIT_BOOK,
		book,
		title: title,
		count: count,
		rating: rating,
		id: Math.random()
	}
}