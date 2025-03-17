import { MdDeviceThermostat } from "react-icons/md";
import { apiProcessor } from "../../helpers/axiosHelpers";

const borrowEP = import.meta.env.VITE_APP_ROOT_URL + "/borrows";

/// create borrow history api

export const borrowBook = (borrowObj) => {
  const apiObj = {
    method: "post",
    url: borrowEP,
    isPrivate: true,
    data: borrowObj,
  };

  return apiProcessor(apiObj);
};

//fetch borrow book api

// return book api
