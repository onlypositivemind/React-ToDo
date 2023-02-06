import { TodoAction, TodoActionTypes, Todo } from 'types';

const initialState: Todo[] = [];

export const todoReducer = (state = initialState, action: TodoAction): Todo[] => {
	switch (action.type) {
		case TodoActionTypes.ADD_TODO: {
			return [...state, action.payload];
		}
		
		case TodoActionTypes.DELETE_TODO: {
			return state
			.filter(todo => todo.id !== action.payload)
			.map((todo, i) => ({ ...todo, order: i + 1 }));
		}
		
		case TodoActionTypes.TOGGLE_TODO: {
			return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
		}
		
		case TodoActionTypes.CLEAR_COMPLETED: {
			if (state.every(todo => !todo.completed)) {
				alert('You have no completed tasks');
				return [...state];
			}
			
			return state
			.filter(todo => !todo.completed)
			.map((todo, i) => ({ ...todo, order: i + 1 }));
		}
		
		case TodoActionTypes.SET_TODOS: {
			return action.payload;
		}
		
		default: {
			return state;
		}
	}
};