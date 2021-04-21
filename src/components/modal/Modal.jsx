import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModalAction } from '../../redux/reducers/modalReducer';
import { addBookAction } from '../../redux/reducers/bookReducer';
import './modal.css';

export const Modal = () => {
	const dispatch = useDispatch();
	const [titleInput, setTitleInput] = useState('');
	const [countInput, setCountInput] = useState('');
	const [ratingInput, setRatingInput] = useState('');

	const [titleError, setTitleError] = useState(false);
	const [countError, setCountError] = useState(false);
	const [ratingError, setRatingError] = useState(false);

	function clearInputs() {
		setTitleInput('');
		setCountInput('');
		setRatingInput('');
	}

	
	
	const addBook = (e) => {
		e.preventDefault();
		if(titleInput.trim().length < 1) {
			setTitleError(true);
			return
		} else if(countInput.trim().length < 1) {
			setCountError(true);
			return
		} else if(ratingInput.trim().length < 1) {
			setRatingError(true);
			return
		}
		dispatch(addBookAction(titleInput.toUpperCase(), countInput, ratingInput));
		dispatch(hideModalAction());
		clearInputs();
	}

	return (
		<div className='modal' onClick={ () => dispatch(hideModalAction()) }>
			<form className='modal__content' onClick={ e => e.stopPropagation() }>
				<h1>Добавление книги</h1>
				<div className='modal__title'>
					<span>Название</span>
					<input 
						className={titleError ? 'input-error' : null}
						name='title'
						value={titleInput} 
						onChange={ e => setTitleInput(e.target.value) } 
						type="text" 
						placeholder='Введите название вашей книги'
					/>
				</div>
				<div className='modal__count'>
					<span>Кол-во страниц</span>
					<input 
						className={countError ? 'input-error' : null}
						name='count'
						value={countInput} 
						onChange={ e => setCountInput(e.target.value) } 
						type="text" 
						placeholder='Кол-во страниц'
					/>
				</div>
				<div className='modal__rating'>
					<span>Оценка</span>
					<input 
						className={ratingError ? 'input-error' : null}
						name='rating'
						value={ratingInput} 
						onChange={ e => setRatingInput(e.target.value) } 
						type="text" 
						placeholder='Поставьте оценку'
					/>
				</div>
				<div className='modal__button'>
					<button className='modal__button--cancel' onClick={ () => dispatch(hideModalAction()) }>Отмена</button>
					<button type='submit' className='modal__button--add' onClick={(e) => addBook(e)} >Добавить</button>
				</div>
			</form>
		</div>
	)
}