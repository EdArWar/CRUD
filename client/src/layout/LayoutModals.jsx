import React from "react";
import { useSelector } from "react-redux";
import PostUpdateModal from "../components/modal/postUpdateModal/PostUpdateModal";
import RemovePost from "../components/modal/removePost/RemovePost";
import SignInModal from "../components/modal/signIn/SignInModal";
import { modalSel } from "../store/modal";

const LayoutModals = () => {
  const postUpdateModalState = useSelector(modalSel.postUpdateModalState);
  const signInModalState = useSelector(modalSel.signInModalState);
  const removePostModalState = useSelector(modalSel.removePostModalState);

  return (
    <>
      {postUpdateModalState.show && <PostUpdateModal />}
      {signInModalState && <SignInModal />}
      {removePostModalState && <RemovePost />}
    </>
  );
};

export default LayoutModals;
