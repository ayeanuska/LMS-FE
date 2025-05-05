import React from "react";
import UserSignUpForm from "../../components/forms/UserSignUpForm";
import signUpImage from "../../assets/SignUpPage.jpg"; // Import the image

const SignUpPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-3 shadow-lg"
        style={{ width: "700px", display: "flex", flexDirection: "row" }}
      >
        {/* Image on the left */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "60%" }}
        >
          <img
            src={signUpImage}
            alt="Sign Up"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        {/* Form on the right */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "60%" }}
        >
          <UserSignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
