import { useEffect, useState } from 'react';

const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

function getTheme() {
	const [theme, setTheme] = useState<'light' | 'dark'>(() => {
		return matchMedia.matches ? 'dark' : 'light';
	});

	useEffect(() => {
		// 监听系统颜色切换
		const listener = (event: { matches: boolean }) => {
			if (event.matches) {
				setTheme('dark');
			} else {
				setTheme('light');
			}
		};

		matchMedia.addEventListener('change', listener);

		return () => {
			matchMedia.removeEventListener('change', listener);
		};
	}, []);
	return theme;
}

export type ThemeModeType = 'light' | 'dark' | 'system';

export function useTheme() {
	const [themeMode, setThemeMode] = useState<ThemeModeType>('system');

	const currentTheme = getTheme();

	const theme = themeMode === 'system' ? currentTheme : themeMode;

	return {
		theme,
		themeMode,
		setThemeMode,
	};
}
