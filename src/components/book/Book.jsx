import React from 'react';
import './book.css'
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/reducers/bookReducer';
import editSvg from '../../assets/icons/edit.svg';

export const Book = ({ book, onClickEdit }) => {
	const dispatch = useDispatch();
	return (
		<div className='list__book'>
			<div className='list__book-wrapper'><div className='list__book-name'>{book.title}</div></div>
			<div className='list__book-wrapper'><div className='list__book-count'>{book.count}</div></div>
			<div className='list__book-wrapper'><div className='list__book-rating'>{book.rating}</div></div>
			<button onClick={ () => dispatch(removeBookAction(book.id)) } className='list__book-close'>&times;</button>
			<img onClick={ () => onClickEdit(book) } className='list__book-edit' src={editSvg} alt='edit'></img>
		</div>
	)
}