import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { globalOp, globalSel } from "../../store/global";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import "./SignIn.css";

const SignIn = () => {
  const dispatch = useDispatch();

  const isRegistered = useSelector(globalSel.isRegistered);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "2%",
        }}
      >
        <Button onClick={() => dispatch(globalOp.handleRegisteredState(false))}>
          Login
        </Button>
        <Button onClick={() => dispatch(globalOp.handleRegisteredState(true))}>
          Registration
        </Button>
      </div>
      {!isRegistered ? <Login /> : <Registration />}
    </>
  );
};

export default SignIn;
