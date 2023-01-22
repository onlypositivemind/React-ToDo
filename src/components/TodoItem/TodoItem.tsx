import { FC } from 'react';
import { ITodo, ITodoActions } from 'types';
import s from './TodoItem.module.css';

interface TodoItemProps extends ITodo, Pick<ITodoActions, 'toggleTodo'> {}

const TodoItem: FC<TodoItemProps> = ({ id, completed, title, toggleTodo }) => {
	
	return (
		<li className={s.item}>
			<input
				className={s.realCheckbox}
				type="checkbox"
				checked={completed}
				onChange={() => toggleTodo(id)}
			/>
			<div className={s.customCheckbox} />
			<p className={completed ? s.completed : ''}>{title}</p>
		</li>
	);
};

export default TodoItem;