import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getBorrowListAction,
  returnBookAction,
} from "../../features/borrows/borrowAction";

const BorrowList = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((store) => store.borrowInfo);
  const { user } = useSelector((state) => state.userInfo);

  const handleOnReturn = (id) => {
    alert("Dispatch Return Action for:" + id);
    dispatch(returnBookAction(id));
  };

  useEffect(() => {
    //call fetch borrow action
    dispatch(getBorrowListAction());
  },[]);

  return (
    <div>
      <table className="" border>
        <tbody>
          {borrows.map((item, index) => {
            return (
              <tr>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.bookTitle}</td>
                <td className="border p-w">
                  {item.Returned ? (
                    "Already Returned"
                  ) : (
                    <Button
                      onClick={() => {
                        handleOnReturn(item._id);
                      }}
                    >
                      Return
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowList;
