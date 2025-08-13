import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CustomModal = ({ title, children, closeFunction }) => {
  const [show, setShow] = useState(true);

  return (
    <Modal
      show={show}
      onHide={() => {
        closeFunction({});
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="concontained-modal-title-vcenter">{title}</Modal.Title>
        <Modal.Body>{children} </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default CustomModal;
