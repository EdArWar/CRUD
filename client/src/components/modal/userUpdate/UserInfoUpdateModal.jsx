import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSel } from "../../../store/user";
import RadioInput from "../../radioInput/RadioInput";

const UserInfoUpdateModal = () => {
  const [name, setName] = useState("");
  const [lang, setLang] = useState("");
  const [theme, setTheme] = useState("");

  const radiosLang = ["en", "ru", "am"];
  const radiosTheme = ["dark", "light"];

  const userData = useSelector(userSel.userData);
  console.log("userData", userData);

  useEffect(() => {
    setName(userData.name);
    setLang(userData.setting.lang);
    setTheme(userData.setting.theme);

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
    //
  };

  return (
    <>
      <Container>
        <Row>
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
                text={item}
                name={"lang_radio"}
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
                text={item}
                name={"theme_radio"}
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
