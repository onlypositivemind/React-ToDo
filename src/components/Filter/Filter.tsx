import { useSelector } from 'react-redux';
import { FilterActionTypes, FilterType } from 'types';
import { useAppDispatch } from 'store/hook';
import { selectActiveFilter } from 'store/selectors';
import s from './Filter.module.scss';

const filters: FilterType[] = ['All', 'Active', 'Completed'];

const Filter = () => {
	const dispatch = useAppDispatch();
	const activeFilter = useSelector(selectActiveFilter);
	
	const handleFilter = (f: FilterType) => {
		dispatch({ type: FilterActionTypes.SET_FILTER, payload: f });
	};
	
	return (
		<ul className={s.filter}>
			{filters.map(filter =>
				<li
					key={filter}
					className={filter === activeFilter ? s.active : ''}
					onClick={() => handleFilter(filter)}
				>
					{filter}
				</li>
			)}
		</ul>
	);
};

export default Filter;