import React, { useEffect } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { BookTable } from "../../components/tables/BookTable";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { Button } from "react-bootstrap";

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu("Books"));
  }, [dispatch]);

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
      <BookTable />
    </UserLayout>
  );
};

export default BookList;
