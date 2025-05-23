import { fetchReviews, postNewReview, updateReview } from "./reviewAxios";
import { toast } from "react-toastify";
import { setAllReview, setPubReviews, updateReviewStatus } from "./reviewSlice";

export const addNewReviewAction = (obj) => async (dispatch) => {
  const pending = postNewReview(obj);

  toast.promise(pending, {
    pending: "please wait",
  });

  const { status, message } = await pending;

  toast[status](message);
  if (status === "success") {
    return true;
    //fetch the selected book
  }
};

export const updateReviewAction = (obj) => async (dispatch) => {
  const pending = updateReview(obj);

  toast.promise(pending, {
    pending: "Please wait..", 
  });

  const [status, message] = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(updateReviewStatus(obj));
  }
};

// get reviews

export const getReviews = (isPrivate) => async (dispatch) => {
  const { status, reviews } = await fetchReviews(isPrivate);

  if (status) {
    isPrivate
      ? dispatch(setAllReview(reviews))
      : dispatch(setPubReviews(reviews));
  }
};
