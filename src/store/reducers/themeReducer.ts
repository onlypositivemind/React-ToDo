import { ThemeAction, ThemeActionTypes, Theme } from 'types';

const initialState: Theme = 'light';

export const themeReducer = (state = initialState, action: ThemeAction): Theme => {
	switch (action.type) {
		case ThemeActionTypes.SET_THEME: {
			return action.payload;
		}
		
		default: {
			return state;
		}
	}
};