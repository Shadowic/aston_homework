import type { FC } from "react";
import { useDeletePostMutation } from "../../api/postsApi";
import styles from "./DeletePostButton.module.css";

interface DeletePostButtonProps {
  postId: number;
  postTitle?: string;
  onDelete?: () => void;
  className?: string;
}

export const DeletePostButton: FC<DeletePostButtonProps> = ({
  postId,
  postTitle,
  onDelete,
  className = "",
}) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleDelete = async (): Promise<void> => {
    const message = postTitle
      ? `Are you sure you want to delete "${postTitle}"?`
      : "Are you sure you want to delete this post?";

    if (window.confirm(message)) {
      try {
        await deletePost(postId).unwrap();
        alert("Post deleted successfully!");
        onDelete?.();
      } catch (error) {
        console.error("Failed to delete post:", error);
        alert("Failed to delete post");
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className={`${styles.button} ${className}`}
      title="Delete post"
      type="button"
    >
      {isLoading ? "Deleting..." : "🗑️ Delete"}
    </button>
  );
};
