import React from "react";
import { useDispatch } from "react-redux";
import { modalOp } from "../../../store/modal";
import SignIn from "../../signIn/SignIn";
import ModalCustom from "../ModalCustom";

const SignInModal = () => {
  const dispatch = useDispatch();

  return (
    <ModalCustom
      show={true}
      onHide={() => {
        dispatch(modalOp.handleSignInState(false));
      }}
      title="Sign In"
    >
      <SignIn />
    </ModalCustom>
  );
};

export default SignInModal;
