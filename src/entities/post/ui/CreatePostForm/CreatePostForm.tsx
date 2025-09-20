import { FC, useState } from "react";
import { useCreatePostMutation } from "../../api/postsApi";
import styles from "./CreatePostForm.module.css";

interface CreatePostFormProps {
  userId?: number;
}

export const CreatePostForm: FC<CreatePostFormProps> = ({ userId = 1 }) => {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    try {
      await createPost({
        title: title.trim(),
        body: body.trim(),
        userId: userId,
      }).unwrap();

      setTitle("");
      setBody("");
      alert("Post created successfully!");
    } catch (error) {
      console.error("Failed to create post:", error);
      alert("Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Create New Post</h3>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        disabled={isLoading}
        required
      />

      <textarea
        placeholder="Post content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className={styles.textarea}
        disabled={isLoading}
        rows={4}
        required
      />

      <button type="submit" disabled={isLoading} className={styles.button}>
        {isLoading ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
};
