import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeActionTypes } from 'types';
import { useAppDispatch } from 'store/hook';
import { selectTheme } from 'store/selectors';
import { ReactComponent as MoonIcon } from 'assets/images/moon.svg';
import { ReactComponent as SunIcon } from 'assets/images/sun.svg';
import s from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
	const dispatch = useAppDispatch();
	const theme = useSelector(selectTheme);
	const ThemeIcon = theme === 'light' ? MoonIcon : SunIcon;
	
	const toggleTheme = () => {
		const t = theme === 'light' ? 'dark' : 'light';
		dispatch({ type: ThemeActionTypes.SET_THEME, payload: t });
	};
	
	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);
	
	return (
		<div className={s.switcher} onClick={toggleTheme}>
			<ThemeIcon className={s.icon} />
		</div>
	);
};

export default ThemeSwitcher;