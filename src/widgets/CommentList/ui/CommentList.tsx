import { FC, useState, useCallback } from "react";
import { Button } from "../../../shared/ui/Button";
import styles from "./CommentList.module.css";

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}

interface CommentListProps {
  comments: Comment[];
  initialVisible?: number;
  showToggleButton?: boolean;
  defaultVisible?: boolean;
}

export const CommentList: FC<CommentListProps> = ({
  comments,
  initialVisible = 3,
  showToggleButton = true,
  defaultVisible = false,
}) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const toggleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const handleShowAll = useCallback(() => {
    setShowAll(true);
    setVisibleCount(comments.length);
  }, [comments.length]);

  const handleCollapse = useCallback(() => {
    setShowAll(false);
    setVisibleCount(initialVisible);
  }, [initialVisible]);

  const handleShowMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 3, comments.length));
    if (visibleCount + 3 >= comments.length) {
      setShowAll(true);
    }
  }, [comments.length, visibleCount]);

  const visibleComments = comments.slice(0, visibleCount);
  const hasMoreComments = comments.length > visibleCount;
  const hasComments = comments.length > 0;
  const canCollapse = showAll || visibleCount > initialVisible;

  return (
    <div className={styles.commentList}>
      {showToggleButton && (
        <Button
          variant="Outline"
          size="Small"
          onClick={toggleVisibility}
          className={styles.toggleBtn}
        >
          {isVisible ? "Скрыть комментарии" : "Показать комментарии"}(
          {comments.length})
        </Button>
      )}

      {isVisible && (
        <>
          {hasComments ? (
            <>
              <div className={styles.comments}>
                {visibleComments.map((comment) => (
                  <div key={comment.id} className={styles.comment}>
                    <div className={styles.commentHeader}>
                      <span className={styles.author}>{comment.author}</span>
                      <span className={styles.date}>{comment.date}</span>
                    </div>
                    <p className={styles.text}>{comment.text}</p>
                  </div>
                ))}
              </div>

              <div className={styles.controls}>
                {hasMoreComments && !showAll && (
                  <>
                    <Button
                      variant="Outline"
                      size="Small"
                      onClick={handleShowMore}
                      className={styles.showMoreBtn}
                    >
                      Показать еще
                    </Button>
                    <Button
                      variant="Primary"
                      size="Small"
                      onClick={handleShowAll}
                      className={styles.showAllBtn}
                    >
                      Показать все
                    </Button>
                  </>
                )}

                {canCollapse && (
                  <Button
                    variant="Secondary"
                    size="Small"
                    onClick={handleCollapse}
                    className={styles.collapseBtn}
                  >
                    Свернуть
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className={styles.empty}>Комментариев пока нет</div>
          )}
        </>
      )}
    </div>
  );
};
