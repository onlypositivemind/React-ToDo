import { FilterAction, FilterActionTypes, FilterType } from 'types';

const initialState: FilterType = 'All';

export const filterReducer = (state = initialState, action: FilterAction): FilterType => {
	switch (action.type) {
		case FilterActionTypes.SET_FILTER: {
			return action.payload;
		}
		
		default: {
			return state;
		}
	}
};