import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCustom from "../components/modal/ModalCustom";
import UpdatePostComponent from "../components/postUpdate/UpdatePostComponent";
import { modalOp, modalSel } from "../store/modal";
import { isNotEmpty } from "../utils/Utils";
import RemovePost from "./../components/modal/removePost/RemovePost";
import UserInfoUpdateModal from "./../components/modal/userUpdate/UserInfoUpdateModal";
import SignIn from "./../components/signIn/SignIn";

const LayoutModals = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(modalSel.modalState);

  return (
    <>
      <ModalCustom
        show={isNotEmpty(modalState)}
        onHide={() => {
          dispatch(modalOp.handleSetModalState(null));
        }}
        title={modalState?.title}
      >
        {modalState?.signIn && <SignIn />}
        {modalState?.removePost && <RemovePost />}
        {modalState?.updatePost && <UpdatePostComponent />}
        {modalState?.userInfoPanel && <UserInfoUpdateModal />}
      </ModalCustom>
    </>
  );
};

export default LayoutModals;
