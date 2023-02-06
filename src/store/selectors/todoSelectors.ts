import { RootState } from '../index';
import { FilterType, Todo } from 'types';

export const selectAllTodos = (state: RootState) => state.todos;
export const selectCompletedTodos = (state: RootState) => state.todos.filter(todo => !todo.completed);

export const selectVisibleTodos = (state: RootState, filter: FilterType): Todo[] => {
	switch (filter) {
		case 'All': {
			return state.todos;
		}
		
		case 'Active': {
			return state.todos.filter(todo => !todo.completed);
		}
		
		case 'Completed': {
			return state.todos.filter(todo => todo.completed);
		}
		
		default: {
			return state.todos;
		}
	}
};