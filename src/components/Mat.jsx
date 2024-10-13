import React from 'react'
import Card from 'react-bootstrap/Card';
import img14 from '../assets/hp-1-featured-6.jpg'
import img13 from '../assets/shopping-cart-black-icon.png'
import img12 from '../assets/Favorites.png'
import img15 from '../assets/hp-1-featured-7.jpg'
import Badge from 'react-bootstrap/Badge';
import img16 from '../assets/hp-1-featured-8.jpg'
import img17 from '../assets/hp-1-featured-9.jpg'





const Mat = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>


       <div  className='me-5'>

        <Card className='cardShadow' style={{ width: '18rem' }}>
        <div className='d-flex justify-content-between'>

        <img className='mt-4 ms-auto me-3' src={img12} alt="" />
        </div>

      <Card.Img variant="top" src={img14} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>Laundry Bag</Card.Title>
        <Card.Text>
        <div className='d-flex justify-content-between'>
         <div>
          <span className='ms-3'>$37</span>

          </div>
          <div className='border image'>
            <img src={img13} alt="" />
          </div>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div  className='me-5'>

<Card className='cardShadow' style={{ width: '18rem' }}>
<div className='d-flex justify-content-between'>
    <h5>
    <Badge className='mt-4' bg="info">New</Badge>

    </h5>

<img className='mt-4 ms-auto me-3' src={img12} alt="" />
</div>

<Card.Img variant="top" src={img15} />
<Card.Body>
<Card.Title style={{color:"black"}}>Hocko Blanket</Card.Title>
<Card.Text>
<div className='d-flex justify-content-between'>
 <div>
  <span className='ms-3'>$42</span>

  </div>
  <div className='border image'>
    <img src={img13} alt="" />
  </div>
 </div>
</Card.Text>
</Card.Body>
</Card>
</div>
<div  className='me-5'>

<Card className='cardShadow' style={{ width: '18rem' }}>
<div className='d-flex justify-content-between'>

<img className='mt-4 ms-auto me-3' src={img12} alt="" />
</div>

<Card.Img variant="top" src={img16} />
<Card.Body>
<Card.Title style={{color:"black"}}>Tweed Armchair</Card.Title>
<Card.Text>
<div className='d-flex justify-content-between'>
 <div>
  <span className='ms-3'>$31</span>

  </div>
  <div className='border image'>
    <img src={img13} alt="" />
  </div>
 </div>
</Card.Text>
</Card.Body>
</Card>
</div>
<div  className='me-5'>

<Card className='cardShadow' style={{ width: '18rem' }}>
<div className='d-flex justify-content-between'>
<h5>
    <Badge className='mt-4' bg="secondary">New</Badge>

    </h5>

<img className='mt-4 ms-auto me-3' src={img12} alt="" />
</div>

<Card.Img variant="top" src={img17} />
<Card.Body>
<Card.Title style={{color:"black"}}>Low Table/Stool</Card.Title>
<Card.Text>
<div className='d-flex justify-content-between'>
 <div>
  <s>$49</s>
  <span className='ms-3'>$29</span>

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

export default Mat