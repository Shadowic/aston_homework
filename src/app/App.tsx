import { FC, useState, useEffect } from 'react';
import { ModalProvider } from '../shared/lib/context/ModalContext';
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostListWithLoading } from "../widgets/PostList/PostList";
import { AboutModal } from "./AboutModal";
import './App.css';

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
            <MainLayout>
                <PostListWithLoading isLoading={isLoading} />
            </MainLayout>
            <AboutModal />
        </ModalProvider>
    );
};

export default App;
