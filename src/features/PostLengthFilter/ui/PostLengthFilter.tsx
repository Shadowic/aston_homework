import { FC } from 'react';
import styles from './PostLengthFilter.module.css';

export type SortDirection = 'asc' | 'desc';

interface PostLengthFilterProps {
    onFilterChange: (direction: SortDirection) => void;
    currentDirection: SortDirection;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({
        onFilterChange,
        currentDirection
    }) => {
    const handleDirectionChange = (direction: SortDirection) => {
        onFilterChange(direction);
    };

    return (
        <div className={styles.filter}>
            <label className={styles.label}>Сортировка по длине заголовка:</label>
            <div className={styles.buttons}>
                <button
                    className={`${styles.button} ${currentDirection === 'asc' ? styles.active : ''}`}
                    onClick={() => handleDirectionChange('asc')}
                >
                    ↑ По возрастанию
                </button>
                <button
                    className={`${styles.button} ${currentDirection === 'desc' ? styles.active : ''}`}
                    onClick={() => handleDirectionChange('desc')}
                >
                    ↓ По убыванию
                </button>
            </div>
        </div>
    );
};
