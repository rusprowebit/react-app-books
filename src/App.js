import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './components/book/Book';
import { Modal } from './components/modal/Modal'
import { showModalAction } from './redux/reducers/modalReducer';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

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
				<button className='header__button' onClick={addBook}>Добавить</button>
			</div>
			<div className='list'>
				<div className='list__title'>
					<div>Название</div>
					<div>Кол-во страниц</div>
					<div>Оценка</div>
				</div>
				<TransitionGroup component='div' className='list__books'>
						{books.map(book => {
							return (
								<CSSTransition key={book.id} classNames={'note'} timeout={1500}>
									<Book onClickEdit={editBook} book={book} />
								</CSSTransition>
							)
						})}
				</TransitionGroup>
				{modal && <Modal mode={modalMode} book={activeBook} />}
			</div>
		</div>
	)
}

export default App;
