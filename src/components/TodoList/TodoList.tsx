import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Controls, TodoItem } from 'components';
import { Todo, TodoActionTypes } from 'types';
import { RootState } from 'store';
import { useAppDispatch } from 'store/hook';
import { selectVisibleTodos, selectActiveFilter, selectAllTodos } from 'store/selectors';
import s from './TodoList.module.scss';

type DragHandler = (e: React.DragEvent<HTMLLIElement>, todo: Todo) => void

const TodoList = () => {
	const dispatch = useAppDispatch();
	const activeFilter = useSelector(selectActiveFilter);
	const allTodos = useSelector(selectAllTodos);
	const todos = useSelector((state: RootState) => selectVisibleTodos(state, activeFilter));
	
	const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
	
	const handleDragStart: DragHandler = (e, todo) => {
		setCurrentTodo(todo);
	};
	
	const handleDragOver: React.DragEventHandler<HTMLLIElement> = (e) => {
		e.preventDefault();
	};
	
	const handleDrop: DragHandler = (e, todo) => {
		e.preventDefault();
		const arr = todos.map(t => {
			if (t.id === todo.id) {
				return { ...t, order: currentTodo!.order };
			}
			if (t.id === currentTodo!.id) {
				return { ...t, order: todo.order };
			}
			return t;
		});
		
		dispatch({ type: TodoActionTypes.SET_TODOS, payload: arr });
	};
	
	return (
		<>
			<ul className={s.list}>
				{todos
				.sort((a, b) => a.order - b.order)
				.map(todo =>
					<li
						key={todo.id}
						draggable
						onDragStart={(e) => handleDragStart(e, todo)}
						onDragOver={(e) => handleDragOver(e)}
						onDrop={(e) => handleDrop(e, todo)}
					>
						<TodoItem {...todo} />
					</li>
				)}
			</ul>
			{allTodos.length > 0 && <Controls />}
		</>
	);
};

export default TodoList;