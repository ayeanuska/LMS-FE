import Hero from "../../components/layouts/Hero";
import React, { useEffect, useState } from "react";
// import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { CustomCarousel } from "../../components/customCarosel/CustomCarosel";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { apiProcessor } from "../../helpers/axiosHelpers";
// import { setBooks } from "../../features/books/bookSlice";
import { getAllBookAction } from "../../features/books/bookAction";

const HomePage = () => {
  // const { books } = useSelector((state) => state.bookInfo);

  const { books } = useSelector((state) => state.bookInfo);
  console.log(books);
  const [searchedBooks, setSearchBooks] = useState([]);

  // const objec1 = { key1: "value", key2: "value2" };
  // const objec2 = { key3: "value", key4: "value2" };

  // const object3 = { ...objec1, ...objec2 };

  const dispatch = useDispatch();
  // {
  //   status: "active",
  //   title: "Mastering CSS",
  //   author: "CSS GURU",
  //   isbn: "12345668",
  //   publishedYear: 1995,
  //   thumbnail: "https://randomuser.me/api/portraits/women/44.jpg",
  //   description: "Advanced techniques in CSS.",
  //   isAvailable: true,
  //   expectedAvailable: null,
  //   createdAt: "2024-11-27T00:41:30.357Z",
  //   updatedAt: "2024-11-27T00:41:30.357Z",
  // },
  // {
  //   status: "active",
  //   title: "Mastering CSS",
  //   author: "CSS GURU",
  //   isbn: "12345668",
  //   publishedYear: 1995,
  //   thumbnail: "https://randomuser.me/api/portraits/women/44.jpg",
  //   description: "Advanced techniques in CSS.",
  //   isAvailable: true,
  //   expectedAvailable: null,
  //   createdAt: "2024-11-27T00:41:30.357Z",
  //   updatedAt: "2024-11-27T00:41:30.357Z",
  // },
  // ]);

  // useEffect(() => {
  //   setSearchBooks(books);
  // }, [books]);

  //action to fetch books
  const fetchBooks = async () => {
    try {
      dispatch(getAllBookAction());
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSearch = (e) => {
    const { value } = e.target;
    setSearchBooks(
      books.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // use effects
  // call the fetchbook action
  useEffect(() => {
    fetchBooks();
  }, []);

  // trigger update  of the seracg book when bookStore.books is updated
  useEffect(() => {
    setSearchBooks(books);
  }, [books]);
  console.log(searchedBooks);
  return (
    <>
      <Hero />
      <CustomCarousel />

      {/* book list  */}

      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label htmlFor="">{searchedBooks.length} books found!</label>
            <div>
              <Form.Control
                onChange={handleOnSearch}
                placeholder="search by book name .. "
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="mb-4">
          <Col className="d-flex gap-4 flex-wrap">
            {searchedBooks.map(
              (book) =>
                book.status === "active" && (
                  <Link key={book._id} to={"/book/" + book._id}>
                    <CustomCard {...book} />
                  </Link>
                )
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
