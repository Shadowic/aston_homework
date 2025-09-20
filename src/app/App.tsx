import { FC, useState, useEffect } from "react";
import { ModalProvider } from "../shared/lib/context/ModalContext";
import { RouterProvider } from "./providers/router/RouterProvider";
import { AboutModal } from "./AboutModal";
import "./App.css";

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ModalProvider>
      <RouterProvider />
      <AboutModal />
    </ModalProvider>
  );
};

export default App;
