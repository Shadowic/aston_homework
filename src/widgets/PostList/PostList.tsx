import { Fragment } from 'react';
import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../shared/mocks/posts";
import styles from './PostList.module.css';

export const PostList = () => {
  return (
      <Fragment>
        <div className="container">
          <h2 className={styles.title}>Список постов</h2>
          <div className={styles.posts}>
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Fragment>
  );
};
