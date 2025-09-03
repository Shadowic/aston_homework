import { useModal } from '../shared/lib/context/ModalContext';
import { Modal } from '../shared/ui/Modal';
import { Button } from '../shared/ui/Button';

export const AboutModal = () => {
    const { isModalOpen, closeModal } = useModal();

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="О проекте"
        >
            <p>Это учебный проект на React + TypeScript для отображения списка постов</p>
            <Button
                onClick={closeModal}
                variant="primary"
            >
                Закрыть
            </Button>
        </Modal>
    );
};
