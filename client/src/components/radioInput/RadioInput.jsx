import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const RadioInput = ({ id, text, name, onChange, defaultLang }) => {
  return (
    <InputGroup
      className="mb-3"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form.Label
        htmlFor={id}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <InputGroup.Radio
          id={id}
          name={name}
          aria-label="Checkbox for following text input"
          onChange={(e) => onChange(text)}
          checked={defaultLang === text}
        />
        <InputGroup.Text>{text.toUpperCase()}</InputGroup.Text>
      </Form.Label>
    </InputGroup>
  );
};

export default RadioInput;
