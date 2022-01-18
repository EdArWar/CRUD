import React from "react";
import { useDispatch } from "react-redux";
import SignIn from "../../signIn/SignIn";

const SignInModal = () => {
  const dispatch = useDispatch();

  return <SignIn />;
};

export default SignInModal;
