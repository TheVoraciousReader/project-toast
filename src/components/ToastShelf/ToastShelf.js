import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, content }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            content={content}
            variant={variant}
            handleDismiss={() => handleDismiss(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
