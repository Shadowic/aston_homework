import { Fragment } from 'react';
import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../shared/config/posts";

export const PostList = () => {
  return (
      <Fragment>
        <div className="container">
          <h2>Список постов</h2>
          <div className="posts-list">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Fragment>
  );
};
