import React from "react";
import useEscapeKey from "../../customHooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  useEscapeKey(() => setToastList([]));

  const value = React.useMemo(() => {
    const createToasts = (message, variant) => {
      const updatedToasts = [...toastList];

      updatedToasts.push({
        id: crypto.randomUUID(),
        content: message,
        variant: variant,
      });
      setToastList(updatedToasts);
    };

    const dismissToasts = (id) => {
      const updatedToasts = toastList.filter((toast) => toast.id !== id);
      setToastList(updatedToasts);
    };

    return { toastList, createToasts, dismissToasts };
  }, [toastList]);

  return <ToastContext value={value}>{children}</ToastContext>;
}

export default ToastProvider;
