import { useState } from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Outlet} from 'react-router-dom'
import './App.css'
import Detail from './Detail.jsx'
import Event from './Event.jsx'
import data from './data'

function App() {
  // const [count, setCount] = useState(0)
  let [shoes] = useState(data);

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="/">🍎 AppleShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">Details</Nav.Link>
              <Nav.Link href="/pricing">Events</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home shoes={shoes}/>} />
          <Route path="/about" element={<h1>About Page <Outlet></Outlet> </h1>}>
            <Route path="member" element={<h1>Member Page</h1>} />
            <Route path="location" element={<h1>Location Page</h1>} />
          </Route>
          <Route path="/detail" element={<Detail></Detail>} />
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        
      </div>
    </>
  )
}
function Home(props) {
  return (
    <>
     <div className='main-bg' />
        <Container>
          <div className='row text-center'>
            {
              props.shoes.map((shoe, i) => {
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
