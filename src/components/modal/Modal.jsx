import React, { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction, hideModalAction } from '../../redux/reducers/modalReducer';
import './modal.css';

export const Modal = ({ children }) => {
	const dispatch = useDispatch();

	const titleRef = createRef();
	const countRef = createRef();
	const ratingRef = createRef();

	function clearInputs() {
		titleRef.current.value = '';
		countRef.current.value = '';
		ratingRef.current.value = '';
	}
	
	const addBook = (e) => {
		e.preventDefault();
		if(titleRef.current.value.length < 1) {
			alert('Заполните данные');
			return
		}
		dispatch(addBookAction(titleRef.current.value, countRef.current.value, ratingRef.current.value));
		dispatch(hideModalAction());
		clearInputs();
	}
	return (
		<div className='modal' onClick={ () => dispatch(hideModalAction()) }>
			<form className='modal__content' onClick={ e => e.stopPropagation() }>
				<h1>Добавление книги</h1>
				<div className='modal__title'>
					<span>Название</span>
					<input ref={titleRef} type="text" placeholder='Введите название вашей книги'/>
				</div>
				<div className='modal__count'>
					<span>Кол-во страниц</span>
					<input ref={countRef} type="text" placeholder='Кол-во страниц'/>
				</div>
				<div className='modal__rating'>
					<span>Оценка</span>
					<input ref={ratingRef} type="text" placeholder='Поставьте оценку'/>
				</div>
				<div className='modal__button'>
					<button className='modal__button--cancel' onClick={ () => dispatch(hideModalAction()) }>Отмена</button>
					<button type='submit' className='modal__button--add' onClick={(e) => addBook(e)} >Добавить
					</button>
				</div>
			</form>
		</div>
	)
}