import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="cards">
        <div>
          <Card style={{ width: "18rem" ,height:"30rem" , backgroundColor:"#E5FFCC" }}>
            <Card.Body>
              <Card.Title>Card Number 1</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">one</Card.Subtitle>
              <Card.Text>this is the first card</Card.Text>
              <Card.Link href="#">go</Card.Link>
              <Card.Link href="#">click</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem",height:"30rem" , backgroundColor:"#E5FFCC" }}>
            <Card.Body>
              <Card.Title>Card Number 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">two</Card.Subtitle>
              <Card.Text>this is the second card</Card.Text>
              <Card.Link href="#">go</Card.Link>
              <Card.Link href="#">click</Card.Link>
              
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" , height:"30rem" , backgroundColor:"#E5FFCC" }}>
            <Card.Body>
              <Card.Title>Card Number 3</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">three</Card.Subtitle>
              <Card.Text>this is the third card</Card.Text>
              <Card.Link href="#">go</Card.Link>
              <Card.Link href="#">click</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
