import type { FC } from "react";
import * as React from "react";
import styles from "./ItemList.module.css";

interface Identifiable {
  id: string | number;
}

export interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
}

function hasId<T>(item: T): item is T & Identifiable {
  return item != null && typeof item === "object" && "id" in item;
}

export const ItemList = <T,>({
  items,
  renderItem,
  keyExtractor,
  loading = false,
  emptyMessage = "No items found",
  className = "",
  listClassName = "",
  itemClassName = "",
}: ItemListProps<T>) => {
  const getKey = (item: T, index: number): string | number => {
    if (keyExtractor) {
      return keyExtractor(item, index);
    }

    if (hasId(item)) {
      return item.id;
    }

    return index;
  };

  if (loading) {
    return (
      <div className={`${styles.container} ${className}`}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className={`${styles.container} ${className}`}>
        <div className={styles.empty}>{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.list} ${listClassName}`}>
        {items.map((item, index) => (
          <div
            key={getKey(item, index)}
            className={`${styles.item} ${itemClassName}`}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ItemListLoading: FC = () => (
  <div className={styles.loading}>Loading items...</div>
);

export const ItemListEmpty: FC<{ message?: string }> = ({
  message = "No items found",
}) => <div className={styles.empty}>{message}</div>;
