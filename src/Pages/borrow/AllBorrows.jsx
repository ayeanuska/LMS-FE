import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../../components/layouts/UserLayout";
import { getBorrowListAction } from "../../features/borrows/borrowAction";
import BorrowList from "./BorrowList";

const AllBorrows = () => {
  const dispatch = useDispatch();

  const borrows = useSelector((state) => state.borrowInfo.borrows);

  useEffect(() => {
    dispatch(getBorrowListAction());
  }, [dispatch]);

  return (
    <UserLayout pageTitle="All Borrows">
      <h2>Borrow Records</h2>

      <BorrowList borrows={borrows} />
    </UserLayout>
  );
};

export default AllBorrows;
