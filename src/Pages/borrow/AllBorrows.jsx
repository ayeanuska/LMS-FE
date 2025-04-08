import React, { useEffect } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

const AllBorrows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("AllBurrows"));
  }, []);
  return <UserLayout pageTitle={" All burrow list>"}></UserLayout>;
};

export default AllBorrows;
