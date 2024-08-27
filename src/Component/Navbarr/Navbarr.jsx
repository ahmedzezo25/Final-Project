// "use client";

import React, { useContext } from 'react'
import style from './Navbarr.module.css'



import logo from '../../assets/freshcart-logo.svg'

import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';


import {  useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext';


export default function Navbarr() {
let Navigate = useNavigate()

let {isLogin, setisLogin} = useContext(UserContext)
let {numberitems} = useContext(CartContext)

function signout() {
  localStorage.removeItem("userToken");
  setisLogin(null)
  Navigate("/login")

}

  

  return   <>
    
{/* <nav className="bg-slate-300 fixed top-0 left-0 right-0 z-50">
    <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
      <div className='flex  items-center'>
        <Link to="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={img} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>


{isLogin != null ? <>
  <ul className='flex gap-5 '>
          <li><Link className='text-gray-500 text-sm ' to="">Home</Link></li>
          <li><Link className='text-gray-500 text-sm' to="cart">Cart</Link></li>
          <li><Link className='text-gray-500 text-sm' to="wishlist">WishList</Link></li>
          <li><Link className='text-gray-500 text-sm' to="brands">Brands</Link></li>
          <li><Link className='text-gray-500 text-sm' to="categares">Categares</Link></li>

          <li><Link  className='text-gray-500 text-sm' to="products">products</Link></li>
        </ul>
</>:null}

        </div>


        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="icons flex gap-5">
            <i className='fab fa-facebook'></i>
            <i className='fab fa-linkedin'></i>
            <i className='fab fa-youtube'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-tiktok'></i>
            
          </div>
          <div className="links flex gap-5">
            {isLogin ?  <span onClick={signout}  className='text-gray-500 text-sm cursor-pointer'>SignOut</span> : <>
            
              <Link className='text-gray-500 text-sm' to="login">Login</Link>
              <Link className='text-gray-500 text-sm' to="register">Register</Link>
            
            </>}
  


            

            
          
            
    


         

           
       
            
   
        
        </div>
        </div>
    </div>
</nav>  */}








    <Navbar  className='   p-5 bg-gray-200 fixed top-0 left-0 right-0 z-50'>
  
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={logo} className="mr-3 w-[150px] h-6 sm:h-9" alt="Flowbite React Logo" />

      </Navbar.Brand>
      <Navbar.Toggle />
     {isLogin != null ?
        <Navbar.Collapse>
        <Navbar.Link as={Link} className='text-[15px]   text-gray-700' href="#">
          Home
        </Navbar.Link>
        <Navbar.Link className='text-[15px] text-gray-700'  href="cart">
        Cart
        </Navbar.Link>
        <Navbar.Link className='text-[15px]  text-gray-700' href="wishList">WishList</Navbar.Link>
        <Navbar.Link className='text-[15px] text-gray-700' href="brands">Brands</Navbar.Link>
        <Navbar.Link className='text-[15px] text-gray-700' href="categares">Categares</Navbar.Link>
        <Navbar.Link className='text-[15px] text-gray-700' href="products">products</Navbar.Link>

      </Navbar.Collapse>
   : null}


      <Navbar.Collapse>
{isLogin ?
      <Navbar.Collapse className='sm:flex relative flex  justify-center items-center text-center'>
        <div className=' top-[-8px] md:top-[-13px]  absolute   md:left-[50px] bg-emerald-400 size-5 rounded-md text-white p-2  flex justify-center items-center text-center'>
          {numberitems}
        </div>
      <i className="fa-solid fa-cart-shopping fa-2xl md:mt-2.5   "></i>

      <span onClick={signout}  className='text-gray-700 text-[15px] cursor-pointer mt-8 md:mt-0  '>SignOut</span>
      </Navbar.Collapse>

: <Navbar.Collapse>
<Navbar.Link className='text-[15px] text-gray-700' href="register">Register</Navbar.Link>
<Navbar.Link className='text-[15px] text-gray-700' href="login">Login</Navbar.Link>
</Navbar.Collapse>}

  
  
     </Navbar.Collapse>



  
    </Navbar>
  

 </>
}







  

