import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalCustom = ({ show, onHide, title, closeButton, children }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {closeButton && <Button onClick={onHide}>Close</Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCustom;
