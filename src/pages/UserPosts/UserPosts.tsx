import { FC } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { PostCard } from "../../entities/post/ui/PostCard";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";
import { LoadingSpinner } from "../../shared/ui/LoadingSpinner/LoadingSpinner";
import styles from "./UserPosts.module.css";

export const UserPosts: FC = () => {
  const { id } = useParams();
  const { posts, loading, error } = usePosts(id ? Number(id) : undefined);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  if (!id) return <div>User not found</div>;

  return (
    <div className={`${styles.userPosts} container`}>
      <UserTabs userId={Number(id)} />

      <h2 className={styles.title}>Посты пользователя #{id}</h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
