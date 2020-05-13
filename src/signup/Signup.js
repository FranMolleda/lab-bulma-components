import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/Formfield";
import { CoolButtonSubmit } from "../coolbutton/CoolButton";

const SignUp = (props) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          //Estas son las props que le pasamos en FormatField.js
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" />
        <CoolButtonSubmit>{props.submit}</CoolButtonSubmit>
      </div>
    </>
  );
};

export default SignUp;
