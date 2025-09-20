import { FC, ReactNode } from 'react';
import styles from "./Modal.module.css";

interface ModalFooterProps {
    children: ReactNode;
}

export const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
    return (
        <footer className={styles.modalFooter}>
            {children}
        </footer>
    );
};
