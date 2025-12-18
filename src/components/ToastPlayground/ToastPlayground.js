import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";
import useEscapeKey from "../../customHooks/useEscapeKey";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { toastList, setToastList } = React.useContext(ToastContext);
  useEscapeKey(() => setToastList([]));

  const handleToasts = (e) => {
    e.preventDefault();
    const updatedToasts = [...toastList];

    updatedToasts.push({
      id: crypto.randomUUID(),
      content: message,
      variant: variant,
    });
    setToastList(updatedToasts);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  const handleToastDismiss = (id) => {
    const updatedToasts = toastList.filter((toast) => toast.id !== id);
    setToastList(updatedToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toastList} handleDismiss={handleToastDismiss} />

      <form onSubmit={handleToasts}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variantLabel) => (
                <label htmlFor={`variant-${variantLabel}`} key={variantLabel}>
                  <input
                    id={`variant-${variantLabel}`}
                    type="radio"
                    name="variant"
                    value={variantLabel}
                    checked={variant === variantLabel}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  {variantLabel}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button onClick={handleToasts}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
