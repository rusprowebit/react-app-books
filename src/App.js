import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './components/book/Book';
import { Modal } from './components/modal/Modal'
import { showModalAction } from './redux/reducers/modalReducer';

const App = () => {
	const [modalMode, setModalMode] = useState(null);
	const [activeBook, setActiveBook] = useState(null);

	const modal = useSelector(({ modal }) => modal.visibleModal);
	const books = useSelector(({ book }) => book.book);
	const dispatch = useDispatch();

	const addBook = () => {
		dispatch(showModalAction());
		setModalMode('add');
	}

	const editBook = (book) => {
		dispatch(showModalAction());
		setModalMode('edit');
		setActiveBook(book);
	}

	return (
		<div className='app'>
			<div className='header'>
				<div className='header__title'>Список книг</div>
				<button className='header__button' onClick={addBook}>Добавитьfsdfsdf</button>
			</div>
			<div className='list'>
				<div className='list__title'>
					<div>Название</div>
					<div>Кол-во страниц</div>
					<div>Оценка</div>
				</div>
				<div className='list__books'>
						{books.map(book => {
							return (
								<Book onClickEdit={editBook} key={book.id} book={book} />
							)
						})}
				</div>
				{modal && <Modal mode={modalMode} book={activeBook} />}
			</div>
		</div>
	)
}

export default App;
