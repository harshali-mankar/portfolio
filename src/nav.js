import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <div className="navbar-header d-flex d-none d-md-block">
          <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" className="ml-auto" /> */}
        </div>
        {/* <Navbar.Collapse id="navbarScroll"> */}
        <Navbar>
          <Nav
            className=" my-2 my-lg-0 "
            // style={{ maxHeight: "100px" }}
            // navbarScroll
          >
            <Nav.Link href="#scrollspyHeading1">Home</Nav.Link>
            <Nav.Link href="#scrollspyHeading2">About Me</Nav.Link>
            <Nav.Link href="#scrollspyHeading3">Portfolio</Nav.Link>
            <Nav.Link href="#scrollspyHeading4">Contact</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
