import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../src/navbar/Navbar";
import FormField from "../src/formfield/Formfield.js";
import SignUp from "../src/signup/Signup.js";

const App = () => {
  return (
    <>
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        //Estas son las props que le pasamos en FormatField.js
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      /> */}
      <SignUp />
    </>
  );
};

export default App;
