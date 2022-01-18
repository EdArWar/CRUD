import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCustom from "../components/modal/ModalCustom";
import SignInModal from "../components/modal/signIn/SignInModal";
import { modalOp, modalSel } from "../store/modal";
import { isNotEmpty } from "../utils/Utils";
import PostUpdateModal from "./../components/modal/postUpdateModal/PostUpdateModal";
import RemovePost from "./../components/modal/removePost/RemovePost";
import UserInfoUpdateModal from "./../components/modal/userUpdate/UserInfoUpdateModal";

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
        {modalState?.signIn && <SignInModal />}
        {modalState?.removePost && <RemovePost />}
        {modalState?.updatePost && <PostUpdateModal />}
        {modalState?.userInfoPanel && <UserInfoUpdateModal />}
      </ModalCustom>
    </>
  );
};

export default LayoutModals;
