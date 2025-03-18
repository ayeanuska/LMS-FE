import { toast } from "react-toastify";
import {
  deleteBook,
  fetchAllBookApi,
  fetchSingleBook,
  postNewBookApi,
  updateABook,
} from "./bookAxios";
import { addBooks, setSelectedBook } from "./bookSlice";

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

export const getSingleBookAction = (_id) => async (dispatch) => {
  const { status, books } = await fetchSingleBook(_id);
  if (status) {
    dispatch(setSelectedBook(books));
  }
};

export const updateSingleBookAction = (obj) => async (dispatch) => {
  const pending = updateABook(obj);
  toast.promise(pending, {
    pending: "PLEASE WAIT...",
  });

  const { status, message } = await pending;
  toast[status](message);

  status === "success" && dispatch(getSingleBookAction(obj._id));
  return { status, message };
};

export const deleteSingleBookAction = (obj) => async (dispatch) => {
  const pending = deleteBook(id);
  toast.promise(pending, {
    pending: "PLEASE WAIT..",
    success: pending.message,
  });

  const { status, message } = await pending;
  toast[status](message);
  console.log(status, message);

  // 2. fetch all update booklist
  dispatch(getAllBookAction(true));
};
