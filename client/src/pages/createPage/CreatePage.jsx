import React, { useState } from "react";
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

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isAuth]);

  const [name, setName] = useState("Naruto");
  const [clan, setClan] = useState("Uzumaki");
  const [organization, setOrganization] = useState("");
  const [profession, setProfession] = useState("Shinobi");
  const [position, setPosition] = useState("Hokage");
  const [avatar, setAvatar] = useState("");

  const onCreateHandle = () => {
    dispatch(
      PostApi.createPost(name, clan, organization, profession, position, avatar)
    );
  };

  return (
    <Container className="create_page_container">
      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Clan</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Clan"
            value={clan}
            onChange={(e) => setClan(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Organization</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Picture</Form.Label>
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
