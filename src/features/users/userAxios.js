import { apiProcessor } from "../../helpers/axiosHelpers";

const userEP = import.meta.env.VITE_APP_ROOT_URL + "/users";

const authEP = import.meta.env.VITE_APP_ROOT_URL + "/auth";

export const loginApi = (loginApi) => {
  return apiProcessor({
    method: "post",
    url: authEP + "/login",
    data: LoginObj,
    isPrivate: false,
    isRefreshToken: false,
  });
};

export const fetchUserDetailApi = () => {
  const apiObj = {};
  return apiProcessor(apiObj);
};

export const createNewUserApi = (newUserApi) => {
  const apiObj = {};
};
