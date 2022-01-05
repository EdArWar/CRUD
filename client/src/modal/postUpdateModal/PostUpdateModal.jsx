import React from "react";
import { useDispatch } from "react-redux";
import { modalOp } from "../../store/modal";
import MyModal from "../MyModal";

const PostUpdateModal = ({ show }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(modalOp.handlePostUpdateState({ show: false, id: null }));
  };

  return (
    <>
      <MyModal show={show} handleClose={onClose} />
    </>
  );
};

export default PostUpdateModal;
