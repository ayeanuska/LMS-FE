import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/custom-input/CustomInput";
import useForm from "../../hooks/useForm";
import { bookInputes } from "../../assets/form-data/BookAuthInput";
import { postNewBookAction } from "../../features/books/bookAction";

const initialState = {};
const AddNewBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleOnChange } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    //1. call post new book api
    //2.status check

    // call create new book action

    const success = await dispatch(postNewBookAction(form));
    if (success) {
      navigate("/admin/books");
    }
  };

  return (
    <UserLayout pageTittle="New Book">
      <div>
        <Link to="/admin/books">
          <Button variant="secondary"> Back </Button>
        </Link>
      </div>

      <div className="mt-5">
        {/* form to add new books */}

        <h4 className="py-4 "> Add new book Here </h4>
        <Form onSubmit={handleOnSubmit}>
          {bookInputes?.map((input, i) => (
            <CustomInput
              key={i}
              {...input}
              onChange={handleOnChange}
            ></CustomInput>
          ))}

          <div className="d-grid">
            <Button type="submit"> submit new book </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default AddNewBook;
