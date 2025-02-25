import React from "react";
import { userSingUpInputes } from "../../assets/form-data/userAuthInput.js";
import useForm from "../../hooks/useForm";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput.jsx";

const UserSignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
