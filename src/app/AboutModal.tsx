import { FC } from "react";
import { useModal } from "../shared/lib/context/ModalContext";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../shared/ui/Modal";

export const AboutModal: FC = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>
        <h2>Хедер модала</h2>
      </ModalHeader>
      <ModalBody>
        <p>Бади модала</p>
      </ModalBody>
      <ModalFooter>
        <p>Футер модала</p>
      </ModalFooter>
    </Modal>
  );
};
