import React from 'react'
import img14 from '../assets/hp-6-item-2.jpg'
import Button from 'react-bootstrap/Button';


const Features = () => {
  return (
<>
<div style={{padding:'200px'}} className='d-flex justify-content-center text-center align-items-center '>
<div className='col-lg-6' >
        <img style={{ width:'600px'}} src={img14} alt="" />

    </div>
    <div className='col-lg-6 d-flex align-items-center flex-column justify-content-center'  >
        <h6 style={{background:'#88CCE2',width:'180px',height:'25px' ,color:"#fff" }} className='text-center ' >DESIGN TRENDS</h6>
        <h2 style={{fontSize:"70px", color:"black",fontWeight:"600",}} >Beautiful <br></br> Impression</h2>
        <Button className='mt-5 ms-5' variant="outline-dark">Learn More</Button>


    </div>
   

</div>

</> 
 )
}

export default Features