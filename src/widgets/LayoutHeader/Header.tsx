import { FC, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useModal } from "../../shared/lib/context/ModalContext";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { Button } from "../../shared/ui/Button";
import styles from "./Header.module.css";

export const Header: FC = () => {
  const { openModal } = useModal();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutClick = () => {
    openModal();
  };

  const isActiveRoute = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h1 className={styles.title}>Post App</h1>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Все посты
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Пользователи
          </NavLink>
        </nav>

        <div className={styles.controls}>
          <ThemeSwitcher />
          <Button
            onClick={handleAboutClick}
            variant="Outline"
            size="Small"
            className={styles.aboutBtn}
          >
            О проекте
          </Button>

          <button
            className={styles.burger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
