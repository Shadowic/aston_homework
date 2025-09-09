import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserTabs.module.css";

interface UserTabsProps {
  userId: number;
}

export const UserTabs: FC<UserTabsProps> = ({ userId }) => {
  return (
    <nav className={styles.tabs}>
      <NavLink
        to={`/users/${userId}/posts`}
        className={({ isActive }) =>
          `${styles.tab} ${isActive ? styles.active : ""}`
        }
      >
        Posts
      </NavLink>
      <NavLink
        to={`/users/${userId}/albums`}
        className={({ isActive }) =>
          `${styles.tab} ${isActive ? styles.active : ""}`
        }
      >
        Albums
      </NavLink>
      <NavLink
        to={`/users/${userId}/todos`}
        className={({ isActive }) =>
          `${styles.tab} ${isActive ? styles.active : ""}`
        }
      >
        Todos
      </NavLink>
    </nav>
  );
};
