import React from 'react';
import { ITodo, ITodoActions } from 'types';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import s from './TodoItem.module.css';

interface TodoItemProps extends ITodo, Omit<ITodoActions, 'setTodos'> {}

const TodoItem: React.FC<TodoItemProps> = ({ id, completed, title, toggleTodo, deleteTodo }) => {
	
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