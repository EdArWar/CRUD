import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AuthApi from "../../../api/AuthApi";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("admin@mail.ru");
  const [password, setPassword] = useState("admin");

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  const onLogin = () => {
    dispatch(AuthApi.login(email, password));
  };

  return (
    <Container className="login_container">
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={onLogin}>
          Login
        </Button>
      </Row>
    </Container>
  );
};

export default Login;
