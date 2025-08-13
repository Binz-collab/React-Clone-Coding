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
        
      </div>
    </>
  )
}

export default App
