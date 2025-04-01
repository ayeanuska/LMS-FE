import axios from "axios";

const authEP = "http://localhost:9002/api/v1/auth";

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
      ? getRefreshJWT() =false
      : null,
  };
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error?.message);
    //1. check error messge for "jwt expired"
    if (error?.response?.data?.message == "jwt expired") {
      // call renew jwt token
      //get access token and store it in seession storage
      const refreshData = apiProcessor({
        method: "get",
        utl: authEP + "/renew-jwt",
        isPrivate: false,
        isRefreshToken: true,
      });

      if (refreshData && refreshData?.status == "success") {
        //update sessionStorage
        sessionStorage.seItem("accessJWT", refreshData.accessToken);

        // return original call

        return apiProcessor({
          method,
          url,
          data,
          isPrivate,
        });
      } else {
        return {
          status: "error",
          message: "error reading refresh token",
        };
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
