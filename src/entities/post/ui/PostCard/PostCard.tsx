import { FC } from "react";
import { useGetCommentsByPostIdQuery } from "../../../../entities/comment/api/commentsApi";
import { CommentList } from "../../../../widgets/CommentList/ui/CommentList";
import styles from "./PostCard.module.css";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const { data: comments = [], isLoading: commentsLoading } =
    useGetCommentsByPostIdQuery(post.id);

  const formattedComments = comments.map((comment) => ({
    id: comment.id,
    author: comment.name,
    text: comment.body,
    date: comment.email,
  }));

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.text}>{post.body}</p>
      <small className={styles.caption}>
        User ID: {post.userId} | Post ID: {post.id}
      </small>

      <CommentList
        comments={formattedComments}
        initialVisible={3}
        showToggleButton={true}
        defaultVisible={false}
        isLoading={commentsLoading}
        postId={post.id}
      />
    </div>
  );
};
