import React, { useState } from 'react';
import { TodoHeader, TodoList } from 'components';
import { ITodo } from 'types';

const App: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	
	const toggleTodo = (id: number) => {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		}));
	};
	
	return (
		<div className="app">
			<TodoHeader todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />
		</div>
	);
};

export default App;