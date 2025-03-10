import { apiProcessor } from "../../helpers/axiosHelpers";
import { loginApi } from "./userAxios";
import { setUser } from "./userSlice";

export const loginAction = (form) => async (dispatch) => {
  //call the login api
  const data = await loginApi(form);

  if (data.status == "success") {
    //update storage sessio for acess
    sessionStorage.setItem("acessJWT", data.accessToken);

    //updating the local storage for refresh
    localStorage.setItem("refreshJWT", data.refreshToken);

    // user store update

    dispatch(setUser(data.user));
  }
};
