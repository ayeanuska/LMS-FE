import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helpers/axiosHelpers";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Dashboard"));
  return (
    <UserLayout pageTitle="Dashboard">
      <h1>DASHBOARD</h1>
    </UserLayout>
  );
};

export default Dashboard;
