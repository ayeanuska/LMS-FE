import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { UserLayout } from "../../components/layouts/UserLayout";

const AllBorrows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu("AllBurrows"));
  }, []);

  return (
    <UserLayout pageTitle="All Borrows">
      <h3>Borrow History</h3>
    </UserLayout>
  );
};

export default AllBorrows;
