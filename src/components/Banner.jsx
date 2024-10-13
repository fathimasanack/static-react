import React from 'react'
import img1 from '../assets/hp-6-banner-1.jpg'
import img2 from '../assets/hp-6-banner-2.jpg'

const Banner = () => {
  return (
    <>
    <div style={{marginTop:"250px"}} className='d-flex justify-content-center align-items-center '>
      <div className='col-lg-6 d-flex justify-content-center align-items-center'>
        <img style={{width:"600px"}} className='position-absolute ' src={img1} alt="" />
        <h1 style={{top:"-50px",fontSize:"40px",color:"black",fontWeight:"500",marginRight:"150px"}} className=' position-relative  '>HOT DEALS</h1>
        <h4 style={{color:"black",marginRight:"120px"}} className='position-absolute text-center '>Sale off 20% discount today</h4>
        <h6 style={{marginTop:"150px",marginRight:"200px"}} className='position-absolute text-center'>Shop Now<i style={{marginLeft:"20px"}} class="fa-solid fa-arrow-right fa-xs"></i></h6>

      </div>

      <div  className='col-lg-6 d-flex justify-content-center align-items-center'>
        <img className='position-absolute ' style={{width:"600px",marginRight:"100px"}} src={img2} alt="" />
        <h1 style={{top:"-50px",fontSize:"40px",color:"black",fontWeight:"500",marginRight:"150px"}} className=' position-relative  '>EXTRA-15%</h1>
        <h4 style={{color:"black",marginRight:"120px"}} className='position-absolute text-center '>Decorations in the home</h4>
        <h6 style={{marginTop:"150px",marginRight:"200px"}} className='position-absolute text-center'>Shop Now<i style={{marginLeft:"20px"}} class="fa-solid fa-arrow-right fa-xs"></i></h6>






      </div>
    </div>
    
    </>
  )
}

export default Banner