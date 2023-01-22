import React, { useEffect, useRef, useState } from 'react';
import { ITodo, ITodoActions } from 'types';
import s from './TodoHeader.module.css';

interface TodoHeaderProps extends Pick<ITodoActions, 'setTodos'> {
	todos: ITodo[];
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ todos, setTodos }) => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
	};
	
	const handleKey: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			addTodo();
		}
	};
	
	const addTodo = () => {
		if (value.trim()) {
			setTodos([...todos, { id: Date.now(), title: value, completed: false }]);
			setValue('');
		} else {
			setValue('');
			alert('Write a task');
		}
	};
	
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);
	
	return (
		<div className={s.wrapper}>
			<div className={s.top}>
				<h1>Todo</h1>
				<p>ThemeSwitcher</p>
			</div>
			<div className={s.bottom}>
				<input
					ref={inputRef}
					type="text"
					placeholder="Create a new todo..."
					value={value}
					onChange={handleChange}
					onKeyDown={handleKey}
				/>
				<button onClick={addTodo}>Create</button>
			</div>
		</div>
	);
};

export default TodoHeader;