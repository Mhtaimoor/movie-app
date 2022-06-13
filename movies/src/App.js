import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from './components/movies';

function App() {
  return (
    <div className="body">
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          Movies Database
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", color: "white" }}
            navbarScroll
          >
            <Nav.Link href="#home" style={{ color: "white" }} active>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "white" }}>
              About
            </Nav.Link>
            <Nav.Link href="#account" style={{ color: "white" }}>
              Account
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Container>
      <h1 style={{ textAlign: "center"}}>Movies Lists</h1>
      <Container  fluid style={{backgroundColor: "lightblue", borderRadius: "1em", padding: "1em"}}>
      
      <Movies />
      
      </Container>
      
    </Container>
    

    </div>
  );
}

export default App;
