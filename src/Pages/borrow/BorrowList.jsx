import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { returnBookAction } from "../../features/borrows/borrowAction";
import CustomModal from "../../components/customModal/CustomModal";
import { ReviewForm } from "../../components/forms/ReviewForm";

const BorrowList = ({ borrows }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  const [borrow, setBorrow] = useState({});

  const handleOnReview = (borrowObject) => {
    setBorrow({ ...borrowObject, userName: user.fName });
  };

  const handleOnReturn = (id) => {
    alert("Dispatch Return Action for:" + id);
    dispatch(returnBookAction(id));
  };

  return (
    <div>
      {borrow?._id ? (
        <CustomModal title={"Leave review"} closeFunction={setBorrow}>
          <ReviewForm borrow={borrow} setBorrow={setBorrow} />
        </CustomModal>
      ) : (
        ""
      )}

      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.bookId?.thumbnail} alt="" width={"70px"}></img>
              </td>
              <td>
                <h2>{item.bookId?.title?.slice(0, 20) || "Untitled Book"}</h2>
              </td>
              <td>{item?.dueDate?.slice(0, 10)}</td>
              <td>{item?.returnDate?.slice(0, 10) || "-"}</td>

              <td>
                {item?.status === "returned" ? (
                  <Button
                    variant="warning"
                    onClick={() => handleOnReview(item)}
                  >
                    Give review
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleOnReturn(item._id)}
                  >
                    Return Book
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BorrowList;
