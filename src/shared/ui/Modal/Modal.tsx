import { FC, ReactNode, useEffect, useCallback, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import styles from "./Modal.module.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    const handleOverlayClick = useCallback(() => {
        onClose();
    }, [onClose]);

    const handleContentClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }, []);

    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

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
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent} onClick={handleContentClick}>
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
