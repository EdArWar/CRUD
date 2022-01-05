import React from "react";
import { useSelector } from "react-redux";
import PostUpdateModal from "../modal/postUpdateModal/PostUpdateModal";
import { modalSel } from "../store/modal";

const LayoutModals = () => {
  const postUpdateModal = useSelector(modalSel.postUpdateModal);

  return (
    <div>{postUpdateModal && <PostUpdateModal show={postUpdateModal} />}</div>
  );
};

export default LayoutModals;
