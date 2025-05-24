import { apiProcessor } from "../../helpers/axiosHelpers";

const bookEP = import.meta.env.VITE_APP_ROOT_URL + "/books";

export const fetchAllBookApi = (isPrivate) => {
  const apiObj = {
    method: "get",
    url: `${bookEP}${isPrivate ? "" : "/pub-books"}`,
    isPrivate,
    isRefreshToken: false,
  };

  return apiProcessor(apiObj);
};

export const fetchPubBookApi = () => {
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
export const fetchSingleBook = async (_id) => {
  const apiObj = {
    method: "get",
    url: `${bookEP}/${_id}`,
    isPrivate: true,
  };
  return apiProcessor(apiObj);
};

export const updateABook = async ({ _id, ...bookObject }) => {
  const apiObj = {
    method: "put",
    url: bookEP + "/" + _id,
    isPrivate: true,
    isRefreshToken: false,
    data: bookObject,
  };

  return apiProcessor(apiObj);
};

export const deleteBook = async (_id) => {
  //delete api/v1/book/:_id

  const apiObj = {
    method: "delete",
    url: bookEP + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(apiObj);
};
