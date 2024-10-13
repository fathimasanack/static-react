import React from 'react'
import img1 from '../assets/logo-white.png'

const Footer = () => {
  return (
    <>
    <div style={{height:"400px",background:"#333333"}} className=' mt-5 w-100'>
        <div className='d-flex justify-content-around'>
               <div style={{marginTop:"100px"}}>
               <img src={img1} alt="" />
               <p className='mt-4' style={{color:"white"}}>Lorem ipsum dolor sit  adipisicing elit.<br></br> Enim suscipit , ratione dignissimos<br></br> cumque tenetur  reiciendis qui.</p>
               <i class="fa-brands fa-facebook fa-sm me-3 text-light"></i>
               <i class="fa-brands fa-twitter fa-sm me-3 text-light"></i>
               <i class="fa-brands fa-instagram fa-sm me-3 text-light"></i>
               <i class="fa-solid fa-camera-retro fa-sm text-light"></i>
               </div>
               <div style={{marginTop:"100px"}} >
                <h4 className='text-light mb-4'>Contact</h4>
                <li className='mb-2' style={{listStyle:"none"}}>              
                   <i class="fa-solid fa-map fa-sm text-light me-3 "></i><span className='text-light'>No 40 Baria Sreet 133/2</span>
                </li>
                <li className='mb-2' style={{listStyle:"none"}}>             
                   <i class="fa-solid fa-phone fa-sm text-light me-3"></i> <span className='text-light'> + (156) 1800-366-6666</span>             
                </li>
                <li className='mb-2' style={{listStyle:"none"}}><i class="fa-solid fa-envelope fa-sm text-light me-3"></i><span className='text-light'>Eric-82@example.com</span></li>
                <li  style={{listStyle:"none"}}><i class="fa-solid fa-globe fa-sm text-light me-3"></i><span className='text-light'>www.novas.com</span></li>
              
               </div>
               <div style={{marginTop:"100px"}}>
                <h4 className='text-light mb-4'>Profile</h4>
                <li className='mb-2' style={{listStyle:"none"}}><i class="fa-solid fa-user fa-sm text-light me-3"></i><span className='text-light'>My Account</span></li>
                <li className='mb-2' style={{listStyle:"none"}}><i class="fa-solid fa-cart-shopping fa-sm text-light me-3"></i><span className='text-light'>Checkout</span></li>
                <li className='mb-2' style={{listStyle:"none"}}><i class="fa-solid fa-eye fa-sm text-light me-3"></i><span className='text-light'>Order Tracking</span></li>
                <li className='mb-2' style={{listStyle:"none"}}><i class="fa-solid fa-circle-question fa-sm text-light me-3"></i><span className='text-light'>Help & Support</span></li>
               </div>
               <div style={{marginTop:"100px"}}>
               <h4 className='text-light mb-4'>Newsletter</h4>
               <p className='text-light'>Subscribe to our newsletter</p>

               <input placeholder='Your Email' type="text" />
               </div>
            
        </div>

    </div>
    
    </>
  )
}

export default Footer