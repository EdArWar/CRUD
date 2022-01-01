import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AuthApi from "../../../api/AuthApi";
import "./Registration.css";

const Registration = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("admin@mail.ru");
  const [name, setName] = useState("admin");
  const [password, setPassword] = useState("admin");

  useEffect(() => {
    return () => {
      setEmail("");
      setName("");
      setPassword("");
    };
  }, []);

  const onRegistration = () => {
    dispatch(AuthApi.registration(email, name, password));
  };

  return (
    <Container className="registration_container">
      <Row className="justify-content-md-center">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={onRegistration}>
          Registration
        </Button>
      </Row>
    </Container>
  );
};

export default Registration;
