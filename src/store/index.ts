import { createStore } from 'redux';

import { loadState, saveState } from './localStorage';
import { rootReducer } from './reducers';

export type RootState = ReturnType<typeof rootReducer>;

const configureStore = () => {
	const persistedState = loadState();
	
	const store = createStore(
		rootReducer,
		persistedState,
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
	);
	
	store.subscribe(() => {
		saveState(store.getState());
	});
	
	return store;
};

export const store = configureStore();

export type AppDispatch = typeof store.dispatch;