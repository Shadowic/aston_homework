import { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalHeaderProps {
  children: ReactNode;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
  return <header className={styles.modalHeader}>{children}</header>;
};
