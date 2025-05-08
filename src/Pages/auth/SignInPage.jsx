import React from "react";
import UserSignInForm from "../../components/forms/UserSignInForm";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import loginpage from "../../assets/loginpage.jpg";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row className="justify-content-center w-100">
        {/* Left Side - Login Form */}
        <Col xs={12} md={6} lg={5} className="d-flex align-items-center">
          <Card className="shadow rounded p-4 text-center w-100">
            <Card.Title className="mb-3">Log in</Card.Title>
            <UserSignInForm />

            <div className="text-center my-3">
              Forget Password? <Link to="/forgetPassword">Reset Now</Link>
            </div>
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
