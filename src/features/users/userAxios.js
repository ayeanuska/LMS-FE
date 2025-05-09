import { apiProcessor } from "../../helpers/axiosHelpers";

const authEP = import.meta.env.VITE_APP_ROOT_URL + "/auth";
const baseEP = import.meta.env.VITE_APP_ROOT_URL;
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

//request to send OTP
export const reqPassResetApi = (payload) => {
  const apiObj = {
    method: "post",
    url: authEP + "/otp",
    data: payload,
  };
  return apiProcessor(apiObj);
};
//reset password
export const resetPasswordApi = (payload) => {
  const apiObj = {
    method: "post",
    url: authEP + "/reset-password",
    data: payload,
    showToast: true,
  };
  return apiProcessor(apiObj);
};
