import { FC } from "react";
import { LoadingSpinner } from "../../ui/LoadingSpinner/LoadingSpinner";
import styles from "./Loading.module.css";

export const withLoading = (Component: FC) => {
    const WithLoading: FC<{ isLoading?: boolean }> = ({
                                                          isLoading,
                                                          ...props
                                                      }) => {
        if (isLoading) {
            return (
                <div className={styles.container}>
                    <LoadingSpinner />
                    <p>Загрузка...</p>
                </div>
            );
        }

        return <Component {...props} />;
    };

    return WithLoading;
};
