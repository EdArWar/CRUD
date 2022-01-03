import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  console.log("id", id);

  return (
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
          padding: "3% 25px",
          boxShadow:
            "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Col xs={8}>
          <h2>Title</h2>
          <p>Description</p>
          <p>
            Created by: <span>Edgar Vardanyan</span>
          </p>
          <p>2 hours ago</p>
          <hr />
          <strong>Realtime Chat - coming soon!</strong>
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
              overflow: "hidden",
              borderRadius: "30px",
              background: "red",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <img
              src="https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg"
              alt=""
              width={"100%"}
              height={"auto"}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostDetails;
