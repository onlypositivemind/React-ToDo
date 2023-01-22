import React from 'react';
import { TodoItem } from 'components';
import { ITodo, ITodoActions } from 'types';
import s from './TodoList.module.css';

interface TodoListProps extends ITodoActions {
	todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, toggleTodo }) => {
	
	const deleteCompletedTodos = () => {
		setTodos(todos.filter(todo => !todo.completed));
	};
	
	return (
		<>
			<ul className={s.list}>
				{todos.map(todo =>
					<TodoItem
						key={todo.id}
						{...todo}
						toggleTodo={toggleTodo}
					/>
				)}
				{todos.length > 0 &&
					<li className={s.info}>
						<p>{todos.filter(todo => !todo.completed).length} items left</p>
						<ul className={s.filter}>
							<li className={s.active}>All</li>
							<li>Active</li>
							<li>Completed</li>
						</ul>
						<p className={s.clear} onClick={deleteCompletedTodos}>Clear completed</p>
					</li>
				}
			</ul>
		</>
	);
};

export default TodoList;