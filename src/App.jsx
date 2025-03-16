import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout.jsx";

import SignInPage from "../src/Pages/auth/SignInPage.jsx";
import SignUpPage from "../src/Pages/auth/SignUpPage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./Pages/dashboard/Dashboard";
import { UserLayout } from "./components/layouts/UserLayout";
// import PizzaPage from "./Pages/pizzaPage/PizzaPage.jsx";
import BookLandingPage from "./Pages/book/BookLandingPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBookAction } from "./features/books/bookAction.js";
import BookList from "./Pages/book/bookList.jsx";
import AddNewBook from "./Pages/book/AddNewBook.jsx";

function App() {
  // return <PizzaPage />;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookAction());
  });

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* book landing or book detail page */}
          <Route path="/book/:_id" element={<BookLandingPage />} />
        </Route>

        {/*  only admin pages */}
        <Route path="/admin/books" element={<BookList />} />
        <Route path="admin/books/new" element={<AddNewBook />} />
        {/* <Route path="admin/book/edit/:id" element={<EditBook />} />  */}

        {/* private routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
