import { FC } from 'react';
import { ModalProvider } from '../shared/lib/context/ModalContext';
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { AboutModal } from "./AboutModal";
import './App.css';

export const App: FC = () => {
    return (
        <ModalProvider>
            <MainLayout>
                <PostList />
            </MainLayout>
            <AboutModal />
        </ModalProvider>
    );
};

export default App;
