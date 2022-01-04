import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const CardItem = ({ post }) => {
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
            }}
          ></div>
          <Card.Body>
            <Card.Title>{post.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Clan: {post.clan}</ListGroupItem>
            <ListGroupItem>Organization: {post.organization}</ListGroupItem>
            <ListGroupItem>Profession: {post.profession}</ListGroupItem>
            <ListGroupItem>Position: {post.position}</ListGroupItem>
            <ListGroupItem>Creator ID: {post.creator}</ListGroupItem>
            <ListGroupItem>CreatedAt: {post.createdAt}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Like {post.likes}</Card.Link>
            <Card.Link href="#">Update</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default CardItem;
