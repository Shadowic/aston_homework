import { FC, Fragment } from 'react';
import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../shared/mocks/posts";
import { withLoading } from '../../shared/lib/hoc/withLoading';
import styles from './PostList.module.css';

export const PostList: FC = () => {
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

export const PostListWithLoading = withLoading(PostList);
