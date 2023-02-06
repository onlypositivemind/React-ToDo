export type FilterType = 'All' | 'Active' | 'Completed';

export enum FilterActionTypes {
	SET_FILTER = 'filter/SET_FILTER',
}

interface SetFilterAction {
	type: FilterActionTypes.SET_FILTER;
	payload: FilterType;
}

export type FilterAction = SetFilterAction