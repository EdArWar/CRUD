import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { globalSel } from "../../store/global";
import "./CreatePage.css";

const CreatePage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(globalSel.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate("/", { replace: true });
    }
  }, []);

  const [userName, setUserName] = useState("");
  const [userProfession, setUserProfession] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userPicture, setUserPicture] = useState("");

  const onCreateHandle = () => {
    console.log("userName", userName);
    console.log("userProfession", userProfession);
    console.log("userPosition", userPosition);
    console.log("userPicture", userPicture);
  };

  return (
    <Container className="create_page_container">
      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Profession"
            value={userProfession}
            onChange={(e) => setUserProfession(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Position"
            value={userPosition}
            onChange={(e) => setUserPosition(e.target.value)}
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
                setUserPicture(base64);
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
