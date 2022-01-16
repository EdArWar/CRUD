import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userOp } from "../../store/user";
import "./UserInfoPanel.css";

const UserInfoPanel = () => {
  const dispatch = useDispatch();

  return (
    <Container fluid className="user_info_panel_container">
      <Row
        style={{
          height: "100vh",
        }}
      >
        <Col
          sm={8}
          onClick={() => {
            dispatch(userOp.handleSetUserInfoPanel(false));
          }}
          className="user_info_panel_empty_zone"
        ></Col>
        <Col sm={4} className="user_info_panel_content">
          <div>
            <div className="user_info_panel_card">
              <div className="text-center">
                <img
                  src="https://i.imgur.com/stD0Q19.jpg"
                  width="100"
                  className="rounded-circle"
                  alt=""
                />
                <h3 className="mt-2">Maria Smantha</h3>{" "}
                <span className="mt-1 clearfix">Android Developer</span>
                <div className="row mt-3 mb-3">
                  <div className="col-md-4">
                    <h5>Projects</h5> <span className="num">10</span>
                  </div>
                  <div className="col-md-4">
                    <h5>Projects</h5> <span className="num">10</span>
                  </div>
                  <div className="col-md-4">
                    <h5>Projects</h5> <span className="num">10</span>
                  </div>
                </div>
                <hr className="user_info_panel_line" />{" "}
                <small className="mt-4">
                  I am an android developer working at google Inc at
                  california,USA
                </small>
                <div className="user_info_panel_social-buttons mt-5">
                  {" "}
                  <button className="user_info_panel_neo-button">
                    <i className="fa fa-facebook fa-1x"></i>{" "}
                  </button>{" "}
                  <button className="neo-button">
                    <i className="fa fa-linkedin fa-1x"></i>
                  </button>{" "}
                  <button className="neo-button">
                    <i className="fa fa-google fa-1x"></i>{" "}
                  </button>{" "}
                  <button className="neo-button">
                    <i className="fa fa-youtube fa-1x"></i>{" "}
                  </button>{" "}
                  <button className="neo-button">
                    <i className="fa fa-twitter fa-1x"></i>{" "}
                  </button>{" "}
                </div>
                <div className="user_info_panel_profile mt-5">
                  <Button
                    onClick={() =>
                      dispatch(userOp.handleSetUserInfoPanel(false))
                    }
                    className="user_info_panel_profile_button px-5"
                  >
                    Logout
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfoPanel;
