import  styles from "./PostCard.module.css"

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.text}>{post.body}</p>
      <small className={styles.caption}>
        User ID: {post.userId} | Post ID: {post.id}
      </small>
    </div>
  );
};
