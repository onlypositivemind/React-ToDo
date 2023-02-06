export type Theme = 'light' | 'dark';

export enum ThemeActionTypes {
	SET_THEME = 'theme/SET_THEME',
}

interface SetThemeAction {
	type: ThemeActionTypes.SET_THEME;
	payload: Theme;
}

export type ThemeAction = SetThemeAction;