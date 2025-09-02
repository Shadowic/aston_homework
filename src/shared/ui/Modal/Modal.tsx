import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from "./Modal.module.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {title && <h3 className={styles.modalTitle}>{title}</h3>}
                <button
                    className={styles.modalClose}
                    onClick={onClose}
                    aria-label="Закрыть модальное окно"
                >
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};
