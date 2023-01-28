import React from 'react';

export interface ITodo {
	id: number;
	order: number;
	title: string;
	completed: boolean;
}

export interface ITodoActions {
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export type TodoFilter = 'All' | 'Active' | 'Completed';