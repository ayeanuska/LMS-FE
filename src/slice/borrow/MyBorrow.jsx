import React, { useEffect } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import BorrowList from "./BorrowList";
import { useDispatch } from "react-redux";
import { getMyBorrowListAction } from "../../features/borrows/borrowAction";
import { setMenu } from "../../features/users/userSlice";

const MyBorrow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu("My Books"));
    // TODO: get my borrow book list
    // dispatch(getMyBorrowListAction());
  }, []);

  return (
    <UserLayout pageTitle={"My Borrowed Book"}>
      <BorrowList />
    </UserLayout>
  );
};

export default MyBorrow;
