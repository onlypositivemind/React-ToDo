import React, { useEffect, useState } from 'react';
import { TodoItem } from 'components';
import { ITodo, ITodoActions, TodoFilter } from 'types';
import s from './TodoList.module.css';

const filterList: TodoFilter[] = ['All', 'Active', 'Completed'];

interface TodoListProps extends ITodoActions {
	todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, toggleTodo }) => {
	const [filter, setFilter] = useState<TodoFilter>('All');
	const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);
	
	const deleteCompletedTodos = () => {
		setTodos(todos.filter(todo => !todo.completed));
	};
	
	const handleFilter = () => {
		switch (filter) {
			case 'All':
				setFilteredTodos(todos);
				return;
			
			case 'Active':
				setFilteredTodos(todos.filter(todo => !todo.completed));
				return;
			
			case 'Completed':
				setFilteredTodos(todos.filter(todo => todo.completed));
				return;
		}
	};
	
	useEffect(() => {
		handleFilter();
	}, [todos, filter]);
	
	return (
		<>
			<ul className={s.list}>
				{filteredTodos.map(todo =>
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
							{filterList.map(str =>
								<li
									className={filter === str ? s.active : undefined}
									onClick={() => setFilter(str)}
								>
									{str}
								</li>
							)}
						</ul>
						<p className={s.clear} onClick={deleteCompletedTodos}>Clear completed</p>
					</li>
				}
			</ul>
		</>
	);
};

export default TodoList;