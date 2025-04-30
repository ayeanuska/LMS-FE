import React from "react";

import { useDispatch } from "react-redux";
import { deleteSingleBookAction } from "../features/books/bookAction";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const handleOnDelete = async () => {
    const isDeleted = await dispatch(deleteSingleBookAction(id));

    //close modal and refresh book list
    if (isDeleted) {
      onClose(true);
    } else {
      onClose(false);
    }
  };

  return (
    <div>
      <Modal show onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Delete this book?</p>
          <p>
            <strong>BookID:</strong>
            {id}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleOnDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteModal;
