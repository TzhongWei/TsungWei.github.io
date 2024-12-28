import React, { useEffect, useRef } from "react";

const Lax = ({ children }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise([spanRef.current]).catch((err) =>
        console.error("MathJax processing error:", err)
      );
    } else {
      console.error(
        "MathJax is not loaded. Ensure MathJax is included in your project."
      );
    }
  }, [children]);

  return <span ref={spanRef}>{`\\(${children}\\)`}</span>; // Wrap in MathJax delimiters
};

export default Lax;
