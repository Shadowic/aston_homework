import type { FC } from "react";
import { ModalProvider } from "../shared/lib/context/ModalContext";
import { StoreProvider } from "./providers/StoreProvider";
import { RouterProvider } from "./providers/router/RouterProvider";
import { AboutModal } from "./AboutModal";
import { LoadingProvider } from "@shared/lib/loading/LoadingProvider";
import "./App.css";

export const App: FC = () => {
  return (
    <StoreProvider>
      <LoadingProvider initialLoading={true}>
        <ModalProvider>
          <RouterProvider />
          <AboutModal />
        </ModalProvider>
      </LoadingProvider>
    </StoreProvider>
  );
};

export default App;
