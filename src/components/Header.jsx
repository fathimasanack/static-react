import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../assets/logo-black.png'
import img2 from '../assets/header-icon-1.png'
import img3 from '../assets/header-icon-2.png'
import img4 from '../assets/header-icon-3.png'
import Carousel from 'react-bootstrap/Carousel';
import img5 from '../assets/hp-6-slide-bg-1.jpg'
import img6 from '../assets/hp-6-slide-bg-2.jpg'
const Header = () => {
  return (
          <>
            <Navbar expand="lg" className="bg-body-tertiary"style={{height:'80px'}}>
      <Container fluid>
        <Navbar.Brand className='ms-5'  href="#"><img src={img1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px', fontWeight:"500", color:'black' }}
            navbarScroll
          >
            <Nav className='me-5' href="">HOME</Nav>
            <Nav className='me-5' href="">PAGES</Nav>
            <Nav className='me-5' href="">SHOP</Nav>
            <Nav className='me-5' href="">BLOG</Nav>
            <Nav className='me-5' href="">PORTFOLIO</Nav>
            <Nav className='me-5' href="">ELEMENTS</Nav>



           
          
          </Nav>
          <Nav className='me-2' href=""><img src={img2} alt="" /></Nav>
          <Nav className='me-2' href=""><img src={img3} alt="" /></Nav>
          <Nav className='me-5' href=""><img src={img4} alt="" /></Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel indicators={false} data-bs-theme="dark">
      <Carousel.Item>
      <div>
       <img
          className="d-block w-100 "
          src={img5}
          alt="First slide"
        />
       </div>
       <Carousel.Caption style={{top:"200px"}} className=''>

       
       <div style={{marginLeft:'350px'}} className=' d-flex justify-content-center flex-column align-items-center  text-center'>
            <h4 style={{background:"#BB9078",width:"160px",height:"35px"}} >From $510</h4>
            <h1 style={{fontSize:"80px",fontWeight:"700",color:"#333"}}>Furniture Design</h1>
            <h5 style={{fontWeight:"300"}}>DISCOUNT FOR SUMMER 2020</h5>
            <Button className='mt-5' variant="outline-dark">Add to Basket</Button>
          </div>
          
          </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Second slide"
        />
        <Carousel.Caption style={{top:"200px"}} className=''>
        <div style={{marginLeft:'350px'}} className=' d-flex justify-content-center flex-column align-items-center  text-center'>
            <h4 style={{background:"#2563B6",width:"160px",height:"35px"}} >From $205</h4>
            <h1 style={{fontSize:"80px",fontWeight:"700",color:"#333"}}>Interior Decor</h1>
            <h5 style={{fontWeight:"300"}}>LATEST COLLECTION 2020</h5>
            <Button className='mt-5' variant="outline-dark">Add to Basket</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
          
      
           
          </>
  )
}

export default Header