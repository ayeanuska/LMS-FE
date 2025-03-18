import { apiProcessor } from "../../helpers/axiosHelpers";

const borrowEP = import.meta.env.VITE_APP_ROOT_URL + "/borrows";

/// create borrow history api

export const createBorrowApi = (borrowObj) => {
  const apiObj = {
    method: "post",
    url: borrowEP,
    isPrivate: true,
    data: borrowObj,
  };

  return apiProcessor(apiObj);
};

// //fetch borrow book api
export const fetchBorrow = () => {
  const apiObj = {
    method: "get",
    url: borrowEP,
    isPrivate: true,
  };
  return apiProcessor(apiObj);
};

// // return book api
export const returnBook = (id) => {
  const apiObj = {
    method: "put",
    url: borrowEP + "/" + id,
    isPrivate: true,
  };

  return apiProcessor(apiObj);
};
