import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const BookLandingPage = () => {
  const location = useLocation();
  const { _id } = useParams();

  const { books } = useSelector((store) => store.bookInfo);

  const [book, setBook] = useState({});

  const SelectedBook = books.find((item) => item._id == _id);
  useEffect(() => {
    setBook(SelectedBook);
  });
  return (
    <div>
      <h1>BookLandingPage</h1>
      <div>
        <img src={book.thumbnail} alt="" width="200px" />
      </div>
      <div>Tittle : {book?.title}</div>
      <div>Author : {book?.author}</div>
    </div>
  );
};

export default BookLandingPage;
