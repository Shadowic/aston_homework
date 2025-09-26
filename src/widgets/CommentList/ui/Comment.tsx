import type { FC } from 'react';
import styles from './Comment.module.css';

interface CommentProps {
    comment: {
        id: number;
        author: string;
        text: string;
        date: string;
    };
}

export const Comment: FC<CommentProps> = ({ comment }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentHeader}>
                <span className={styles.author}>{comment.author}</span>
                <span className={styles.date}>{comment.date}</span>
            </div>
            <p className={styles.text}>{comment.text}</p>
        </div>
    );
};
