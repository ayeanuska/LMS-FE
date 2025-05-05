import React from "react";
import { userSingUpInputes } from "../../assets/form-data/userAuthInput.js";
import useForm from "../../hooks/useForm";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import { getSingleBookAction } from "../../features/books/bookAction.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  getUserObj,
  registerUserAction,
} from "../../features/users/userAction.js";
import { useNavigate } from "react-router-dom";

const UserSignUpForm = () => {
  const { form, setForm, handleOnChange, passwordErrors } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password)
      return alert("Password do not match");

    try {
      // api call - signup api
      dispatch(registerUserAction(form));

      // Show success toast once signup is complete
      toast.success("Sign up successful!");

      //redirect to login page with 2s delay so that user can see the toast
      setTimeout(() => navigate("/signin"), 2000);

      return { status: "success", message: "Sign up successful!" };
    } catch (error) {
      console.log(error);

      // Show error toast if something goes wrong
      toast.error(error.message || "Signup failed. Please try again!");
      return { status: "error", message: "Signup failed" };
    }
  };

  console.log(passwordErrors);
  return (
    <div>
      <h3>Join our community !</h3>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        {userSingUpInputes.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div className="py-3">
          <ul className="text-danger">
            {passwordErrors.length > 0 &&
              passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>
        </div>
        <Form.Group className="mb-3 d-grid" controlId="formBasicEmail">
          <Button type="submit" disabled={passwordErrors.length}>
            Sign Up Now
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserSignUpForm;
