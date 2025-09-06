import { FC, Fragment, useState, useMemo, useCallback } from 'react';
import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../shared/mocks/posts";
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import styles from './PostList.module.css';

type SortDirection = 'asc' | 'desc';

export const PostList: FC = () => {
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    const filteredPosts = useMemo(() => {
        return filterByLength(mockPosts, sortDirection);
    }, [mockPosts, sortDirection]);

    const handleFilterChange = useCallback((direction: SortDirection) => {
        setSortDirection(direction);
    }, []);

    return (
        <Fragment>
            <div className="container">
                <h2 className={styles.title}>Список постов</h2>

                <PostLengthFilter
                    onFilterChange={handleFilterChange}
                    currentDirection={sortDirection}
                />

                <div className={styles.posts}>
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export const PostListWithLoading = withLoading(PostList);
