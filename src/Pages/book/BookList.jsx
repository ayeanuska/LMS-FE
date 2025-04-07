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
  const [book, setBooks] = useState([]);

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    dispatch(setMenu("Books"));
    //fetch all books for admin
    dispatch(getAllBookAction());
  }, [dispatch]);
  useEffect(() => {
    setBooks(books);
  }, [books]);

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
      <BookTable books={book} />
    </UserLayout>
  );
};

export default BookList;
