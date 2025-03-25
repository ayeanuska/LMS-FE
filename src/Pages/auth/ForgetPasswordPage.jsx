import React, { useRef } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { Alert, Button, Card, Form } from "react-bootstrap";

const ForgetPasswordPage = () => {
  const emailRef = useRef(" ");

  const handleOnSubmit = (e) => {
    e.preventdefault();

    const email = emailRef.current.value;
    console.log(email);
  };

  return (
    <div className="sign-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Forgot password?</Card.Title>
          <p>fill the form below to request otp</p>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@gmail.com"
              passRef={emailRef}
            />

            <div className="d-grid">
              <Button type="submit">Request OTP </Button>
            </div>
          </Form>

          {/* show this form once otp is requested */}
          <div>
            <Alert variant="success">
              we will send you an OTP to you email if email is found in our
              system. Please check your junk/spam folder if you don't see email
              in the inbox
            </Alert>
          </div>

          <div className="text-end my-3">
            Ready to login? <a href="/signin"> Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
