import React from "react";
import { useDispatch } from "react-redux";
import { modalOp } from "../../../store/modal";
import UpdatePostComponent from "../../postUpdate/UpdatePostComponent";
import ModalCustom from "../ModalCustom";

const PostUpdateModal = ({ show }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(modalOp.handlePostUpdateState({ show: false, id: null }));
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
