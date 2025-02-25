import React from "react";
import { apiProcessor } from "../../helpers/axiosHelpers";

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
    fetchUserData;
  }, []);

  return <div>{user.fName}</div>;
};

export default Dashboard;
