import React from 'react'
import Card from 'react-bootstrap/Card';
import img8 from '../assets/hp-1-featured-11.jpg'
import img9 from '../assets/hp-1-featured-2.jpg'
import img10 from '../assets/hp-1-featured-3.jpg'
import img11 from '../assets/hp-1-featured-4.jpg'
import Badge from 'react-bootstrap/Badge';
import img12 from '../assets/Favorites.png'
import  img13 from '../assets/shopping-cart-black-icon.png'

const Cards = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
   <div  className='me-5'>
   <Card className='cardShadow' style={{ width: '18rem' }} >
   <div className='d-flex justify-content-between'>
   <h5>
  <Badge className='mt-4' bg="secondary">New</Badge>
      </h5>
      <img className='mt-4 me-3' src={img12} alt="" />
   </div>
      <Card.Img  variant="top" src={img8} />
   <Card.Body >
        <Card.Title style={{color:"black"}}>Ta-bl Side Table</Card.Title>
        <Card.Text>
         <div className='d-flex justify-content-between'>
         <div>
          <s>$35</s>
          <span className='ms-3'>$22</span>

          </div>
          <div className='border image'>
            <img  src={img13} alt="" />
          </div>
         </div>


        </Card.Text>
      </Card.Body>
    </Card>
   </div>
  <div className='me-5'>
  <Card className='cardShadow' style={{ width: '18rem' }}>
  <div className='d-flex justify-content-between'>
   {/* <h5>
  <Badge className='mt-4' bg="secondary">New</Badge>
      </h5> */}
      <img className='mt-4 ms-auto me-3' src={img12} alt="" />
   </div>
      <Card.Img variant="top" src={img9} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>Pendant Lamp</Card.Title>
        <Card.Text>
        <div className='d-flex justify-content-between'>
         <div>
          <span className='ms-3'>$45</span>

          </div>
          <div className='border image'>
            <img src={img13} alt="" />
          </div>
         </div>
         
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
 <div className='me-5'>
 <Card className='cardShadow' style={{ width: '18rem' }}>
 <div className='d-flex justify-content-between'>
   <h5>
  <Badge className='mt-4' bg="info">New</Badge>
      </h5>
      <img className='mt-4 me-3' src={img12} alt="" />
   </div>
      <Card.Img variant="top" src={img10} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>Magnolia Dream</Card.Title>
        <Card.Text>
        <div className='d-flex justify-content-between'>
         <div>
          <span className='ms-3'>$18</span>

          </div>
          <div className='border image'>
            <img src={img13} alt="" />
          </div>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>
 </div>
   <div>
   <Card className='cardShadow' style={{ width: '18rem' }}>
   <div className='d-flex justify-content-between'>
   {/* <h5>
  <Badge className='mt-4' bg="secondary">New</Badge>
      </h5> */}
      <img className='mt-4 ms-auto me-3' src={img12} alt="" />
   </div>
      <Card.Img variant="top" src={img11} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>Elephant Chair</Card.Title>
        <Card.Text>
        <div className='d-flex justify-content-between'>
         <div>
          <span className='ms-3'>$56</span>

          </div>
          <div className='border image'>
            <img src={img13} alt="" />
          </div>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
    </div>
 
    </>
  )
}

export default Cards