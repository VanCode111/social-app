import React from "react";
import "./Galery.scss";

function Galery({ children }) {
  return (
    <div className="galery">
      <img
        src="blob:http://localhost:3000/12cd553a-41ce-418b-8a6c-614cbcc06864"
        alt=""
      />
      <img
        src="blob:http://localhost:3000/12cd553a-41ce-418b-8a6c-614cbcc06864"
        alt=""
      />
    </div>
  );
}

export default Galery;
