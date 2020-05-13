import React from "react";
import "./Message.css";

export const Message = (props) => {
  return (
    <article className="message is-info size">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.text}</div>
    </article>
  );
};
