import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import AuthApi from "../../../api/AuthApi";
import avatar_icon from "../../../assets/images/avatar.png";
import { userSel } from "../../../store/user";
import RadioInput from "../../radioInput/RadioInput";

const UserInfoUpdateModal = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lang, setLang] = useState("");
  const [theme, setTheme] = useState("");
  const [avatar, setAvatar] = useState("");

  const radiosLang = ["en", "ru", "am"];
  const radiosTheme = ["dark", "light"];

  const userData = useSelector(userSel.userData);

  useEffect(() => {
    setName(userData.name);
    setLang(userData.setting.lang);
    setTheme(userData.setting.theme);
    setAvatar(userData.avatar);

    return () => {
      setName("");
      setLang("");
      setTheme("");
    };
  }, []);

  const onLangRadiosChange = (id) => {
    setLang(id);
  };

  const onThemeRadiosChange = (id) => {
    setTheme(id);
  };

  const onSave = () => {
    dispatch(AuthApi.updateUserInfo_api(name, lang, theme, avatar));
  };

  return (
    <>
      <Container>
        <Row>
          <Form.Group
            controlId="formFile"
            className="mb-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${avatar || avatar_icon})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "150px",
                height: "150px",
                margin: "0 auto",
                border: "2px solid gray",
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setAvatar(base64);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {radiosLang.map((item, i) => (
              <RadioInput
                key={i}
                id={`${i}lang_radio`}
                text={item}
                name="lang_radio"
                onChange={onLangRadiosChange}
                defaultLang={lang}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {radiosTheme.map((item, i) => (
              <RadioInput
                key={i}
                id={`${i}theme_radio`}
                text={item}
                name="theme_radio"
                onChange={onThemeRadiosChange}
                defaultLang={theme}
              />
            ))}
          </div>
        </Row>
        <Row>
          <Button onClick={onSave}>SAVE</Button>
        </Row>
      </Container>
    </>
  );
};

export default UserInfoUpdateModal;
