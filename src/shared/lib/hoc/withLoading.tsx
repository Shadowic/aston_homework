import { FC } from "react";
import { useLoading } from "../context/LoadingContext";
import {LoadingSpinner} from "../../ui/LoadingSpinner/LoadingSpinner";
import styles from "./Loading.module.css";

export const withLoading = (Component: FC) => {
  const WithLoading: FC = (props) => {
    const { isLoading } = useLoading();

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
