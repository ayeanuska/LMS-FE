import react from "react";

const Review = () => {
  return (
    <UserLayout pageTItle="All reviews list">
      <div>
        <div className='"d-flex justify-content-between m-4'></div>\
        <div>30 Reviews foundd!!</div>
      </div>
      <hr />
      <Table stiped bordered hover>
        <tbody>
          <thead>
            <tr>
              <th># </th>
              <th>thumbnail</th>
              <th>Student Name</th>
              <th>Reviews</th>
              <th>Delete</th>
            </tr>
          </thead>
        </tbody>

        {}
      </Table>
    </UserLayout>
  );
};
export default Review;
