import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function MouseOverHandler({ children, mouseOverHandle, outDelay }) {
  const contentRef = useRef();
  outDelay = outDelay ? outDelay : 400;
  let isOpen = true;
  let interval;
  const mouseOut = () => {
    if (interval) {
      clearTimeout(interval);
    }
    isOpen = true;
    interval = setTimeout(() => {
      if (isOpen) {
        mouseOverHandle();
      }
    }, outDelay);
  };

  const mouseOver = () => {
    isOpen = false;
  };

  useEffect(() => {
    if (contentRef) {
      contentRef.current.addEventListener("mouseout", mouseOut);
      contentRef.current.addEventListener("mouseover", mouseOver);
    }
    return () => {
      contentRef.current.removeEventListener("mouseover", mouseOver);
      contentRef.current.addEventListener("mouseout", mouseOut);
    };
  }, [contentRef]);

  return <div ref={contentRef}>{children}</div>;
}

MouseOverHandler.propTypes = {
  mouseOverHandle: PropTypes.func,
  outDelay: PropTypes.number,
};

export default MouseOverHandler;
