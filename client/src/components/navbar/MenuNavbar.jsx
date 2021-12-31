import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modalOp, modalSel } from "../../store/modal";
import CustomLink from "../custom/link/CustomLink";

const MenuNavbar = () => {
  const signInModal = useSelector(modalSel.signInModal);
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/create">Create</CustomLink>
          </Nav>
          <Nav>
            <span
              style={{
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => dispatch(modalOp.handleSignInState(!signInModal))}
            >
              Login
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
