import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import PostApi from "../../api/PostApi";
import { postSel } from "../../store/post";

const UpdatePostComponent = () => {
  const dispatch = useDispatch();
  const post = useSelector(postSel.post);

  const [name, setName] = useState(post.name);
  const [clan, setClan] = useState(post.clan);
  const [organization, setOrganization] = useState(post.organization);
  const [profession, setProfession] = useState(post.profession);
  const [position, setPosition] = useState(post.position);
  const [avatar, setAvatar] = useState(post.avatar);

  const onCreateHandle = () => {
    dispatch(
      PostApi.updatePost(
        post._id,
        name,
        clan,
        organization,
        profession,
        position,
        avatar
      )
    );
  };

  return (
    <>
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
    </>
  );
};

export default UpdatePostComponent;
