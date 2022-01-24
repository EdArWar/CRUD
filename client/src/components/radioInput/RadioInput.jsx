import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const RadioInput = ({ text, name, onChange, defaultLang }) => {
  return (
    <InputGroup
      className="mb-3"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form.Label
        htmlFor={text}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <InputGroup.Radio
          id={text}
          name={name}
          aria-label="Checkbox for following text input"
          onChange={(e) => onChange(e.target.id)}
          checked={defaultLang === text}
        />
        <InputGroup.Text>{text.toUpperCase()}</InputGroup.Text>
      </Form.Label>
    </InputGroup>
  );
};

export default RadioInput;
