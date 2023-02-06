import { combineReducers } from 'redux';

import { todoReducer } from './todoReducer';
import { themeReducer } from './themeReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
	todos: todoReducer,
	theme: themeReducer,
	filter: filterReducer,
});