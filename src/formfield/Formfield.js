import React, { Component } from "react";
import "./FormField.css";

const FormField = (props) => {
  return (
    <section className="format-form">
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </section>
  );
};
export default FormField;
