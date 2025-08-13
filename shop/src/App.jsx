// import { useState } from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

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
            <div className='col-md-4'>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="Product 1" width="80%" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <Button variant="primary">Buy Now</Button>
            </div>
            <div className='col-md-4'>
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="Product 2" width="80%" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <Button variant="primary">Buy Now</Button>
            </div>
            <div className='col-md-4'>
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="Product 3" width="80%" />
              <h3>Product 3</h3>
              <p>Description of Product 3</p>
              <Button variant="primary">Buy Now</Button>
            </div>
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

export default App
