import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { MdDisabledByDefault } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostApi from "../../api/PostApi";
import { modalOp } from "../../store/modal";
import { postSel } from "../../store/post";
import { getModalParams, MODAL_NAME } from "../../utils/ModalParams";
import Loader from "./../../components/loader/Loader";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(postSel.postDetails);

  const [skeletonState, setSkeletonState] = useState(true);

  useEffect(() => {
    dispatch(PostApi.getPostById_api(id, setSkeletonState));
  }, []);

  const onPostRemove = () => {
    dispatch(
      modalOp.handleSetModalState({
        ...getModalParams(MODAL_NAME.POST_REMOVE),
        id: post._id,
      })
    );
  };

  return (
    <>
      {skeletonState ? (
        <Loader />
      ) : (
        <Container
          fluid
          style={{
            padding: "0 2%",
            marginTop: "20px",
          }}
        >
          <Row
            style={{
              borderRadius: "30px",
              padding: "1.5% 25px 3% 25px",
              boxShadow:
                "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
            }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "2%",
              }}
            >
              <div>
                <MdDisabledByDefault
                  size={30}
                  color="blue"
                  style={{
                    cursor: "Pointer",
                  }}
                  onClick={onPostRemove}
                />
              </div>
            </Row>
            <Col xs={8}>
              <h2>{post.name}</h2>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Clan: {post.clan}</ListGroupItem>
                <ListGroupItem>
                  Organization: {post.organization || "Does not consist"}
                </ListGroupItem>
                <ListGroupItem>Profession: {post.profession}</ListGroupItem>
                <ListGroupItem>Position: {post.position}</ListGroupItem>

                <ListGroupItem>Creator ID: {post?.creator?.name}</ListGroupItem>
                <ListGroupItem>
                  CreatedAt: {moment(post.createdAt).fromNow()}
                </ListGroupItem>
              </ListGroup>
              <hr />
              <Row>
                <Col xs={4}>
                  <h3>Comments</h3>
                </Col>
                <Col xs={8}>
                  <h3>Write a comment</h3>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <div
                style={{
                  backgroundImage: `url(${post.avatar})`,
                  backgroundPosition: "center",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backgroundBlendMode: "darken",
                  borderRadius: "30px",
                  width: "100%",
                  height: "600px",
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default PostDetails;
