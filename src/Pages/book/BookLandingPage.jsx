import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  borrowBookAction,
  getBorrowListAction,
} from "../../features/borrows/borrowAction";
import { getSingleBookAction } from "../../features/books/bookAction";
import { ReviewForm } from "../../components/forms/ReviewForm";
import CustomModal from "../../components/customModal/CustomModal";

const BookLandingPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { borrows } = useSelector((state) => state.borrowInfo);
  const { pubReviews } = useSelector((state) => state.reviewInfo);

  const [borrow, setBorrow] = useState({});
  useEffect(() => {
    if (!books || books.length === 0) {
      dispatch(getSingleBookAction(_id));
    }

    // fetch borrow list if user is loged in
    if (user?._id) {
      dispatch(getBorrowListAction());
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
    isAvailable,
    expectedAvailability,
  } = book;

  // check if user has returened the book or not
  const elligibleBorrow = borrows?.find(
    (item) => item.bookId?._id === _id && item.status === "returned"
  );

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

  // filter reviews for this book only
  const bookReviews = pubReviews?.filter((item) => item.bookId === _id);

  const handleOnReview = () => {
    setBorrow({
      ...elligibleBorrow,
      userName: user.fName,
    });
  };

  return (
    <>
      {borrow?._id && (
        <CustomModal title="Leave a review" closeFunction={setBorrow}>
          <ReviewForm borrow={borrow} setBorrow={setBorrow} />
        </CustomModal>
      )}

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
                disabled={!isAvailable}
                onClick={handleOnBookBurrow}
              >
                {isAvailable
                  ? "Borrow This Book"
                  : expectedAvailability
                  ? "Expected available date: " +
                    expectedAvailability.slice(0, 10)
                  : "Currently unavailable"}
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
              <div className="mb-4">
                {/* Show review form only when user is eligible to review */
                /* condition for user that havent logged in  */}
                {!user?._id && (
                  <p>
                    <Link to="/signin"> Login</Link>
                  </p>
                )}
                {/* condition for user that have logged in but not eligible to review  */}
                {user?._id && !elligibleBorrow && (
                  <p>
                    You need to borrow and return this book before leaving a
                    review.
                  </p>
                )}
                {/* condition for user that have logged in and eligible to review  */}
                {user?._id && elligibleBorrow && (
                  <Button varient="outline-primary" onClick={handleOnReview}>
                    Leave a Review
                  </Button>
                )}
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default BookLandingPage;
