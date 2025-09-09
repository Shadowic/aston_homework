import { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalBodyProps {
  children: ReactNode;
}

export const ModalBody: FC<ModalBodyProps> = ({ children }) => {
  return <div className={styles.modalBody}>{children}</div>;
};
