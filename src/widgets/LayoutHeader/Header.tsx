import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button';
import styles from "./Header.module.css"

interface HeaderProps {
  onAboutClick: () => void;
}

const Header = ({ onAboutClick }: HeaderProps) => {
  return (
      <header className={styles.header}>
        <h1 className={styles.title}>Хедер</h1>
        <div className={styles.btns}>
          <ThemeSwitcher />
          <Button
              onClick={onAboutClick}
              variant="Outline"
              size="Small"
          >
            О проекте
          </Button>
        </div>
      </header>
  )};

export default Header;
