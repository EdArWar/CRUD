import React from "react";
import { useSelector } from "react-redux";
import PostUpdateModal from "../components/modal/postUpdateModal/PostUpdateModal";
import SignInModal from "../components/modal/signIn/SignInModal";
import { modalSel } from "../store/modal";

const LayoutModals = () => {
  const postUpdateModalState = useSelector(modalSel.postUpdateModalState);
  const signInModalState = useSelector(modalSel.signInModalState);

  return (
    <>
      <PostUpdateModal show={postUpdateModalState.show} />
      <SignInModal show={signInModalState} />
    </>
  );
};

export default LayoutModals;
