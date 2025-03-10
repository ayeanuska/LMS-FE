import { Button } from "bootstrap";
import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { BookTable } from "../../components/tables/BookTable";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

const BookList = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Books"));

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
