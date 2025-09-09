import { FC } from "react";
import { ModalProvider } from "../shared/lib/context/ModalContext";
import { RouterProvider } from "./providers/router/RouterProvider";
import { AboutModal } from "./AboutModal";
import "./App.css";

export const App: FC = () => {
    return (
        <ModalProvider>
            <RouterProvider />
            <AboutModal />
        </ModalProvider>
    );
};

export default App;
