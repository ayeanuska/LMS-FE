// call api processor to fetch user

import { apiProcessor } from "../../helpers/axiosHelpers";

const userEP = import.meta.env.VITE_APP_ROOT_URL + "/users";

// GET  {{rooturl}}/users/profile
export const fetchUserApi = async () => {
  const obj = {
    url: userEP + "/profile",
    method: "get",
    payload,
    showToast: false,
    isPrivate: true,
  };
  const result = await apiProcessor(obj);
  console.log(result);
};
