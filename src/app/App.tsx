import { FC } from "react";
import { ModalProvider } from "../shared/lib/context/ModalContext";
import { StoreProvider } from "./providers/StoreProvider";
import { RouterProvider } from "./providers/router/RouterProvider";
import { AboutModal } from "./AboutModal";
import "./App.css";

export const App: FC = () => {
    return (
        <StoreProvider>
            <ModalProvider>
                <RouterProvider />
                <AboutModal />
            </ModalProvider>
        </StoreProvider>
    );
};

export default App;
