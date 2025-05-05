import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";
import { setSelectedBook } from "../../features/books/bookSlice";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/custom-input/CustomInput";
import { bookInputes } from "../../assets/form-data/BookAuthInput";
import { updateSingleBookAction } from "../../features/books/bookAction";

const EditBook = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();

  const { form, handleOnChange, setForm } = useForm({});
  const navigate = useNavigate();

  const { books, selectedBook } = useSelector((state) => state.bookInfo);

  // update selected book
  useEffect(() => {
    dispatch(setSelectedBook(books.find((item) => item._id == _id)));
  }, []);

  useEffect(() => {
    if (selectedBook) setForm(selectedBook);
  }, [selectedBook]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { __v, createdAt, isbn, updatedAt, ...rest } = form;

    if (window.confirm("Are you sure you want to make this changes?")) {
      const upadatedBookData = { ...rest, _id };
      const data = await dispatch(updateSingleBookAction(upadatedBookData));
      if (data.status == "success") {
        navigate("/admin/books");
      }
    }
  };
  return (
    <UserLayout pageTitle={"Update book"}>
      <div className="mt-5">
        {/* form here  */}

        <h4 className="py-4">Update this book</h4>

        <Form onSubmit={handleOnSubmit}>
          <Form.Check
            name="status"
            onChange={handleOnChange}
            checked={form?.status === "active"}
            type="switch"
            id="custom-switch"
            label={form?.status?.toUpperCase()}
            className={
              form?.status === "active"
                ? "mb-3 text-success"
                : "mb-3 text-danger"
            }
          />
          {bookInputes?.map((input, i) => (
            <CustomInput
              disabled={input.name === "isbn"}
              key={i}
              {...input}
              onChange={handleOnChange}
              value={form?.[input.name]}
            />
          ))}

          <div className="d-grid">
            <Button type="submit">Update Book</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default EditBook;
