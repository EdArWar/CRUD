import React from "react";
import { Accordion } from "react-bootstrap";
import LangRadio from "./langRadios/LangRadio";
import ThemeSelect from "./themeSelect/ThemeSelect";

const AccordionOptions = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Language</Accordion.Header>
        <Accordion.Body style={{ color: "red", display: "flex" }}>
          <LangRadio />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Theme</Accordion.Header>
        <Accordion.Body style={{ color: "black", display: "flex" }}>
          <ThemeSelect />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionOptions;
