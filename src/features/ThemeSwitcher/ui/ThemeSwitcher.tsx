import { useTheme } from '../../../shared/lib/theme';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-switcher"
            aria-label="Переключить тему"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};
