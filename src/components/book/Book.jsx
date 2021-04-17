import React from 'react';
import './book.css'
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/reducers/modalReducer';

export const Book = ({ b }) => {
	const dispatch = useDispatch();
	return (
		<div className='list__book'>
			<span className='list__book-name'>{b.title}</span>
			<span className='list__book-count'>{b.count}</span>
			<span className='list__book-rating'>{b.rating}</span>
			<button onClick={() => dispatch(removeBookAction(b.id))} className='list__book-close'>&times;</button>
		</div>
	)
}