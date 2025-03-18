import React, { useEffect } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import BorrowList from "./BorrowList";
import { useDispatch } from "react-redux";
import { getBorrowListAction } from "../../features/borrows/borrowAction";
import { setMenu } from "../../features/users/userSlice";

const MyBorrow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu("My Books"));
  }, []);

  // get my borrow list
  dispatch(getBorrowListAction());

  return (
    <UserLayout pageTitle={"My Borrowed Book"}>
      <BorrowList />
    </UserLayout>
  );
};

export default MyBorrow;
