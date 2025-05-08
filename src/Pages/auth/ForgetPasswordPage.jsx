import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { reqPassResetApi } from "../../features/users/userAxios";

const initialState = {};
const timeToReqOtpAgain = 20; //60s
const ForgetPasswordPage = () => {
  const emailRef = useRef(" ");
  const [showPassResetForm, setShowPassResetForm] = useState(false);
  const [isOtpPending, setIsOtpPending] = useState(false);
  const [isOtpBtnDisabled, setIsOtpBtnDisabled] = useState(false);

  const [counter, setCounter] = useState(0);
  const { form, passwordErrors, handleOnChange } = useForm(initialState);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsOtpBtnDisabled(false);
    }
  }, [counter]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    // call api to reset password
    setIsOtpPending(true);
    setIsOtpBtnDisabled(true);

    const response = await reqPassResetApi({ email });
    console.log(response);
    if (response?.status === "success") {
      setShowPassResetForm(true);
    }
    setIsOtpPending(false);
    setCounter(timeToReqOtpAgain);
  };

  const handleOnPasswordResetSubmit = () => {
    e.preventDefault();
  };
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light px-2">
      <Card className="w-100 shadow-lg rounded-4" style={{ maxWidth: "22rem" }}>
        <Card.Body className="bg-white rounded-4">
          <Card.Title className="text-center fs-4 fw-semibold text-primary">
            Forgot password?
          </Card.Title>
          <p className="text-center text-muted">
            fill the form below to request OTP
          </p>
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

            <div className="d-flex justify-content-center mt-3">
              <Button
                type="submit"
                size="sm"
                variant="primary"
                className="px-4"
                disabled={isOtpBtnDisabled}
              >
                {isOtpPending ? (
                  <Spinner variant="border" />
                ) : counter > 0 ? (
                  `Request OTP in ${counter}`
                ) : (
                  "Request OTP"
                )}
              </Button>
            </div>
          </Form>

          {showPassResetForm && (
            <>
              <hr />
              {/* show this form once otp is requested */}
              <div>
                <Alert variant="success">
                  we will send you an OTP to you email if email is found in our
                  system. Please check your junk/spam folder if you don't see
                  email in the inbox
                </Alert>
              </div>

              <Form onSubmit={handleOnPasswordResetSubmit}>
                <CustomInput
                  label="OTP"
                  name="otp"
                  type="number"
                  required
                  placeholder="1234"
                  onChange={handleOnChange}
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  required
                  placeholder="******"
                  onChange={handleOnChange}
                />
                <CustomInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="Password"
                  required
                  placeholder="******"
                  onChange={handleOnChange}
                />

                <div className="py-3">
                  <ul className="text-danger">
                    {passwordErrors.length > 0 &&
                      passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
                  </ul>
                </div>

                <div className="d-grid">
                  <Button type="submit" disabled={passwordErrors.length}>
                    Reset Password
                  </Button>
                </div>
              </Form>
            </>
          )}

          <div className="text-center  my-3">
            Ready to login? <a href="/signin"> Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
