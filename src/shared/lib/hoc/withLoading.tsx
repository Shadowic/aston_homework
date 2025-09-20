import { FC } from "react";

export const withLoading = (Component: FC) => {
  const WithLoading: FC<{ isLoading?: boolean }> = ({
    isLoading,
    ...props
  }) => {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }

    return <Component {...props} />;
  };

  return WithLoading;
};
