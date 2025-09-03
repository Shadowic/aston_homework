import { FC } from 'react';
import { useModal } from '../shared/lib/context/ModalContext';
import { Modal } from '../shared/ui/Modal';
import { Button } from '../shared/ui/Button';

export const AboutModal: FC = () => {
    const { isModalOpen, closeModal } = useModal();

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="О проекте"
        >
            <p>Это учебный проект на React + TypeScript для отображения списка постов</p>
            <Button
                onClick={handleClose}
                variant="Primary"
            >
                Закрыть
            </Button>
        </Modal>
    );
};
