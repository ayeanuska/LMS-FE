import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";

import { Button, Form } from "react-bootstrap";

import { userSingInInputes } from "../../assets/form-data/userAuthInput";

import CustomInput from "../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../features/users/userAction";
import { useLocation, useNavigate } from "react-router-dom";
const UserSignInForm = () => {
  const { form, setForm, handleOnChange } = useForm();
  const dispatch = useDispatch();

  // location
  const navigate = useNavigate();
  const location = useLocation();

  // to handle return location
  const { user } = useSelector((state) => state.userInfo);

  // set sendTo location depending upon user url interaction
  const sendTo = location?.state?.from?.location?.pathname || "/dashboard";

  useEffect(() => {
    //  navigate to location where the user travelled from
    user?._id && navigate(sendTo);
  }, [user?._id, navigate, sendTo]);

  const handleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();
    //call login action
    dispatch(loginAction(form, navigate));
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {userSingInInputes?.map((item) => {
          return (
            <CustomInput key={item.name} {...item} onChange={handleOnChange} />
          );
        })}
        <Button type="submit">Log in</Button>
      </Form>
    </div>
  );
};
export default UserSignInForm;
