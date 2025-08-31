import { useState } from 'react';
import { MainLayout } from "./shared/layouts/MainLayout";
import { PostList } from "./widgets/PostList/PostList";
import { Modal } from './shared/ui/Modal';
import { Button } from './shared/ui/Button';
import './App.css';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <MainLayout onAboutClick={() => setIsModalOpen(true)}>
                <PostList />
            </MainLayout>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="О проекте"
            >
                <p>Это учебный проект на React + TypeScript для отображения списка постов</p>
                <Button
                    onClick={() => setIsModalOpen(false)}
                    variant="primary"
                >
                    Закрыть
                </Button>
            </Modal>
        </>
    );
}

export default App;
