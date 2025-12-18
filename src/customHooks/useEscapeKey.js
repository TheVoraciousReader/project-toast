import React from "react";
function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}

export default useEscapeKey;
