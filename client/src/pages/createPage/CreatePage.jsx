import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PostApi from "../../api/PostApi";
import { globalSel } from "../../store/global";
import "./CreatePage.css";

const CreatePage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(globalSel.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate("/", { replace: true });
    }
  }, []);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [position, setPosition] = useState("");
  const [avatar, setAvatar] = useState("");

  const onCreateHandle = () => {
    dispatch(PostApi.createPost(name, age, profession, position, avatar));
  };

  return (
    <Container className="create_page_container">
      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>User Picture</Form.Label>
          {/* <Form.Control type="file" /> */}
          <Row>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setAvatar(base64);
              }}
            />
          </Row>
        </Form.Group>
        <Button variant="primary" onClick={onCreateHandle}>
          Submit
        </Button>
      </Row>
    </Container>
  );
};

export default CreatePage;
