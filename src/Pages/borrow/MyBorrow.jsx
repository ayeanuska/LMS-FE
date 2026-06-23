import React, { useEffect } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import BorrowList from "./BorrowList";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowListAction } from "../../features/borrows/borrowAction";
import { setMenu } from "../../features/users/userSlice";

const MyBorrow = () => {
  const dispatch = useDispatch();
  const borrows = useSelector((state) => state.borrowInfo.borrows);

  useEffect(() => {
    dispatch(setMenu("My Books"));
  }, []);

  useEffect(() => {
    dispatch(getBorrowListAction());
  }, []);

  // get my borrow list

  return (
    <UserLayout pageTitle={"My Borrowed Book"}>
      <BorrowList borrows={borrows} />
    </UserLayout>
  );
};

export default MyBorrow;
