import { Provider } from "react-redux";
import { store } from "./store/store";
import type { FC, ReactNode } from "react";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
