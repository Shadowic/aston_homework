import type { FC } from "react";
import { LoadingSpinner } from "../../ui/LoadingSpinner/LoadingSpinner";
import styles from "./GlobalLoader.module.css";

interface GlobalLoaderProps {
    isLoading: boolean;
}

export const GlobalLoader: FC<GlobalLoaderProps> = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <LoadingSpinner />
                <p>Загрузка...</p>
            </div>
        </div>
    );
};
