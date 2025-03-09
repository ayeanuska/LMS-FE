import React from "react";
import UserSignInForm from "../../components/forms/UserSignInForm";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import loginpage from "../../assets/loginpage.jpg";

const SignInPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row className="justify-content-center w-100">
        {/* Left Side - Login Form */}
        <Col xs={12} md={6} lg={5} className="d-flex align-items-center">
          <Card className="shadow rounded p-4 text-center w-100">
            <Card.Title className="mb-3">Log in</Card.Title>
            <UserSignInForm />
          </Card>
        </Col>

        {/* Right Side - Image */}
        <Col
          xs={12}
          md={6}
          lg={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src={loginpage}
            alt="Login Icon"
            fluid
            className="rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
