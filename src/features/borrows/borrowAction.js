import { createBorrowApi, fetchBorrow, returnBook } from "./borrowAxios";
import { getAllBookAction } from "../books/bookAction";
import { setBorrows } from "./borrowSlice";
import { toast } from "react-toastify";

//borrowAction
export const borrowBookAction = (obj) => async (dispatch) => {
  // 1. burrowAxios
  const pending = createBorrowApi(obj);

  toast.promise(pending, {
    pending: "please wait",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    //update the book storre with updated book data
    dispatch(getAllBookAction());
  }
};

export const getBorrowListAction = () => async (dispatch) => {
  try {
    //fetch borrow list
    const pending = fetchBorrow();

    const { status, message, borrows } = await pending;
    console.log("FETCHED BORROWS FROM BACKEND:", borrows);

    if (status === "success") {
      dispatch(setBorrows(borrows));
    } else {
      console.log("Failed to fetch borrows:", message);
    }
  } catch (error) {
    console.error("Error catching borrows:", error.message);
  }
};

//action to return book

export const returnBookAction = (id) => async (dispatch) => {
  // 1. call return BOOk axios

  const pending = returnBook(id);

  toast.promise(pending, { pending: "please wait.." });

  const { status, message } = await pending;
  toast[status], message;

  if (status == "success") {
    dispatch(getBorrowListAction());
    dispatch(getAllBookAction());
  }
};
