import React from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill, BsFillXCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { modalOp } from "../../../store/modal";
import { postSel } from "../../../store/post";
import ModalCustom from "../ModalCustom";

const RemovePost = () => {
  const dispatch = useDispatch();

  const postDetails = useSelector(postSel.postDetails);

  return (
    <ModalCustom
      show={true}
      onHide={() => {
        dispatch(modalOp.handleRemovePostModalState(false));
      }}
      title="Remove Post"
    >
      <div>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          {postDetails.name}
        </h2>
        <div>
          <img src={postDetails.avatar} width="100%" alt="avatar" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <Button
            style={{
              marginRight: "15px",
            }}
            variant="success"
            onClick={() => dispatch(modalOp.handleRemovePostModalState(false))}
          >
            <BsFillXCircleFill />
          </Button>
          <Button
            style={{
              marginLeft: "15px",
            }}
            variant="danger"
          >
            <BsFillTrashFill />
          </Button>
        </div>
      </div>
    </ModalCustom>
  );
};

export default RemovePost;
