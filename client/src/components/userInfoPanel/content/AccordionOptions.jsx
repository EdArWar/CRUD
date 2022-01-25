import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSel } from "../../../store/user";
import RadioInput from "../../radioInput/RadioInput";

const AccordionOptions = () => {
  const [lang, setLang] = useState("");
  const [theme, setTheme] = useState("");

  const radiosLang = ["en", "ru", "am"];
  const radiosTheme = ["dark", "light"];

  const userData = useSelector(userSel.userData);

  useEffect(() => {
    setLang(userData.setting.lang);
    setTheme(userData.setting.theme);

    return () => {
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

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Language</Accordion.Header>
        <Accordion.Body style={{ color: "red", display: "flex" }}>
          {radiosLang.map((item, i) => (
            <RadioInput
              key={i}
              id={`${i}user_panel_lang_radio`}
              text={item}
              name="user_panel_lang_radio"
              onChange={onLangRadiosChange}
              defaultLang={lang}
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Theme</Accordion.Header>
        <Accordion.Body style={{ color: "black", display: "flex" }}>
          {radiosTheme.map((item, i) => (
            <RadioInput
              key={i}
              id={`${i}user_panel_theme_radio`}
              text={item}
              name="user_panel_theme_radio"
              onChange={onThemeRadiosChange}
              defaultLang={theme}
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionOptions;
