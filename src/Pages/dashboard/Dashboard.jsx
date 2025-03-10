import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helpers/axiosHelpers";
import { UserLayout } from "../../components/layouts/UserLayout";

const Dashboard = () => {
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    const data = await apiProcessor({
      method: "get",
      url: "http://api/v1/auth",
      isPrivate: true,
      isRefreshToken: false,
    });

    if (data && data.status == "success") {
      setUser(data.user);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserLayout>
      <h1>DASHBOARD</h1>
    </UserLayout>
  );
};

export default Dashboard;
