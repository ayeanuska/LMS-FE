import { apiProcessor } from "../../helpers/axiosHelpers";

const bookEP = import.meta.env.VITE_APP_ROOT_URL + "/books";

export const fetchAllBookApi = () => {
  const apiObj = {
    method: "get",
    url: bookEP + "/pub-books",
    isPrivate: false,
    isRefreshToken: false,
  };

  return apiProcessor(apiObj);
};

export const postNewBookApi = (newBookObj) => {
  const apiObj = {
    method: "post",
    url: bookEP,
    isPrivate: true,
    isRefreshToken: false,
    data: newBookObj,
  };
  return apiProcessor(apiObj);
};
