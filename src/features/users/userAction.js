import { renewAccessJWT } from "../../helpers/axiosHelpers";
import { createNewUserApi, fetchUserDetailApi, loginApi } from "./userAxios";
import { setUser } from "./userSlice";

export const registerUserAction = (payload) => async (dispatch) => {
  const res = await createNewUserApi(payload);
  console.log(res);
};

export const loginAction = (form, navigate) => async (dispatch) => {
  //call the login api
  const data = await loginApi({ ...form });
  console.log(data);

  if (data?.status == "success") {
    // update user store.
    dispatch(setUser(data.user));
    //update storage session for acess
    sessionStorage.setItem("accessJWT", data.accessToken);

    //updating the local storage for refresh
    localStorage.setItem("refreshJWT", data.refreshToken);

    navigate("/dashboard");
  }
};

// action to get user object
export const getUserObj = () => async (dispatch) => {
  const { user } = await fetchUserDetailApi();

  //update store
  dispatch(setUser(user));
};

//auto login action
export const autologin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  // access when jwt exists
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }

  // when accessJWT donot exist but refresh JWT exist

  if (refreshJWT) {
    const token = await renewAccessJWT();
    token && dispatch(getUserObj());
  }
};
