import React from "react";
import "bulma/css/bulma.css";
import SignUp from "../src/signup/Signup.js";
import { Message } from "./message/Messaje.js";
const App = () => {
  return (
    <>
      <SignUp />
      <Message
        isInfo
        title="Hello World"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>."
      ></Message>
    </>
  );
};

export default App;
