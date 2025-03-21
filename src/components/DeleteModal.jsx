import React from "react";

import { useDispatch } from "react-redux";
import { deleteSingleBookAction } from "../features/books/bookAction";

const DeleteModal = ({ id }) => {
  const dispatch = useDispatch();
  const handleOnDelete = () => {
    alert("BOOK DELETED : " + id);

    dispatch(deleteSingleBookAction(id));
  };
  return (
    <div>
      BOOK TO DELETE :{id}
      <button onClick={handleOnDelete}>DELETE</button>
    </div>
  );
};

export default DeleteModal;
