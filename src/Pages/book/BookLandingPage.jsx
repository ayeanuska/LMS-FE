import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { borrowBookAction } from "../../features/borrows/borrowAction";
import { getSingleBookAction } from "../../features/books/bookAction";

const BookLandingPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!books || books.length === 0) {
      dispatch(getSingleBookAction(_id));
    }
  }, [dispatch, _id, books]);

  const book = books?.find((item) => item._id === _id);

  if (!book) {
    return (
      <Spinner
        animation="border"
        variant="primary"
        className="d-block mx-auto my-5"
      />
    );
  }

  const {
    title,
    thumbnail,
    author,
    publishedYear,
    description,
    availabiliy,
    expectedAvailable,
  } = book;

  const handleOnBookBurrow = () => {
    try {
      if (window.confirm("Are you sure you want to borrow this book?")) {
        dispatch(
          borrowBookAction({
            title,
            thumbnail,
            bookId: _id,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="g-4 py-4">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={thumbnail}
            alt={title}
            className="img-fluid"
            style={{
              maxWidth: "300px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-3">{title}</h1>
          <p className="text-muted mb-4">
            {author} - <span className="text-primary">{publishedYear}</span>
          </p>
          <p className="mt-5 text-muted">{description.slice(0, 130)}...</p>
          <div className="mt-3">
            {user?._id ? (
              <Button
                variant="primary"
                disabled={!availabiliy}
                onClick={handleOnBookBurrow}
              >
                {availabiliy
                  ? "Borrow This Book"
                  : "Expected available date: " +
                    expectedAvailable.slice(0, 10)}
              </Button>
            ) : (
              <Link to="/signin" state={{ from: { location } }}>
                <Button variant="outline-primary" className="mt-3">
                  Login to borrow
                </Button>
              </Link>
            )}
          </div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col>
          <Tabs
            defaultActiveKey="description"
            id="book-tabs"
            className="mb-3 border-top border-2 pt-3"
          >
            <Tab eventKey="description" title="Description">
              <p>{description}</p>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              {/* Reviews Section */}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default BookLandingPage;
