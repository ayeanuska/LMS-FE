import React, { useEffect } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../features/reviews/reviewAction";

const Review = () => {
  const { allReviews } = useSelector((state) => state.reviewInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(true));
  }, [dispatch]);
  return (
    <UserLayout pageTitle="All reviews list">
      <div>
        <div className="d-flex justify-content-between m-4"></div>
        <div>{allReviews?.length || 0} Reviews found</div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th># </th>
            <th>Thumbnail</th>
            <th>Student Name</th>
            <th>Reviews</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allReviews?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width="70px" />
              </td>
              <td>
                <h2>{item.userName} </h2>
              </td>
              <td>
                <h2>{item.title?.slice(0, 20) || "Unititled book"}</h2>
                <h2>{item.review || "No review found for this book yet. "}</h2>
              </td>
              <td>
                <button>Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};
export default Review;
