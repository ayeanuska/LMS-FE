import { renewAccessJWT } from "../../helpers/axiosHelpers";
import { fetchUserDetailApi, loginApi } from "./userAxios";
import { setUser } from "./userSlice";

export const loginAction = (form, navigate) => async (dispatch) => {
  //call the login api
  const data = await loginApi({ ...form });
  console.log(data);

  if (data.status == "success") {
    // update user store.
    dispatch(setUser(data.user));
    //update storage session for acess
    sessionStorage.setItem("acessJWT", data.accessToken);

    //updating the local storage for refresh
    localStorage.setItem("refreshJWT", data.refreshToken);

    navigate("/dashboard");
  }
};

// action to get user object
export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserDetailApi();

  //update store
  dispatch(setUser(user));
};

//auto login action
export const autologin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  console.log("Auto login");

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
