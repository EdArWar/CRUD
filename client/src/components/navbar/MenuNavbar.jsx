import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdLogin, MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { globalSel } from "../../store/global";
import { modalOp, modalSel } from "../../store/modal";
import { userOp } from "../../store/user";
import CustomLink from "../custom/link/CustomLink";

const MenuNavbar = () => {
  const isAuth = useSelector(globalSel.isAuth);
  const signInModalState = useSelector(modalSel.signInModalState);
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <CustomLink to="/">CRUD</CustomLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to="/">Home</CustomLink>
            {isAuth && <CustomLink to="/create">Create</CustomLink>}
          </Nav>
          <Nav>
            {!!isAuth ? (
              <MdLogout
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={() => {
                  dispatch(userOp.handleSetUserInfoPanel(true));
                }}
              />
            ) : (
              <MdLogin
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={() =>
                  dispatch(modalOp.handleSignInState(!signInModalState))
                }
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
