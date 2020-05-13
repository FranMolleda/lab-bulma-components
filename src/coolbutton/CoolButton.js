import React, { Component } from "react";
import "./CoolButton.css";

export const CoolButton = (props) => {
  return (
    <>
      <div className="space">
        <button className="button is-rounded my-class is-danger is-small ">
          {props.login}
        </button>
      </div>
      <button className="button is-small is-success">{props.signup}</button>
    </>
  );
};
export const CoolButtonSubmit = (props) => {
  return (
    <div className=" has-text-centered">
      <input
        className="button"
        type="submit"
        value="Submit input"
        submit="Enviar Formulario"
      />
    </div>
  );
};
