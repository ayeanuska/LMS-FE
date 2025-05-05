import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout.jsx";

import SignInPage from "../src/Pages/auth/SignInPage.jsx";
import ForgetPasswordPage from "../src/Pages/auth/ForgetPasswordPage.jsx";
import SignUpPage from "../src/Pages/auth/SignUpPage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./Pages/dashboard/Dashboard";

import BookLandingPage from "./Pages/book/BookLandingPage.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBookAction } from "./features/books/bookAction.js";

import AddNewBook from "./Pages/book/AddNewBook.jsx";
import EditBook from "./Pages/book/EditBook.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookList from "./Pages/book/BookList.jsx";
import MyBorrow from "./Pages/borrow/MyBorrow.jsx";
import AllBorrows from "./Pages/borrow/AllBorrows.jsx";
import { autologin } from "./features/users/userAction.js";
import HomePage from "./Pages/home/Homepage.jsx";
import StudentList from "./Pages/students/StudentList.jsx";
import Review from "./Pages/reviews/Review.jsx";
import { getReviews } from "./features/reviews/reviewAction.js";
function App() {
  const { books } = useSelector((state) => state.bookInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookAction());

    dispatch(getReviews(false));
    //done : autologin dispatch when refreshing page.
    dispatch(autologin());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgetPassword" element={<ForgetPasswordPage />} />

          {/* book landing or book detail page */}
          <Route path="/book/:_id" element={<BookLandingPage />} />
        </Route>
        {/*  only admin pages */}
        <Route path="/admin/books" element={<BookList books={books} />} />
        <Route path="admin/books/new" element={<AddNewBook />} />
        <Route path="/admin/book/edit/:_id" element={<EditBook />} />

        {/* all borrows */}
        <Route path="/admin/all-burrows" element={<AllBorrows />} />
        {/* display student list  */}
        <Route path="/admin/students" element={<StudentList />} />
        <Route path="/admin/reviews" element={<Review />} />

        {/* private routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-books" element={<MyBorrow />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
