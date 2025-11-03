import { useEffect } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "@entities/user/api/usersApi";
import { useDispatch } from "react-redux";
import { usersReceived } from "@entities/user/model/slice/userSlice";
import { ItemList } from "@shared/ui/ItemList";
import styles from "./UserList.module.css";

export const UserList: FC = () => {
    const dispatch = useDispatch();
    const { data: users, error, isLoading, isFetching } = useGetUsersQuery();

    useEffect(() => {
        if (users) {
            dispatch(usersReceived(users));
        }
    }, [users, dispatch]);

    if (error) {
        return (
            <div className="container">
                <h2 className={styles.title}>Список пользователей</h2>
                <div>Ошибка при загрузке пользователей: {JSON.stringify(error)}</div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className={styles.title}>Список пользователей</h2>
            {isFetching && <div>Обновление...</div>}

            <ItemList
                items={users || []}
                loading={isLoading}
                emptyMessage="Пользователи не найдены"
                listClassName={styles.users}
                itemClassName={styles.userCard}
                renderItem={(user) => (
                    <Link to={`/users/${user.id}/posts`}>
                        <h3>{user.name}</h3>
                        <p>@{user.username}</p>
                        <p>{user.email}</p>
                        <div className={styles.userLinks}>
                            <span>Posts</span>
                            <span>Albums</span>
                            <span>Todos</span>
                        </div>
                    </Link>
                )}
            />
        </div>
    );
};
