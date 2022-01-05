import React from "react";
import { useSelector } from "react-redux";
import PostUpdateModal from "../modal/postUpdateModal/PostUpdateModal";
import { modalSel } from "../store/modal";

const LayoutModals = () => {
  const postUpdateModalState = useSelector(modalSel.postUpdateModalState);

  return (
    <div>
      {postUpdateModalState.show && (
        <PostUpdateModal show={postUpdateModalState.show} />
      )}
    </div>
  );
};

export default LayoutModals;
