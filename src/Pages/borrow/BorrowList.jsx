import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getBorrowListAction,
  returnBookAction,
} from "../../features/borrows/borrowAction";
import CustomModal from "../../components/customModal/CustomModal";

const BorrowList = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((store) => store.borrowInfo);
  const { user } = useSelector((state) => state.userInfo);

  const [borrow, setBorrow] = useState({});

  const handleOnReview = (borrowObject) => {
    setBorrow({ ...borrowObject, userName: user.fName });
  };

  const handleOnReturn = (id) => {
    alert("Dispatch Return Action for:" + id);
    dispatch(returnBookAction(id));
  };

  useEffect(() => {
    //call fetch borrow action
    dispatch(getBorrowListAction());
  }, []);

  return (
    <div>
      {borrow?._id ? (
        <CustomModal title={"Leave review"} closeFunction={setBorrow}>
          <ReviewForm borrow={borrow} setBurrow={setBorrow} />
        </CustomModal>
      ) : (
        ""
      )}

      <hr />
      <Table striped bordered hober>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows?.map((item, i) => {
            <tr keys={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={"70px"}></img>
              </td>
              <td>
                <h2>{item.title.slice(0, 3)}</h2>
              </td>
              <td>{item?.dueDate?.slice(0, 10)}</td>
              <td>{item?.returnDate?.slice(0.1) || "-"}</td>
            </tr>;
            <td>
              {item?.status === "returned" ? (
                <Button varient="warning" onClick={() => handleOnReview(item)}>
                  Give review
                </Button>
              ) : (
                <Button
                  varient="success"
                  onClick={() => handleOnReturn(item._id)}
                >
                  Return Book
                </Button>
              )}
            </td>;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default BorrowList;
