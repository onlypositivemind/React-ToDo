import React from 'react';

export interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

export interface ITodoActions {
	toggleTodo: (id: number) => void;
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export type TodoFilter = 'all' | 'active' | 'completed';