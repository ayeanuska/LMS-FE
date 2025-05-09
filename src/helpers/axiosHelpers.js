import axios from "axios";

import { toast } from "react-toastify";
const authEP = import.meta.env.VITE_APP_ROOT_URL + "/auth"; // change to enc variable
// const authEP = "http://localhost:9002/api/v1/auth";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

//file used to make req to server and get back response from the server
export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshToken,
  showToast,
}) => {
  const headers = {
    Authorization: isPrivate
      ? getAccessJWT()
      : isRefreshToken
      ? getRefreshJWT()
      : null,
  };

  headers.Authorization = "Bearer " + headers.Authorization;

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    //show toast on sucess if enabled
    if (showToast && response.data?.message) {
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.log(error);

    const message = error?.response?.data?.message ?? error.message;
    //show toast on error if enabled
    if (showToast) {
      toast.error(message);
    }

    //handle expired tokn
    // 1. check error messge for "jwt expired"
    if (message === "jwt expired") {
      //   // call renew jwt token
      //   //get access token and store it in seession storage
      const refreshData = await apiProcessor({
        method: "get",
        url: authEP + "/renew-jwt",
        isPrivate: false,
        isRefreshToken: true,
      });

      if (refreshData && refreshData?.status == "success") {
        console.log(refreshData);

        //update sessionStorage
        sessionStorage.setItem("accessJWT", refreshData.accessToken);

        // return original call

        return await apiProcessor({
          method,
          url,
          data,
          isPrivate,
        });
      } else {
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("refreshJWT");
      }
    }

    return {
      status: "error",
      message,
    };
  }
};

export const renewAccessJWT = async () => {
  const { accessJWT } = await apiProcessor({
    method: "get",
    url: authEP + "/renew-jwt",
    isPrivate: true,
    isRefreshJwt: true,
  });

  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};
