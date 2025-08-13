import { useState } from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import './App.css'
import data from './data'

function App() {
  // const [count, setCount] = useState(0)
  let [shoes] = useState(data);

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#home">🍎 AppleShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className='main-bg' />

        <Container>
          <div className='row text-center'>
            {
              shoes.map((shoe, i) => {
                return (
                  <Card i={i} shoe={shoe} key={shoe.id} />
                )
              })
            }
          </div>
        </Container>
        {/* <Container className="mt-5">
          <h1>Welcome to AppleShop</h1>
          <p>Your one-stop shop for all things Apple!</p>
          <Button variant="primary">Shop Now</Button>
        </Container> */}
        
      </div>
    </>
  )
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={props.shoe.image} alt={`Product ${props.i}`} width="80%" />
      <h3>{props.shoe.title}</h3>
      <p>{props.shoe.description}</p>
      <p>{props.shoe.price.toLocaleString()}원</p>
      <p>Rating: {props.shoe.rating.rate} ({props.shoe.rating.count} reviews)</p>
      <Button variant="secondary" className="me-2">View Details</Button>
      <Button variant="success" className="me-2">Add to Cart</Button>
      <Button variant="warning" className="me-2">Wishlist</Button>
      <Button variant="info" className="me-2">Share</Button>
      <Button variant="primary">Buy Now</Button>
    </div>
  )
}

export default App
