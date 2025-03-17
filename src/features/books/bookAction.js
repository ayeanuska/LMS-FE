import { toast } from "react-toastify";
import { fetchAllBookApi, postNewBookApi } from "./bookAxios";
import { addBooks } from "./bookSlice";

export const getAllBookAction =
  (isPrivate = false) =>
  async (dispatch) => {
    //  1. fetch data
    const { books, status } = await fetchAllBookApi(isPrivate);

    //update the book store
    if (status === "success" && books) {
      dispatch(addBooks(books));
    }
  };

export const postNewBookAction = (obj) => async (dispatch) => {
  const pending = postNewBookApi(obj);

  toast.promise(pending, {
    pending: "please wait..",
    success: pending.message,
  });

  const { status, message } = await pending;

  console.log(status, message);
  toast[status](message);

  if (status === "success") {
    // then call function to fetch all the data
    // update the store data new book

    dispatch(getAllBookAction(true));
    return true;
  } else {
    return false;
  }
};
