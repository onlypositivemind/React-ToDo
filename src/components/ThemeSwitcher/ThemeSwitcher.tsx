import React, { useEffect, useState } from 'react';
import { loadLocalStorageItem, saveLocalStorageItem } from 'helper/localStorage';
import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';
import s from './ThemeSwitcher.module.css';

const ThemeSwitcher: React.FC = () => {
	const [isDark, setDark] = useState(loadLocalStorageItem('themeDark') || false);
	const ThemeIcon = isDark ? SunIcon : MoonIcon;
	
	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
		saveLocalStorageItem('themeDark', `${isDark}`);
	}, [isDark]);
	
	return (
		<div className={s.switcher} onClick={() => setDark(!isDark)}>
			<ThemeIcon className={s.icon} />
		</div>
	);
};

export default ThemeSwitcher;