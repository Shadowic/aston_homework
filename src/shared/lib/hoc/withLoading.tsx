import type { FC, ComponentType } from "react";
import { LoadingSpinner } from "../../ui/LoadingSpinner/LoadingSpinner";
import styles from "./Loading.module.css";

interface WithLoadingOptions {
  message?: string;
}

export function withLoading<P extends object>(
  Component: ComponentType<P>,
  options: WithLoadingOptions = {},
): FC<P & { isLoading?: boolean }> {
  const { message = "Загрузка..." } = options;

  const WithLoadingComponent: FC<P & { isLoading?: boolean }> = ({
    isLoading,
    ...props
  }) => {
    if (isLoading) {
      return (
        <div className={styles.container}>
          <LoadingSpinner />
          <p>{message}</p>
        </div>
      );
    }

    return <Component {...(props as P)} />;
  };

  WithLoadingComponent.displayName = `WithLoading(${Component.displayName || Component.name})`;

  return WithLoadingComponent;
}
