import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { modalOp } from "../../store/modal";

const CardItem = ({ post }) => {
  const dispatch = useDispatch();

  const onUpdateClicked = () => {
    dispatch(modalOp.handlePostUpdateState({ show: true, id: post._id }));
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
            <ListGroupItem>CreatedAt: {post.createdAt}</ListGroupItem>
          </ListGroup>
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button>Like {post.likes}</Button>
            <Button onClick={onUpdateClicked}>Update</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default CardItem;
