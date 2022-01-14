import React from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill, BsFillXCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PostApi from "../../../api/PostApi";
import { modalOp } from "../../../store/modal";
import { postSel } from "../../../store/post";
import ModalCustom from "../ModalCustom";

const RemovePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postDetails = useSelector(postSel.postDetails);

  const redirectHomePage = () => {
    navigate("/", { replace: true });
  };

  const onRemovePost = () => {
    dispatch(PostApi.removePost_api(postDetails._id, redirectHomePage));
  };

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
            onClick={onRemovePost}
          >
            <BsFillTrashFill />
          </Button>
        </div>
      </div>
    </ModalCustom>
  );
};

export default RemovePost;
