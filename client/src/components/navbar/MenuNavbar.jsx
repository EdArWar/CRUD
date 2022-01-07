import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { globalOp, globalSel } from "../../store/global";
import { modalOp, modalSel } from "../../store/modal";
import { userOp } from "../../store/user";
import CustomLink from "../custom/link/CustomLink";

const MenuNavbar = () => {
  const isAuth = useSelector(globalSel.isAuth);
  const signInModalState = useSelector(modalSel.signInModalState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <CustomLink to="/">CRUD</CustomLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/create">Create</CustomLink>
          </Nav>
          <Nav>
            {!!isAuth ? (
              <span
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  dispatch(userOp.handleSetUserData([]));
                  dispatch(globalOp.handleAuthState(null));
                  localStorage.removeItem("token");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </span>
            ) : (
              <span
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() =>
                  dispatch(modalOp.handleSignInState(!signInModalState))
                }
              >
                Login
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
