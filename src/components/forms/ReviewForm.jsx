import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm.js";
import { addNewReviewAction } from "../../features/reviews/reviewAction.js";

export const ReviewForm = ({ borrow, setBurrow }) => {
  const { form, handleOnChange } = useForm({});
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // const [ratings, setRatings] = useState(1);

    const { _id, userId, bookId, userName, title, thumbnail } = borrow;
    const obj = {
      title,
      ...form,
      //   ratings,
      burrowId: _id,
      userId,
      bookId,
      userName,
      thumbnail,
    };

    if (window.confirm("Are you sure , you want to leave this review?")) {
      const action = await dispatch(addNewReviewAction(obj));
      action && setBurrow({});
      alert("Review added successfully");
    }
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Title"
          name="title"
          type="text"
          required
          placeholder="Book Review"
          onChange={handleOnChange}
        />

        <div className="mb-3">
          <label htmlFor=""> Select Star </label>
        </div>

        <CustomInput
          label="Message"
          name="message"
          type="text"
          as="textarea"
          required
          rows="5"
          placeholder="write your review here"
          onChange={handleOnChange}
        />

        <div className="d- grid py-2">
          <Button type="submit"> Submit Review </Button>
        </div>
      </Form>
    </div>
  );
};
