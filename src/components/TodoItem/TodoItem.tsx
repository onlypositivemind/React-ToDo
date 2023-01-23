import { FC } from 'react';
import { ITodo, ITodoActions } from 'types';
import s from './TodoItem.module.css';

interface TodoItemProps extends ITodo, Pick<ITodoActions, 'toggleTodo'> {}

const TodoItem: FC<TodoItemProps> = ({ id, completed, title, toggleTodo }) => {
	
	return (
		<li className={s.item}>
			<label className={completed ? `${s.completed} ${s.check}` : s.check}>
				<input
					className={s.input}
					type="checkbox"
					checked={completed}
					onChange={() => toggleTodo(id)}
				/>
				<span className={s.checkBox} />
				{title}
			</label>
		</li>
	);
};

export default TodoItem;