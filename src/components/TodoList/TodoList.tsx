import React, { useEffect, useState } from 'react';
import { TodoItem } from 'components';
import { ITodo, ITodoActions, TodoFilter } from 'types';
import s from './TodoList.module.css';

interface TodoListProps extends ITodoActions {
	todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, toggleTodo }) => {
	const [filter, setFilter] = useState<TodoFilter>('all');
	const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);
	
	const deleteCompletedTodos = () => {
		setTodos(todos.filter(todo => !todo.completed));
	};
	
	const handleFilter = () => {
		switch (filter) {
			case 'all':
				setFilteredTodos(todos);
				return;
			
			case 'active':
				setFilteredTodos(todos.filter(todo => !todo.completed));
				return;
			
			case 'completed':
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
							<li
								onClick={() => setFilter('all')}
								className={filter === 'all' ? s.active : ''}
							>
								All
							</li>
							<li
								onClick={() => setFilter('active')}
								className={filter === 'active' ? s.active : ''}
							>
								Active
							</li>
							<li
								onClick={() => setFilter('completed')}
								className={filter === 'completed' ? s.active : ''}
							>
								Completed
							</li>
						</ul>
						<p className={s.clear} onClick={deleteCompletedTodos}>Clear completed</p>
					</li>
				}
			</ul>
		</>
	);
};

export default TodoList;