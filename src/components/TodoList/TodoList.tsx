import React, { useEffect, useState } from 'react';
import { TodoItem } from 'components';
import { ITodo, ITodoActions, TodoFilter } from 'types';
import { getNumberedArr } from 'helper';
import s from './TodoList.module.css';

const filterList: TodoFilter[] = ['All', 'Active', 'Completed'];

interface TodoListProps extends ITodoActions {
	todos: ITodo[];
}

type DragHandler = (e: React.DragEvent<HTMLLIElement>, todo: ITodo) => void

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, toggleTodo, deleteTodo }) => {
	const [filter, setFilter] = useState<TodoFilter>('All');
	const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);
	const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
	
	const deleteCompletedTodos = () => {
		const arr = todos.filter(todo => !todo.completed);
		setTodos(getNumberedArr(arr));
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
	
	const handleDragStart: DragHandler = (e, todo) => {
		setCurrentTodo(todo);
	};
	
	const handleDragOver: React.DragEventHandler<HTMLLIElement> = (e) => {
		e.preventDefault();
	};
	
	const handleDrop: DragHandler = (e, todo) => {
		e.preventDefault();
		setTodos(todos.map(t => {
			if (t.id === todo.id) {
				return { ...t, order: currentTodo!.order };
			}
			if (t.id === currentTodo!.id) {
				return { ...t, order: todo.order };
			}
			return t;
		}));
	};
	
	useEffect(() => {
		handleFilter();
	}, [todos, filter]);
	
	return (
		<>
			<ul className={s.list}>
				{filteredTodos
				.sort((a, b) => a.order - b.order)
				.map(todo =>
					<li
						className={s.item}
						key={todo.id}
						draggable
						onDragStart={(e) => handleDragStart(e, todo)}
						onDragOver={(e) => handleDragOver(e)}
						onDrop={(e) => handleDrop(e, todo)}
					>
						<TodoItem
							{...todo}
							toggleTodo={toggleTodo}
							deleteTodo={deleteTodo}
						/>
					</li>
				)}
				{todos.length > 0 &&
					<li className={s.info}>
						<p>{todos.filter(todo => !todo.completed).length} items left</p>
						<ul className={s.filter}>
							{filterList.map(str =>
								<li
									key={str}
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
			{todos.length > 0 && <p className={s.subinfo}>Drag and drop to reorder list</p>}
		</>
	);
};

export default TodoList;