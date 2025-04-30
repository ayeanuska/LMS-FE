import React, { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { BookTable } from "../../components/tables/BookTable";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { Button } from "react-bootstrap";
import { getAllBookAction } from "../../features/books/bookAction";

const BookList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  // const [book, setBooks] = useState([]);

  // const { books } = useSelector((state) => state.bookInfo);

  // useEffect(() => {
  //   dispatch(setMenu("Books"));
  //   //fetch all books for admin
  //   if (book.length === 0) {
  //     dispatch(getAllBookAction());
  //     setBooks(books);
  //     console.log("fetched");
  //   }
  // }, [dispatch, book]);
  const [displayBooks, setDisplayBook] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);
  useEffect(() => {
    setDisplayBook(books);
  }, [dispatch, books]);

  useEffect(() => {
    dispatch(getAllBookAction());
  }, [user._id]);

  return (
    <UserLayout pageTitle={"Book List"}>
      {/* Button here  */}

      <div className="text-end mb-5">
        <Link to="/admin/books/new">
          <Button variant="primary">
            <MdOutlineAddBox /> Add New Book
          </Button>
        </Link>
      </div>
      {/* table here */}
      <BookTable books={displayBooks} />
    </UserLayout>
  );
};

export default BookList;
