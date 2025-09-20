import { FC } from "react";
import { Link } from "react-router-dom";
import { mockUsers } from "../../shared/mocks/users";
import styles from "./UserList.module.css";

export const UserList: FC = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>Список пользователей</h2>
      <div className={styles.users}>
        {mockUsers.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}/posts`}
            className={styles.userCard}
          >
            <h3>{user.name}</h3>
            <p>@{user.username}</p>
            <p>{user.email}</p>
            <div className={styles.userLinks}>
              <span>Posts</span>
              <span>Albums</span>
              <span>Todos</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
