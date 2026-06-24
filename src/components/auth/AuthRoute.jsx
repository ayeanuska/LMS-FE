import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const location = useLocation();

  const { user, isLoading } = useSelector((state) => state.userInfo);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  return user?._id ? (
    children
  ) : (
    <Navigate
      to="/signin"
      state={{
        from: { location },
      }}
    />
  );
};

export default AuthRoute;
