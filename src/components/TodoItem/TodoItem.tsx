import { Todo, TodoActionTypes } from 'types';
import { useAppDispatch } from 'store/hook';
import { ReactComponent as DeleteIcon } from 'assets/images/delete.svg';
import s from './TodoItem.module.scss';

interface TodoItemProps extends Todo {}

const TodoItem = ({ id, completed, title }: TodoItemProps) => {
	const dispatch = useAppDispatch();
	
	const toggleTodo = (id: number) => {
		dispatch({ type: TodoActionTypes.TOGGLE_TODO, payload: id });
	};
	
	const deleteTodo = (id: number) => {
		dispatch({ type: TodoActionTypes.DELETE_TODO, payload: id });
	};
	
	return (
		<>
			<label className={completed ? `${s.completed} ${s.check}` : s.check}>
				<input
					className={s.input}
					type="checkbox"
					checked={completed}
					onChange={() => toggleTodo(id)}
				/>
				<span className={s.checkBox} />
				{title}
				<DeleteIcon className={s.icon} onClick={() => deleteTodo(id)} />
			</label>
		</>
	);
};

export default TodoItem;