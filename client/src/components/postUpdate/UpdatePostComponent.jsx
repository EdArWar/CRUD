import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import PostApi from "../../api/PostApi";
import { globalSel } from "../../store/global";

const UpdatePostComponent = () => {
  const dispatch = useDispatch();
  const updatePost = useSelector(globalSel.updatePost);

  const [updateButtonState, setUpdateButtonState] = useState(false);

  const [name, setName] = useState(updatePost.name);
  const [clan, setClan] = useState(updatePost.clan);
  const [organization, setOrganization] = useState(updatePost.organization);
  const [profession, setProfession] = useState(updatePost.profession);
  const [position, setPosition] = useState(updatePost.position);
  const [avatar, setAvatar] = useState(updatePost.avatar);

  useEffect(() => {
    return () => {
      setName("");
      setClan("");
      setOrganization("");
      setProfession("");
      setPosition("");
      setAvatar("");
    };
  }, []);

  const onCreateHandle = () => {
    dispatch(
      PostApi.updatePost_api(
        updatePost._id,
        name,
        clan,
        organization,
        profession,
        position,
        avatar,
        setUpdateButtonState
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
        <div
          style={{
            width: "100px",
            height: "auto",
          }}
        >
          <img src={avatar} width="100%" />
        </div>
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
      <Button
        variant="primary"
        onClick={onCreateHandle}
        disabled={updateButtonState}
      >
        Submit
      </Button>
    </>
  );
};

export default UpdatePostComponent;
