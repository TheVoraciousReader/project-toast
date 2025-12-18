import React from "react";
import useEscapeKey from "../../customHooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  useEscapeKey(() => setToastList([]));

  const value = React.useMemo(() => {
    return { toastList, setToastList };
  }, [toastList]);

  return <ToastContext value={value}>{children}</ToastContext>;
}

export default ToastProvider;
