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
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small>
        User ID: {post.userId} | Post ID: {post.id}
      </small>
    </div>
  );
};
