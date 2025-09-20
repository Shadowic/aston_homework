import { FC } from "react";
import { useDeletePostMutation } from "../../api/postsApi";
import styles from "./DeletePostButton.module.css";

interface DeletePostButtonProps {
  postId: number;
  postTitle?: string;
}

export const DeletePostButton: FC<DeletePostButtonProps> = ({
  postId,
  postTitle,
}) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleDelete = async () => {
    const message = postTitle
      ? `Are you sure you want to delete "${postTitle}"?`
      : "Are you sure you want to delete this post?";

    if (window.confirm(message)) {
      try {
        await deletePost(postId).unwrap();
        alert("Post deleted successfully!");
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
      className={styles.button}
      title="Delete post"
    >
      {isLoading ? "Deleting..." : "🗑️ Delete"}
    </button>
  );
};
