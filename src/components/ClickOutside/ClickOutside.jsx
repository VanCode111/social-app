import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function ClickOutside({ children, clickHandle }) {
  const contentRef = useRef();

  const clickOutSide = (e) => {
    if (contentRef) {
      if (!contentRef.current?.contains(e.target)) {
        clickHandle();
      }
    }
  };
  useEffect(() => {
    document.getElementById("root").addEventListener("click", clickOutSide);
    return () => {
      document
        .getElementById("root")
        .removeEventListener("click", clickOutSide);
    };
  }, []);

  return <div ref={contentRef}>{children}</div>;
}

ClickOutside.propTypes = {
  children: PropTypes.any,
  clickHandle: PropTypes.func.isRequired,
};

export default ClickOutside;
