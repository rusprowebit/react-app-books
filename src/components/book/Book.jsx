import React from 'react';
import './book.css'
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/reducers/bookReducer';

export const Book = ({ b }) => {
	const dispatch = useDispatch();
	return (
		<div className='list__book'>
			<div className='list__book-wrapper'><div className='list__book-name'>{b.title}</div></div>
			<div className='list__book-wrapper'><div className='list__book-count'>{b.count}</div></div>
			<div className='list__book-wrapper'><div className='list__book-rating'>{b.rating}</div></div>
			<button onClick={() => dispatch(removeBookAction(b.id))} className='list__book-close'>&times;</button>
		</div>
	)
}