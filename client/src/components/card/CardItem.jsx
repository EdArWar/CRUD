import moment from "moment";
import React from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostApi from "../../api/PostApi";
import { globalOp, globalSel } from "../../store/global";
import { modalOp } from "../../store/modal";

const CardItem = ({ post }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(globalSel.isAuth);

  const onUpdateClicked = () => {
    dispatch(globalOp.handleSetUpdatePost(post));
    dispatch(modalOp.handlePostUpdateState({ show: true, id: post._id }));
  };

  const onLikeClicked = () => {
    dispatch(PostApi.likePost_api(post._id));
  };

  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div
        style={{
          boxShadow:
            "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
          margin: "20px 0px",
          overflow: "hidden",
          borderRadius: "30px",
        }}
      >
        <Card>
          <Link to={`posts/${post._id}`}>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${post.avatar})`,
                backgroundPosition: "center",
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "darken",
                cursor: "pointer",
              }}
            ></div>
          </Link>
          <Card.Body>
            <Card.Title>{post.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Clan: {post.clan}</ListGroupItem>
            <ListGroupItem>
              Organization: {post.organization || "Does not consist"}
            </ListGroupItem>
            <ListGroupItem>Profession: {post.profession}</ListGroupItem>
            <ListGroupItem>Position: {post.position}</ListGroupItem>
            <ListGroupItem>Creator ID: {post.creator.name}</ListGroupItem>
            <ListGroupItem>
              CreatedAt: {moment(post.createdAt).fromNow()}
            </ListGroupItem>
          </ListGroup>
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OverlayTrigger
                overlay={
                  <Tooltip
                    id="tooltip-disabled"
                    style={{ display: isAuth ? "none" : "unset" }}
                  >
                    You must be a registered user
                  </Tooltip>
                }
              >
                <span className="d-inline-block">
                  <Button
                    variant="link"
                    disabled={!isAuth}
                    onClick={onLikeClicked}
                  >
                    Like
                  </Button>
                </span>
              </OverlayTrigger>
              <span
                style={{
                  fontSize: "18px",
                  padding: "2px",
                }}
              >
                {post.likes.length || ""}
              </span>
            </div>
            <Button onClick={onUpdateClicked}>Update</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default CardItem;
