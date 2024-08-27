import React, { useEffect, useState } from 'react'
import style from './Categaresid.module.css'
import axios from 'axios'

export default function Categaresid() {
  const [categaresitem, setcategaresitem] = useState(null)
  const [categares, setcategares] = useState(null)
  function getCategares(){
    axios
    .get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then((res) => {
      console.log(res);
      setcategaresitem(res.data.data)
    })
    .catch((res) => {
      console.log(res);
    });
  }
  
  
  
  function Categarisid( id ) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
      .then((res) => {
        console.log(res);
        console.log("test test")
        setcategares(res.data.data)
        
      })
      .catch((res) => {
        console.log(res);
        console.log("test ")
      });
  }
  
  useEffect(()=> {
    getCategares()
    // Categarisid()
  }, [])
  
  
  
    return <>
    <div className="row py-3   ">
     
     { categaresitem?.length > 0 ? categaresitem?.map((product)=> 
  <div className='ms:w-full md:w-1/3 p-3'>
     <div key={product.id} onClick={()=> Categarisid(product._id)}  className=' duration-75		  shadow-md hover:shadow-emerald-400 border rounded-lg'>
     <img src={product.image} className='w-full h-[300px] object-cover ' alt="" />
     <h3 className='text-center text-2xl font-semibold text-emerald-400 my-3'>{product.name}</h3>
     </div>
     </div>
    ) :   <div className="overLay">
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
  </div>}
     </div>



     <div className="row">
     {  categares?.map((product)=>
     <div className='ms:w-full md:w-1/3 p-3'>
      <div className='hover:bg-white border p-10 text-center rounded-lg shadow-md hover:shadow-emerald-400'>
        <h3 className='text-[25px] font-semibold  capitalize'>{product.name}</h3>

      </div>
     </div>

    
)}
 </div>
     </>
}
