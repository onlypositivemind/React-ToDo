import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Todo, TodoActionTypes } from 'types';
import { useAppDispatch } from 'store/hook';
import { selectAllTodos } from 'store/selectors';
import s from './NewTodo.module.scss';

const NewTodo = () => {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState('');
	const allTodos = useSelector(selectAllTodos);
	
	const addTodo = () => {
		if (value.trim()) {
			const newTodo: Todo = {
				id: Date.now(),
				order: allTodos.length + 1,
				completed: false,
				title: value,
			};
			
			dispatch({ type: TodoActionTypes.ADD_TODO, payload: newTodo });
			setValue('');
		} else {
			alert('Write a task');
		}
	};
	
	const handleKey: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			addTodo();
		}
	};
	
	return (
		<div className={s.wrapper}>
			<input
				type="text"
				placeholder="Create a new todo..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyUp={handleKey}
			/>
			<button onClick={addTodo}>Create</button>
		</div>
	);
};

export default NewTodo;