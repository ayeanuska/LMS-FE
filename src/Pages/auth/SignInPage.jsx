import React from "react";
import UserSignInForm from "../../components/forms/UserSignInForm";

const SignInPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Log in</h1>
      <UserSignInForm />
    </div>
  );
};

export default SignInPage;
