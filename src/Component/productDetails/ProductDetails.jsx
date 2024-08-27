import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetails() {
  const [loding, setloding] = useState(false)
  const [currentid, setcurrentid] = useState(0)
  let {addProducttocart,  numberitems, setnumberitems} = useContext(CartContext)
    let { id } = useParams();
    const [product, setproduct] = useState(null)
    const [relatedProdocts, setrelatedProdocts] = useState([])
    var settings = {
     dots: false,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true
     
   };



   async function AddToCartDetails(id) {
    setloding(true)
    setcurrentid(id)
    let response = await addProducttocart(id)
  setnumberitems(numberitems + 1)
  
    if(response.data.status == "success") {
      setloding(false)
     toast(response.data.message, {
      duration: 4000,
      position: 'top-right',
      style: {background: "green" , color: "white", padding: "15px" },
  
     
      icon: <i className="fa-solid fa-check fa-xl"></i>,
    
     });
    }
    
    else {
      toast(response.data.message)
    }
    setloding(false)
  }




   function productid(id) {
 
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        console.log(res);
        setproduct(res.data.data)
 
      })
      .catch((res) => {
        console.log(res);
       
      });
  }


useEffect(()=> {
    productid(id)
},[])


  return <>
 
{product?.images.length > 0 ? 
    <div className="row items-center ">

      
    <div className="w-1/4 p-3">
 
    <Slider {...settings}>
    { product?.images.map((src)=> <img src={src} className="w-full"/>)}
    
    </Slider>
 </div>
    <div className="w-3/4">
    <h3 >{product?.description}</h3>
    <h4 className="text-gray-400 ">{product?.title}</h4>
    <h3 className="text-emerald-400 ">{product?.category.name}</h3>
 
 
    <div className="flex justify-between p-3">
             <span>{product?.price} EGP</span>
             <span> <i className="fas fa-star text-yellow-400"></i> {product?.ratingsAverage}</span>
         </div>
 
 <div className="flex gap-3 items-center ">
  {currentid == product?.id && loding ? <>
    <button onClick={()=>AddToCartDetails(product.id)} className="btn bg-emerald-400 w-full text-white px-4 py-2 rounded-lg"> + Add </button>

    <div className="overLay">
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
</div>

  </>:          <button onClick={()=>AddToCartDetails(product.id)} className="btn bg-emerald-400 w-full text-white px-4 py-2 rounded-lg"> + Add </button>}

         <i   className="fa-solid fa-heart fa-xl "></i>
         </div>
 
 
    </div>
 
    
    </div>
   
 :     <div className="overLay">
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
    </>
  
}
