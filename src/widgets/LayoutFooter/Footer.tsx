import { FC } from 'react';
import styles from "./Footer.module.css"

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.title}>Футер</p>
        </footer>
    );
};

export default Footer;
