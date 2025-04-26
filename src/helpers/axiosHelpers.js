import axios from "axios";
import { CgLayoutGrid } from "react-icons/cg";
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

    return response.data;
  } catch (error) {
    console.log(error);
    // 1. check error messge for "jwt expired"
    if (error?.response?.data?.message == "jwt expired") {
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

    const message = error?.response?.data?.message ?? error.message;
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
