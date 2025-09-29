import { useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { LoadingContext } from "./LoadingContext";
import { GlobalLoader } from "./GlobalLoader";

interface LoadingProviderProps {
  children: ReactNode;
  initialLoading?: boolean;
}

export const LoadingProvider: FC<LoadingProviderProps> = ({
  children,
  initialLoading = true,
}) => {
  const [loadingCount, setLoadingCount] = useState(initialLoading ? 1 : 0);

  const startLoading = () => setLoadingCount((prev) => prev + 1);
  const stopLoading = () => setLoadingCount((prev) => Math.max(0, prev - 1));

  const isLoading = loadingCount > 0;

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        stopLoading();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [initialLoading]);

  const value = {
    isLoading,
    startLoading,
    stopLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      <GlobalLoader isLoading={isLoading} />
    </LoadingContext.Provider>
  );
};
