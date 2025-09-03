import { FC } from 'react';
import { useTheme } from '../../../shared/lib/theme';
import styles from "./ThemeSwitcher.module.css"

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={styles.themeSwitcher}
            aria-label="Переключить тему"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};
