import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './components/book/Book';
import { Modal } from './components/modal/Modal'
import { showModalAction } from './redux/reducers/modalReducer';

const App = () => {
	const modal = useSelector(({ modal }) => modal.visibleModal);
	const book = useSelector(state => state.modal.book);
	const dispatch = useDispatch();

	return (
		<div className='app'>
			<div className='header'>
				<div className='header__title'>Список книг</div>
				<button className='header__button' onClick={() => dispatch(showModalAction())}>Добавить</button>
			</div>
			<div className='list'>
				<div className='list__title'>
					<div>Название</div>
					<div>Кол-во страниц</div>
					<div>Оценка</div>
				</div>
				<div className='list__books'>
						{book.map(b => {
							return (
								<Book key={b.id} b={b}/>
							)
						})}
				</div>
				{modal && <Modal />}
			</div>
		</div>
	)
}

export default App;
