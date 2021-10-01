import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function MouseOverHandler({ children, mouseOverHandle }) {
  const contentRef = useRef();
  let currentElement;
  const mouseOver = () => {
    mouseOverHandle();
  };

  useEffect(() => {
    if (contentRef) {
      currentElement = contentRef.current;
      currentElement.addEventListener("mouseover", mouseOver);
    }
  }, []);

  useEffect(() => {
    return () => {
      currentElement.removeEventListener("mouseover", mouseOver);
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
