import React from 'react'
import Button from 'react-bootstrap/Button';
import img7 from '../assets/hp-6-item-1.jpg'


const Landing = () => {
  return (
<>
<div style={{padding:'200px'}} className='d-flex justify-content-center text-center align-items-center '>
    <div className='col-lg-6 d-flex align-items-center flex-column justify-content-center'  >
        <h6 style={{background:'#EBA6AA',width:'230px',height:'25px' ,color:"#fff" }} className='text-center' >SUMMER COLLECTIONS</h6>
        <h2 style={{fontSize:"70px", color:"black",fontWeight:"600",}} >Collection <br></br> of  Furniture</h2>
        <Button className='mt-5 ms-5' variant="outline-dark">Learn More</Button>


    </div>
    <div className='col-lg-6' >
        <img style={{ width:'600px'}} src={img7} alt="" />

    </div>

</div>
</>  
)
}

export default Landing