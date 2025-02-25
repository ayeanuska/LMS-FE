import React from "react";
import useForm from "../../hooks/useForm";

import { Button, Form } from "react-bootstrap";

import { userSingInInputes } from "../../assets/form-data/userAuthInput";
import { apiProcessor } from "../../helpers/axiosHelpers";
import CustomInput from "../custom-input/CustomInput";
const UserSignInForm = () => {
  const { form, setForm, handleOnChange } = useForm();

  const handleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();

    //call the login api
    const data = await apiProcessor({
      method: "post",
      url: "http://localhost:9002/api/v1/auth/login",
      data: { email: form.email, password: form.password },
      isPrivate: false,
      isRefreshToken: false,
    });

    console.log(data);

    if (data.status == "success") {
      //update storage sessio for acess
      sessionStorage.setItem("acessJWT", data.accessToken);

      //updating the local storage for refresh
      localStorage.setItem("refreshJWT", data.refreshToken);
    }
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {userSingInInputes.map((item) => {
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
