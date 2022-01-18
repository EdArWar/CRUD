import React from "react";
import { useDispatch } from "react-redux";
import { modalOp } from "../../../store/modal";
import ModalCustom from "../ModalCustom";

const UserInfoUpdateModal = () => {
  const dispatch = useDispatch();

  return (
    <ModalCustom
      show={true}
      onHide={() => {
        dispatch(modalOp.handleUserInfoModalState(false));
      }}
      title="Sign In"
    >
      UserUpdate
    </ModalCustom>
  );
};

export default UserInfoUpdateModal;
