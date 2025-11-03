import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPostsByUserIdQuery } from "@entities/post/api/postsApi";
import { useGetUserByIdQuery } from "@entities/user/api/usersApi";
import { PostCard } from "@/entities/post/ui";
import { CreatePostForm } from "@/entities/post/ui/CreatePostForm";
import { DeletePostButton } from "@/entities/post/ui/DeletePostButton";
import { UserTabs } from "@widgets/UserTabs/UserTabs";
import { LoadingSpinner } from "@shared/ui/LoadingSpinner/LoadingSpinner";
import { ItemList } from "@shared/ui/ItemList";
import styles from "./UserPosts.module.css";

export const UserPosts: FC = () => {
  const { id } = useParams();
  const userId = id ? Number(id) : 0;

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useGetUserByIdQuery(userId, {
    skip: !userId,
  });

  const {
    data: posts = [],
    isLoading: postsLoading,
    error: postsError,
    isFetching,
  } = useGetPostsByUserIdQuery(userId, {
    skip: !userId,
  });

  const isLoading = userLoading || postsLoading;
  const error = userError || postsError;

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!id) return <div>Пользователь не найден</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div className={`${styles.userPosts} container`}>
      <UserTabs userId={userId} />

      <h2 className={styles.title}>
        Посты пользователя: {user.name} (@{user.username})
      </h2>

      {isFetching && <div>Обновление данных...</div>}

      <div>
        <p>Найдено постов: {posts.length}</p>
        <p>Email: {user.email}</p>
      </div>

      <div>
        <h3>Создать новый пост</h3>
        <CreatePostForm userId={userId} />
      </div>

        <ItemList
            items={posts}
            loading={false}
            emptyMessage="У пользователя нет постов"
            listClassName={styles.posts}
            renderItem={(post) => (
                <div>
                    <PostCard post={post} />
                    <DeletePostButton postId={post.id} postTitle={post.title} />
                </div>
            )}
        />
    </div>
  );
};
