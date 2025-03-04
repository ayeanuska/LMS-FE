import { fetchAllBookApi } from "./bookAxios";
import { setBooks } from "./bookSlice";

export const getAllBookAction = () => async (dispatch) => {
  //   const dispatch = useDispatch();
  const response = await fetchAllBookApi();

  //update the book store
  dispatch(setBooks(response.books));
};
