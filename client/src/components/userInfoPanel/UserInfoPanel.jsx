import React, { memo } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdEditNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { globalOp } from "../../store/global";
import { modalOp } from "../../store/modal/";
import { userOp, userSel } from "../../store/user";
import AccordionOptions from "./content/AccordionOptions";
import "./UserInfoPanel.css";

const UserInfoPanel = () => {
  const userData = useSelector(userSel.userData);
  const userInfoPanel = useSelector(userSel.userInfoPanel);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(userOp.handleSetUserInfoPanel(false));
    dispatch(userOp.handleSetUserData([]));
    dispatch(globalOp.handleAuthState(null));
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const onEditClick = () => {
    dispatch(modalOp.handleUserInfoModalState(true));
  };

  return (
    <Container fluid className="user_info_panel_container">
      <Row
        style={{
          height: "100vh",
        }}
      >
        <Col
          xs={8}
          onClick={() => {
            dispatch(userOp.handleSetUserInfoPanel(false));
          }}
          className="user_info_panel_empty_zone"
        ></Col>
        <Col xs={4} className="user_info_panel_content">
          <div>
            <div className="user_info_panel_card">
              <div className="user_info_panel_icon">
                <MdEditNote onClick={onEditClick} size={28} />
              </div>
              <div className="text-center">
                <img
                  src="https://i.imgur.com/stD0Q19.jpg"
                  width="100"
                  className="rounded-circle"
                  alt=""
                />
                <h3 className="mt-2">{userData.name}</h3>
                <span className="mt-1 clearfix">{userData.id}</span>
                <hr className="user_info_panel_line" />
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <AccordionOptions />
                </div>
                <div className="user_info_panel_profile mt-5">
                  <Button
                    onClick={onLogout}
                    className="user_info_panel_profile_button px-5"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(UserInfoPanel);
