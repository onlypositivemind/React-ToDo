import React, { useEffect, useState } from 'react';
import { TodoHeader, TodoList } from 'components';
import { ITodo } from 'types';

const defaultTodos = (): ITodo[] => {
	const lsTodos = localStorage.getItem('todos');
	if (lsTodos) {
		return JSON.parse(lsTodos);
	} else {
		return [];
	}
};

const App: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>(defaultTodos());
	
	const toggleTodo = (id: number) => {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		}));
	};
	
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);
	
	return (
		<div className="app">
			<TodoHeader todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />
		</div>
	);
};

export default App;