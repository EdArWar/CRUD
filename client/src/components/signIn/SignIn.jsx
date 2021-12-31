import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import "./SignIn.css";

const SignIn = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "2%",
        }}
      >
        <Button onClick={() => setState(true)}>Login</Button>
        <Button onClick={() => setState(false)}>Registration</Button>
      </div>
      {state ? <Login /> : <Registration />}
    </>
  );
};

export default SignIn;
