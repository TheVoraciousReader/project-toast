import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const value = React.useMemo(() => {
    return { toastList, setToastList };
  }, [toastList]);

  return <ToastContext value={value}>{children}</ToastContext>;
}

export default ToastProvider;
