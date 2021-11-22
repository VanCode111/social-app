import React, { SyntheticEvent } from "react";
import "./ConversationFilter.scss";
import { useRef, useEffect } from "react";

interface IConversationFilter {
  onChange: (text: string) => void;
  className?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const ConversationFilter: React.FC<IConversationFilter> = ({
  onChange,
  className,
  leftIcon,
  rightIcon,
  placeholder,
}) => {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const inputBoxRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    const clickHandle = (e: MouseEvent) => {
      if (!inputBoxRef.current) {
        return;
      }
      inputBoxRef.current.focus();
    };
    inputRef.current.addEventListener("click", clickHandle);
    return () => {
      if (!inputRef.current) {
        return;
      }
      inputRef.current.removeEventListener("click", clickHandle);
    };
  }, [inputRef]);

  return (
    <div className="conversationFilter" ref={inputRef}>
      <div className="conversationFilter__left-label">{leftIcon}</div>
      <div className="conversationFilter__right-label">{rightIcon}</div>
      <input
        ref={inputBoxRef}
        placeholder={placeholder ? placeholder : ""}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className={"conversation-filter" + " " + (className ? className : "")}
      />
    </div>
  );
};

export default ConversationFilter;
