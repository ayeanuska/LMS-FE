//fetch profile on load
// get user form the redux store and display the profile information

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../../components/layouts/UserLayout";
import { getProfileAction } from "../../features/profile/profileAction";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  return (
    <UserLayout pageTitle="Profile Page">
      <h2>
        {user.fName} {user.lName}
      </h2>
      <p> Email: {user.email}</p>
      <p>Phone number: {user.phone} </p>
      <p>Role: {user.role}</p>
    </UserLayout>
  );
};

export default ProfilePage;
