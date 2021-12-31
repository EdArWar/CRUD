import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalOp, modalSel } from "../../../store/modal";
import SignIn from "../../signIn/SignIn";
import ModalCustom from "../ModalCustom";

const SignInModal = () => {
  const signInModal = useSelector(modalSel.signInModal);

  const dispatch = useDispatch();
  return (
    <ModalCustom
      show={signInModal}
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
