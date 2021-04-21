const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';


const initialState = {
	visibleModal: false,
	editModal: true
}

export const modalReducer = (state = initialState, action) => {
	switch(action.type) {
		case SHOW_MODAL:
			return {...state, visibleModal: true}
		case HIDE_MODAL:
			return {...state, visibleModal: false}
			
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