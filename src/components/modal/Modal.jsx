import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModalAction } from '../../redux/reducers/modalReducer';
import { addBookAction, editBookAction } from '../../redux/reducers/bookReducer';
import './modal.css';

export const Modal = ({ mode, book }) => {
	const dispatch = useDispatch();

	const [titleInput, setTitleInput] = useState('');
	const [countInput, setCountInput] = useState('');
	const [ratingInput, setRatingInput] = useState('');

	const [editTitleInput, setEditTitleInput] = useState( mode === 'edit' ? book.title : null);
	const [editCountInput, setEditCountInput] = useState( mode === 'edit' ? book.count : null);
	const [editRatingInput, setEditRatingInput] = useState( mode === 'edit' ? book.rating : null);

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

	const editBook = (e) => {
		e.preventDefault();
		dispatch(editBookAction(editTitleInput.toUpperCase(), editCountInput, editRatingInput, book));
		dispatch(hideModalAction());
	}

	return (
		<div className='modal' onClick={ () => dispatch(hideModalAction()) }>
			<form className='modal__content' onClick={ e => e.stopPropagation() }>
				<h1>{mode === 'add' ? 'Добавление книги' : 'Редактирование книги'}</h1>
				<div className='modal__title'>
					<span>Название</span>
					<input 
						className={titleError ? 'input-error' : null}
						name='title'
						value={ mode === 'add' ? titleInput : editTitleInput} 
						onChange={ e => mode === 'add' ? setTitleInput(e.target.value) : setEditTitleInput(e.target.value) } 
						type="text" 
						placeholder='Введите название вашей книги'
					/>
				</div>
				<div className='modal__count'>
					<span>Кол-во страниц</span>
					<input 
						className={countError ? 'input-error' : null}
						name='count'
						value={ mode === 'add' ? countInput : editCountInput} 
						onChange={ e =>  mode === 'add' ? setCountInput(e.target.value) : setEditCountInput(e.target.value) } 
						type="text" 
						placeholder='Кол-во страниц'
					/>
				</div>
				<div className='modal__rating'>
					<span>Оценка</span>
					<input 
						className={ratingError ? 'input-error' : null}
						name='rating'
						value={ mode === 'add' ? ratingInput : editRatingInput} 
						onChange={ e => mode === 'add' ? setRatingInput(e.target.value) : setEditRatingInput(e.target.value) } 
						type="text" 
						placeholder='Поставьте оценку'
					/>
				</div>
				<div className='modal__button'>
					<button className='modal__button--cancel' onClick={ () => dispatch(hideModalAction()) }>Отмена</button>
					<button 
						type='submit' 
						className='modal__button--add' 
						onClick={(e) => mode === 'add' ? addBook(e) : editBook(e) } 
					>{mode === 'add' ? 'Добавить' : 'Сохранить'}
					</button>
					
				</div>
			</form>
		</div>
	)
}