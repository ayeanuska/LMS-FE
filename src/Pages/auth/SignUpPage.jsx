import React from "react";
import UserSignUpForm from "../../components/forms/UserSignUpForm";

const SignUpPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-centre"
      style={{ minHeight: " 100vh" }}
    >
      <div className="card p-3 shadow-lg" style={{ width: "45opx" }}>
        <UserSignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
