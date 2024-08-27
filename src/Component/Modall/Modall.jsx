import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Button, Modal } from "flowbite-react";

export default function Modall() {
  const [openModal, setOpenModal] = useState(true);
  const [Brandsitem,    setBrandsitem] = useState([])

  const [product,    setptoductt] = useState(null)

  const [loding,    setloding] = useState(false)

const [currentid, setcurrentid] = useState(0)

  function getBrands(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    .then((res) => {
      console.log(res);
      setBrandsitem(res.data.data)
    })
    .catch((res) => {
      console.log(res);
    });
  }




 function Brandsid(id) {
  setcurrentid(id)
  setloding(true)
  axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
     .then((res) => {
      console.log(res);
      console.log("test11")
      setptoductt(res.data.data)
      setloding(false)
     })
     .catch((res) => {
      console.log(res);
       console.log("test")
       setloding(false)
     });
}
   useEffect(()=> {
    getBrands()
    setOpenModal(false)
   
    
  }, [])


  return (
    <>
        <h1 className='text-center text-[40px] my-4  font-semibold text-emerald-400'> AllBrands</h1>
      
<div className="row">
    {Brandsitem.length > 0 ? Brandsitem?.map((product)=> 
    
    <div onClick={() => setOpenModal(true)}  key={product.id} className=' sm:w-full md:w-1/4 p-3'>
    
    <div onClick={()=> Brandsid(product._id)}   className='  duration-75		  shadow-md hover:shadow-emerald-400 border rounded-lg text-center p-10 '>
      <img src={product.image } className="w-full" alt="" />
      <h4 className='text-lg'>{product.name}</h4>
    </div>
   
    </div>


  ) :      <div className="overLay">
    <div class="sk-fading-circle">
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
</div>
  </div> } 
    </div>




   
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="space-y-6 flex items-center justify-between">
          <div>
            <h1 className='text-3xl text-emerald-400 font-semibold mb-3'>{product?.name}</h1>
          <p className='text-md'>{product?.slug}</p>
          </div>
          <img src={product?.image} alt="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
       
          <Button className='bg-gray-600 hover:bg-none absolute right-5 my-2 block' onClick={() => setOpenModal(false)}>
          close
          </Button>
        </Modal.Footer>
      </Modal>
  
   
    </>
  )
}
