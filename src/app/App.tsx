import { ModalProvider } from '../shared/lib/context/ModalContext';
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { AboutModal } from "./AboutModal";
import './App.css';

function App() {
    return (
        <>
            <ModalProvider>
                <MainLayout>
                    <PostList />
                </MainLayout>
                <AboutModal />
            </ModalProvider>
        </>
    );
}

export default App;
