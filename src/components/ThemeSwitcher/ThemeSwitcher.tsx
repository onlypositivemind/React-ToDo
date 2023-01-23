import React, { useEffect, useState } from 'react';
import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';
import s from './ThemeSwitcher.module.css';

const defaultTheme = (): boolean => {
	const ls = localStorage.getItem('themeDark');
	if (ls) {
		return JSON.parse(ls);
	} else {
		return false;
	}
};

const ThemeSwitcher: React.FC = () => {
	const [isDark, setDark] = useState(defaultTheme());
	const ThemeIcon = isDark ? SunIcon : MoonIcon;
	
	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
		localStorage.setItem('themeDark', `${isDark}`);
	}, [isDark]);
	
	return (
		<div className={s.switcher} onClick={() => setDark(!isDark)}>
			<ThemeIcon className={s.icon} />
		</div>
	);
};

export default ThemeSwitcher;