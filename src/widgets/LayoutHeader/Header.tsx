import { FC } from 'react';
import { useModal } from '../../shared/lib/context/ModalContext';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button';
import styles from "./Header.module.css";

export const Header: FC = () => {
    const { openModal } = useModal();

    const handleAboutClick = () => {
        openModal();
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Хедер</h1>
            <div className={styles.btns}>
                <ThemeSwitcher />
                <Button
                    onClick={handleAboutClick}
                    variant="Outline"
                    size="Small"
                >
                    О проекте
                </Button>
            </div>
        </header>
    );
};

export default Header;
