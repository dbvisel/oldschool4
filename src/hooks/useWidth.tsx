"use client";
import { useState, useEffect } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- window width isn't known during SSR; read it post-mount to avoid a hydration mismatch, then keep it in sync via the resize listener below
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

export default useWidth;
