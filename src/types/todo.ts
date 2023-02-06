export interface Todo {
	id: number;
	order: number;
	title: string;
	completed: boolean;
}

export enum TodoActionTypes {
	ADD_TODO = 'todo/ADD_TODO',
	DELETE_TODO = 'todo/DELETE_TODO',
	TOGGLE_TODO = 'todo/TOGGLE_TODO',
	CLEAR_COMPLETED = 'todo/CLEAR_COMPLETED',
	SET_TODOS = 'todo/SET_TODOS',
}

interface AddTodoAction {
	type: TodoActionTypes.ADD_TODO;
	payload: Todo;
}

interface DeleteTodoAction {
	type: TodoActionTypes.DELETE_TODO;
	payload: number;
}

interface ToggleTodoAction {
	type: TodoActionTypes.TOGGLE_TODO;
	payload: number;
}

interface ClearCompletedTodos {
	type: TodoActionTypes.CLEAR_COMPLETED;
}

interface SetTodos {
	type: TodoActionTypes.SET_TODOS;
	payload: Todo[];
}

export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleTodoAction | ClearCompletedTodos | SetTodos;

