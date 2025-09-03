import { useModal } from '../../shared/lib/context/ModalContext';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button';
import styles from "./Header.module.css";

const Header = () => {
    const { openModal } = useModal();

    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Хедер</h1>
        <div className={styles.btns}>
          <ThemeSwitcher />
          <Button
              onClick={openModal}
              variant="Outline"
              size="Small"
          >
            О проекте
          </Button>
        </div>
      </header>
    )};

export default Header;
