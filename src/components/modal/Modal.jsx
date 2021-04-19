import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction, hideModalAction } from '../../redux/reducers/modalReducer';
import './modal.css';

export const Modal = () => {
	const dispatch = useDispatch();
	const [titleInput, setTitleInput] = useState('');
	const [countInput, setCountInput] = useState('');
	const [ratingInput, setRatingInput] = useState('');

	function clearInputs() {
		setTitleInput('');
		setCountInput('');
		setRatingInput('');
	}
	
	const addBook = (e) => {
		e.preventDefault();
		if(titleInput.length < 1) {
			alert('Заполните название книги');
			return
		} else if(countInput.length < 1) {
			alert('Заполните кол-во страниц');
			return
		} else if(ratingInput.length < 1) {
			alert('Поставьте оценку');
			return
		}
		dispatch(addBookAction(titleInput, countInput, ratingInput));
		dispatch(hideModalAction());
		clearInputs();
	}
	return (
		<div className='modal' onClick={ () => dispatch(hideModalAction()) }>
			<form className='modal__content' onClick={ e => e.stopPropagation() }>
				<h1>Добавление книги</h1>
				<div className='modal__title'>
					<span>Название</span>
					<input value={titleInput} onChange={ e => setTitleInput(e.target.value) } type="text" placeholder='Введите название вашей книги'/>
				</div>
				<div className='modal__count'>
					<span>Кол-во страниц</span>
					<input value={countInput} onChange={ e => setCountInput(e.target.value) } type="text" placeholder='Кол-во страниц'/>
				</div>
				<div className='modal__rating'>
					<span>Оценка</span>
					<input value={ratingInput} onChange={ e => setRatingInput(e.target.value) } type="text" placeholder='Поставьте оценку'/>
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