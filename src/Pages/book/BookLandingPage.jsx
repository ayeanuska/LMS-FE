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
  }, [dispatch, books]);

  const book = books?.find((item) => item._id === _id);
  // console.log("book", book);

  if (!book) {
    return <Spinner animation="border" variant="primary" />;
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
      if (window.confirm("Are you sure, you want to burrow this book?")) {
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
      <Row className="g-2">
        <Col md={6}>
          <div className="m-auto" style={{ maxWidth: "450px" }}>
            <img src={thumbnail} alt="" width={"100%"} />
          </div>
        </Col>
        <Col md={6}>
          <h1>{title}</h1>
          <p>
            {author} - {publishedYear}
          </p>
          {/* <Stars stars={avgRatings} totalReviews={bookReviews.length} /> */}
          <p className="mt-5">{description.slice(0, 130)}...</p>
          <div className="">
            {user?._id ? (
              <Button disabled={!availabiliy} onClick={handleOnBookBurrow}>
                {availabiliy
                  ? "Burrow This Book"
                  : "Expected available date: " +
                    expectedAvailable.slice(0, 10)}
              </Button>
            ) : (
              <Link
                to="/signin"
                className=""
                state={{
                  from: { location },
                }}
              >
                <Button>Login to burrow</Button>
              </Link>
            )}
          </div>
        </Col>
      </Row>
      <Row className="py-5 ">
        <Col>
          {/* tab bar */}

          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              {description}
            </Tab>

            <Tab eventKey="reviews" title="Reviews">
              {/* <ReviewBlock pubReviews={pubReviews} /> */}
            </Tab>
          </Tabs>

          {/* content area  */}
        </Col>
      </Row>
    </>
  );
};

export default BookLandingPage;
