import { useSelector } from 'react-redux';
import { Filter } from 'components';
import { TodoActionTypes } from 'types';
import { useAppDispatch } from 'store/hook';
import { selectCompletedTodos } from 'store/selectors';
import s from './Controls.module.scss';

const Controls = () => {
	const dispatch = useAppDispatch();
	const completedTodos = useSelector(selectCompletedTodos);
	
	const clearCompletedTodos = () => {
		dispatch({ type: TodoActionTypes.CLEAR_COMPLETED });
	};
	
	return (
		<>
			<div className={s.info}>
				<p>{completedTodos.length} items left</p>
				<Filter />
				<p className={s.clear} onClick={clearCompletedTodos}>Clear completed</p>
			</div>
			<p className={s.subinfo}>Drag and drop to reorder list</p>
		</>
	
	);
};

export default Controls;