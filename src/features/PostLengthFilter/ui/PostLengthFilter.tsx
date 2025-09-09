import { FC } from "react";
import { Button } from "../../../shared/ui/Button";
import styles from "./PostLengthFilter.module.css";

export type SortDirection = "asc" | "desc";

interface PostLengthFilterProps {
  onFilterChange: (direction: SortDirection) => void;
  currentDirection: SortDirection;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({
  onFilterChange,
  currentDirection,
}) => {
  const handleDirectionChange = (direction: SortDirection) => {
    onFilterChange(direction);
  };

  return (
    <div className={styles.filter}>
      <label className={styles.label}>Сортировка по длине заголовка:</label>
      <div className={styles.buttons}>
        <Button
          variant={currentDirection === "asc" ? "Primary" : "Outline"}
          size="Small"
          onClick={() => handleDirectionChange("asc")}
          className={styles.button}
        >
          ↑ По возрастанию
        </Button>
        <Button
          variant={currentDirection === "desc" ? "Primary" : "Outline"}
          size="Small"
          onClick={() => handleDirectionChange("desc")}
          className={styles.button}
        >
          ↓ По убыванию
        </Button>
      </div>
    </div>
  );
};
