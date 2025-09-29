import { useState } from "react";
import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetTodosByUserIdQuery } from "../../entities/todo/api/todosApi";
import { Button } from "../../shared/ui/Button";
import { LoadingSpinner } from "../../shared/ui/LoadingSpinner/LoadingSpinner";
import styles from "./UserTodos.module.css";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";

export const UserTodos: FC = () => {
  const { id } = useParams();
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
  const userId = id ? Number(id) : 0;

  const {
    data: userTodos = [],
    isLoading,
    error,
  } = useGetTodosByUserIdQuery(userId, {
    skip: !userId,
  });

  const filteredTodos = userTodos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  const completedCount = userTodos.filter((todo) => todo.completed).length;
  const activeCount = userTodos.filter((todo) => !todo.completed).length;

  if (isLoading) {
    return (
      <div className={`${styles.userTodos} container`}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.userTodos} container`}>
        <h2 className={styles.title}>Задачи пользователя #{id}</h2>
        <div>Ошибка при загрузке задач</div>
      </div>
    );
  }

  return (
    <div className={`${styles.userTodos} container`}>
      <UserTabs userId={userId} />
      <h2 className={styles.title}>Задачи пользователя #{id}</h2>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{userTodos.length}</div>
          <div className={styles.statLabel}>Всего задач</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{completedCount}</div>
          <div className={styles.statLabel}>Выполнено</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{activeCount}</div>
          <div className={styles.statLabel}>Активные</div>
        </div>
      </div>

      <div className={styles.filters}>
        <Button
          variant={filter === "all" ? "Primary" : "Outline"}
          size="Small"
          onClick={() => setFilter("all")}
          className={styles.filterButton}
        >
          Все
        </Button>
        <Button
          variant={filter === "completed" ? "Primary" : "Outline"}
          size="Small"
          onClick={() => setFilter("completed")}
          className={styles.filterButton}
        >
          Выполненные
        </Button>
        <Button
          variant={filter === "active" ? "Primary" : "Outline"}
          size="Small"
          onClick={() => setFilter("active")}
          className={styles.filterButton}
        >
          Активные
        </Button>
      </div>

      <div className={styles.todosList}>
        {filteredTodos.map((todo) => (
          <div key={todo.id} className={styles.todoCard}>
            <input
              type="checkbox"
              checked={todo.completed}
              className={styles.todoCheckbox}
              readOnly
            />
            <div className={styles.todoContent}>
              <div
                className={`${styles.todoTitle} ${todo.completed ? styles.todoCompleted : ""}`}
              >
                {todo.title}
              </div>
              <span className={`${styles.todoStatus}`}>
                {todo.completed ? "Выполнено" : "В процессе"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
