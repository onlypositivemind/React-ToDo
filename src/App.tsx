import React, { useEffect, useState } from 'react';
import { TodoHeader, TodoList } from 'components';
import { ITodo } from 'types';
import { loadLocalStorageItem, saveLocalStorageItem, getNumberedArr } from 'helper';

const App: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>(loadLocalStorageItem('todos') || []);
	
	const toggleTodo = (id: number) => {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		}));
	};
	
	const deleteTodo = (id: number) => {
		const arr = todos.filter(todo => todo.id !== id);
		setTodos(getNumberedArr(arr));
	};
	
	useEffect(() => {
		saveLocalStorageItem('todos', JSON.stringify(todos));
	}, [todos]);
	
	return (
		<div className="app">
			<TodoHeader todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;