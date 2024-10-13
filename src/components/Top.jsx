import React from 'react'
import img1 from '../assets/hp-6-list-1.jpg'
import img2 from '../assets/shopping-cart-black-icon.png'
import img3 from '../assets/Favorites.png'
import img4 from '../assets/hp-6-list-3.jpg'
import img5 from '../assets/hp-6-list-5.jpg'
import img6 from '../assets/hp-6-list-2.jpg'
import img7 from '../assets/hp-6-list-4.jpg'
import img8 from '../assets/hp-6-list-6.jpg'
const Top = () => {
  return (
<>

<div  style={{marginTop:"200px"}}className='d-flex justify-content-around '>
  <div className='d-flex justify-content-between' style={{width:"300px"}}> 
    <h4><u>New Arrivals</u></h4>
    <i class="fa-solid fa-chevron-left fa-sm mt-3 ms-2"></i>
    <i   class="fa-solid fa-chevron-right fa-sm mt-3 me-3"></i>
    </div>
    <div className='d-flex justify-content-between' style={{width:"300px"}}> 
    <h4><u>Best Sellers</u></h4>
    <i class="fa-solid fa-chevron-left fa-sm mt-3 ms-2"></i>
    <i   class="fa-solid fa-chevron-right fa-sm mt-3 me-3"></i>
    </div>
    <div className='d-flex justify-content-between' style={{width:"300px"}}> 
    <h4><u>Item Sale</u></h4>
    <i class="fa-solid fa-chevron-left fa-sm mt-3 ms-2"></i>
    <i   class="fa-solid fa-chevron-right fa-sm mt-3 me-5"></i>
    </div>
    
  </div>

  <div className='d-flex justify-content-around'>
  <div className='d-flex justify-content-between mt-5' style={{width:"310px"}}>
    <div><img height={'130px'} src={img1} alt="" style={{border:"1px solid"}} /></div>
    <div>
      <h5 style={{color:"black"}}>Cushion Cover</h5>
      <p style={{color:"black"}}>$12</p>
      <span><img className='border img1 ' src={img3} alt="" /></span> <span><img  className='border img1' src={img2} alt="" /></span>
    </div>
  </div>

  <div className='d-flex justify-content-between mt-5' style={{width:"310px"}}>
    <div><img height={'130px'} src={img4} alt="" style={{border:"1px solid"}} /></div>
    <div>
      <h5 style={{color:"black"}}>Forest Vase B</h5>
      <p style={{color:"black"}}>$45</p>
      <span><img  className='border img1'src={img3} alt="" /></span> <span><img className='border img1' src={img2} alt="" /></span>
    </div>
  </div>

  <div className='d-flex justify-content-between mt-5' style={{width:"310px"}}>
    <div><img height={'130px'} src={img5} alt="" style={{border:"1px solid"}} /></div>
    <div>
      <h5 style={{color:"black"}}> Procelain Set</h5>
      <p style={{color:"black"}}>$124</p>
      <span><img className='border img1' src={img3} alt="" /></span> <span><img className='border img1' src={img2} alt="" /></span>
    </div>
  </div>
  </div>

  <div className='d-flex justify-content-around' >
  <div className='d-flex justify-content-between mt-5' style={{width:"310px"}}>
    <div><img height={'130px'} src={img6} alt="" style={{border:"1px solid"}} /></div>
    <div>
      <h5 style={{color:"black"}}>Planting Light</h5>
      <p style={{color:"black"}}>$41</p>
      <span><img className='border img1 ' src={img3} alt="" /></span> <span><img className='border img1' src={img2} alt="" /></span>
    </div>
  </div>

  <div className='d-flex justify-content-between mt-5' style={{width:"310px"}}>
    <div><img height={'130px'} src={img7} alt="" style={{border:"1px solid"}} /></div>
    <div>
      <h5 style={{color:"black"}}> A4 Oak Frame</h5>
      <p style={{color:"black"}}>$28</p>
      <span><img className='border img1' src={img3} alt="" /></span> <span><img className='border img1' src={img2} alt="" /></span>
    </div>
  </div>

  <div className='d-flex justify-content-between mt-5' style={{width:"310px"}}>
    <div><img height={'130px'} src={img8} alt="" style={{border:"1px solid"}} /></div>
    <div>
      <h5 style={{color:"black"}} className='me-3'>Casia  Table</h5>
      <p style={{color:"black"}}>$12</p>
      <span><img className='border img1 ' src={img3} alt="" /></span> <span><img className='border img1' src={img2} alt="" /></span>
    </div>
  </div>
  </div>


</> 

)
}

export default Top