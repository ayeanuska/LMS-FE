import { toast } from "react-toastify";
import {
  deleteBook,
  fetchAllBookApi,
  fetchPubBookApi,
  fetchSingleBook,
  postNewBookApi,
  updateABook,
} from "./bookAxios";
import { setBooks, setPubBooks, setSelectedBook } from "./bookSlice";
import { CgLayoutGrid } from "react-icons/cg";
import e from "cors";

export const getAllBookAction =
  (isPrivate = false) =>
  async (dispatch) => {
    //  1. fetch data
    const pending = fetchAllBookApi(isPrivate);
    //
    const { books, status } = await pending;

    if (status === "success" && books) {
      //update the book store
      dispatch(setBooks(books));
    }
  };

export const getAllPublicBookAction = () => async (dispatch) => {
  try {
    const { books, status } = await fetchPubBookApi();

    if (status === "success" && books) {
      //update the book store
      dispatch(setPubBooks(books));
    }
  } catch (error) {
    console.error("Error fetching public books:", error);
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

    dispatch(getAllBookAction());
    return true;
  } else {
    return false;
  }
};

export const getSingleBookAction = (_id) => async (dispatch) => {
  try {
    const { response } = await fetchSingleBook(_id);
  } catch (error) {}

  if (status) {
    dispatch(setSelectedBook(book));
  } else {
    console.error("Failed to fetch single book");
  }
};

export const updateSingleBookAction = (obj) => async (dispatch) => {
  try {
    delete obj.expectedAvailable;
    delete obj.isAvailable;
    delete obj.averageRating;

    const pending = updateABook(obj);
    toast.promise(pending, {
      pending: "PLEASE WAIT...",
    });

    const { status, message } = await pending;
    toast[status](message);

    status === "success" && dispatch(getSingleBookAction(obj._id));
    return { status, message };
  } catch (error) {
    toast.error("An erorr occured while updating book");
    return { status: "error", message: error.message };
  }
};

export const deleteSingleBookAction = (id) => async (dispatch) => {
  const pending = deleteBook(id);
  toast.promise(pending, {
    pending: "PLEASE WAIT..",
    success: pending.message,
  });

  const { status, message } = await pending;
  toast[status](message);
  console.log(status, message);

  // 2. fetch all update booklist
  dispatch(getAllBookAction());
};
