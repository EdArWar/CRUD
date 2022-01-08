import React from "react";
import { useDispatch } from "react-redux";
import { globalOp } from "../../../store/global";
import { modalOp } from "../../../store/modal";
import UpdatePostComponent from "../../postUpdate/UpdatePostComponent";
import ModalCustom from "../ModalCustom";

const PostUpdateModal = ({ show }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(modalOp.handlePostUpdateState({ show: false, id: null }));
    dispatch(globalOp.handleSetUpdatePost([]));
  };

  return (
    <>
      <ModalCustom show={show} onHide={onClose} title="Update Post">
        <UpdatePostComponent />
      </ModalCustom>
    </>
  );
};

export default PostUpdateModal;
