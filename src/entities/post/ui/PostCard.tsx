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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        color: "#fafafa",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small
        style={{
          marginTop: "auto",
        }}
      >
        User ID: {post.userId} | Post ID: {post.id}
      </small>
    </div>
  );
};
