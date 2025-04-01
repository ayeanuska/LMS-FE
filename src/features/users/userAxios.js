import { apiProcessor } from "../../helpers/axiosHelpers";

const authEP = import.meta.env.VITE_APP_ROOT_URL + "/auth";

//api to login
export const loginApi = async (loginObj) => {

  delete loginObj.confirmPassword;


  

  
  const res = await apiProcessor({
    method: "post",
    url: authEP + "/login",
    data: loginObj,
    isPrivate: false,
    isRefreshToken: false,
  });
  return res;
};

//api to fetch user detail
export const fetchUserDetailApi = () => {
  const apiObj = {
    method: "get",
    url: authEP,
    isPrivate: true,
    isRefreshToken: false,
  };

  return apiProcessor(apiObj);
};

// api to create new user
export const createNewUserApi = (newUserObj) => {
  const apiObj = {
    method: "post",
    url: authEP + "/register",
    isPrivate: true,
    data: newUserObj,
  };

  return apiProcessor(apiObj);
};
