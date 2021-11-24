import React from "react";
import "./Button.scss";
import SyncLoader from "react-spinners/MoonLoader";

function Button({ className, onClick, text, loading }) {
  return (
    <button
      onClick={onClick ? onClick : null}
      className={
        "button " +
        (className ? className : "") +
        " " +
        (loading ? "loading" : "")
      }
    >
      {loading ? (
        <div className="btn-loader" style={{ zIndex: 10 }}>
          <SyncLoader
            color="#00acff"
            loading={true}
            size={20}
            style={{ zIndex: 10 }}
          />
        </div>
      ) : (
        text
      )}
    </button>
  );
}

export default Button;
