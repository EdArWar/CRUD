import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalOp, modalSel } from "../../../store/modal";
import Tabs from "../../tabs/Tabs";
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
      closeButton={false}
    >
      <Tabs />
    </ModalCustom>
  );
};

export default SignInModal;
