import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const ACCEPTED_VARIANTS = Object.keys(ICONS_BY_VARIANT);

function Toast({ content, variant, handleDismiss }) {
  if (!ACCEPTED_VARIANTS.includes(variant)) {
    throw new Error(
      `Expected variants ${ACCEPTED_VARIANTS} but got ${variant}`
    );
  }
  const ToastTag = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {content}
      </p>
      <button
        className={styles.closeButton}
        onClick={handleDismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
