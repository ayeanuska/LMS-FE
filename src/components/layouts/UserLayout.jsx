import React from "react";
import { Header } from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "./footer";
import AuthRoute from "../auth/AuthRoute";
import UserSidebar from "./UserSidebar";

export const UserLayout = ({ pageTitle = "default", children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <div>
        {/* header  */}
        <Header />
        <Container fluid>
          <Row>
            <Col md={3} xl={2} className="bg-dark text-light">
              <div className="p-3">
                <div>Welcome Back</div>
                <h3>{user?.fName + " " + user?.lName}</h3>
              </div>
              <hr />
              <UserSidebar />
            </Col>
            <Col>
              <div className="p-2">
                <h3>{pageTitle}</h3>
              </div>
              <hr />
              <main className="main mb-3">{children}</main>
            </Col>
          </Row>
        </Container>

        {/* footer  */}
        <Footer />
      </div>
    </AuthRoute>
  );
};
