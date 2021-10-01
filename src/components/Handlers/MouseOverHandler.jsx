import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function MouseOverHandler({ children, mouseOverHandle }) {
  const contentRef = useRef();

  const mouseOver = () => {
    mouseOverHandle();
  };

  useEffect(() => {
    if (contentRef) {
      contentRef.current.addEventListener("mouseover", mouseOver);
    }
    return () => {
      contentRef.current.removeEventListener("mouseover", mouseOver);
    };
  }, [contentRef]);

  return (
    <div style={{ padding: 10 }} ref={contentRef}>
      {children}
    </div>
  );
}

MouseOverHandler.propTypes = {
  mouseOverHandle: PropTypes.func,
};

export default MouseOverHandler;
