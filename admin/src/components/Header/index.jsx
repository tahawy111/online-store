import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { menuOpenState } from "../../slices/mainSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <AiOutlineMenu
            color="white"
            className="me-1"
            size={30}
            onClick={() => dispatch(menuOpenState())}
          />
          <Navbar.Brand href="#home">Online Store Dashboard</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Button variant="outline-danger">Logout</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
