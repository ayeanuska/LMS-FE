import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal";
import { getAllBookAction } from "../../features/books/bookAction";

// const isPrivate = true;

export const BookTable = () => {
  const books = useSelector((state) => state.bookInfo.books);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookAction());
  }, []);

  const handleOnDelete = (id) => {
    // 1. delete axios call
    //call delete action
    setShowDeleteModal(true);
    setSelectedBookId(id);
  };

  const handleonCloseModal = (deleted) => {
    setShowDeleteModal(false);
    setSelectedBookId(null);

    if (deleted) {
      dispatch(getAllBookAction());
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{books?.length || 0} Books found!</div>

        <div>
          <input type="text" className="form-control" />
        </div>
      </div>

      {/* {showDeleteModal ? <DeleteModal id={selectedBookId} /> : ""} */}

      {showDeleteModal && (
        <DeleteModal id={selectedBookId} onClose={handleonCloseModal} />
      )}

      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Decription</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((item, i) => (
            <tr key={item._id || i}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={"70px"} />
              </td>
              <td>
                <h2>{item.title?.slice(0, 30)} ...</h2>
                <div>{item.author}</div>
                <div
                  className={
                    item.status === "active" ? "text-success" : "text-danger"
                  }
                >
                  Status: {item.status}
                </div>
              </td>
              <td>
                <Link to={"/admin/book/edit/" + item._id}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
