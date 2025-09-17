import { FC } from "react";
import { LoadingProvider } from '../shared/lib/context/LoadingContext';
import { ModalProvider } from "../shared/lib/context/ModalContext";
import { RouterProvider } from "./providers/router/RouterProvider";
import { AboutModal } from "./AboutModal";
import "./App.css";

export const App: FC = () => {
  return (
    <LoadingProvider>
      <ModalProvider>
        <RouterProvider />
        <AboutModal />
      </ModalProvider>
    </LoadingProvider>
  );
};

export default App;
