import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Links, Navigate, useNavigate } from "react-router-dom";
import { resetUser } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/lmslogo.jpg";

export const Header = () => {
  const { user } = useSelector((store) => store.userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Navbar expand="md" className="bg-dark  text-white" variant="dark">
      <Container>
        <Link to="/">
          <img src={logo} width="50px" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            {user && user._id ? (
              <>
                {/* {private menu} */}
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <Link
                  className="nav-link"
                  onClick={() => {
                    //clear local storage and session storage add it to user action

                    //reset user store
                    dispatch(resetUser());
                    navigate("/");
                  }}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                {/* pubic menus */}
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
