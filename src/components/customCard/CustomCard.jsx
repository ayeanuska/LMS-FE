import Card from "react-bootstrap/Card";

export const CustomCard = ({
  _id,
  thumbnail,
  title,
  author,
  publishedYear,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export const CustomCard2 = ({
  _id,
  thumbnail,
  title,
  author,
  publishedYear,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>
          {author} - {publishedYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
