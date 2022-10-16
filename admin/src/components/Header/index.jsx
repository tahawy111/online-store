import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
<<<<<<< HEAD
import { logout } from "../../actions/user.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };
=======
import { useDispatch } from "react-redux";
import { logout } from "../../slices/userSlice";

function Header() {
  const dispatch = useDispatch();
>>>>>>> frontend
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tahawy Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
<<<<<<< HEAD
              <Button variant="outline-danger" onClick={handleLogout}>
=======
              <Button
                variant="outline-danger"
                onClick={() => dispatch(logout())}
              >
>>>>>>> frontend
                Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
