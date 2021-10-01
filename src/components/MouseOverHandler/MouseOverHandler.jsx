import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function MouseOverHandler({ children, mouseOverHandle, outDelay }) {
  const contentRef = useRef();
  let currentElement;
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
      currentElement = contentRef.current;
      currentElement.addEventListener("mouseout", mouseOut);
      currentElement.addEventListener("mouseover", mouseOver);
    }
    return () => {
      if (interval) {
        clearTimeout(interval);
      }
      currentElement.removeEventListener("mouseout", mouseOut);
      currentElement.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  return <div ref={contentRef}>{children}</div>;
}

MouseOverHandler.propTypes = {
  mouseOverHandle: PropTypes.func,
  outDelay: PropTypes.number,
};

export default MouseOverHandler;
