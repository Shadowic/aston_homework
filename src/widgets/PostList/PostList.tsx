import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../shared/config/posts";

export const PostList = () => {
  return (
    <div className="container">
      <h2 style={{ color: "#fafafa" }}>Список постов</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
