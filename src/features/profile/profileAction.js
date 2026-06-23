// called axios fuction to hit backend
// took the response
//dispatched to slice to update the store

import { fetchUserApi } from "./profileAxios";
import { setUser } from "../users/userSlice";

export const getProfileAction = () => async (dispatch) => {
  const { user } = await fetchUserApi();
  dispatch(setUser(user));
};
