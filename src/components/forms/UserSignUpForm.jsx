import React from "react";
import { userSingUpInputes } from "../../assets/form-data/userAuthInput.js";
import useForm from "../../hooks/useForm";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";
import { getSingleBookAction } from "../../features/books/bookAction.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../features/users/userAction.js";

const UserSignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm({});
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      // Replace this with your actual API call or signup logic
      dispatch(registerUserAction(form));

      // Show success toast once signup is complete
      toast.success("Sign up successful!");

      // // If signup is successful, dispatch action
      // dispatch(getSingleBookAction(form._id));

      return { status: "success", message: "Sign up successful!" };
    } catch (error) {
      console.log(error);
      // Show error toast if something goes wrong
      toast.error("Signup failed. Please try again!");
      return { status: "error", message: "Signup failed" };
    }
  };

  return (
    <div>
      <h3>Join our community !</h3>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        {userSingUpInputes.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Form.Group className="mb-3 d-grid" controlId="formBasicEmail">
          <Button type="submit">Sign Up Now</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserSignUpForm;
