import { createContext, useContext, useState, FC, ReactNode } from 'react';

interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('err');
    }
    return context;
};
