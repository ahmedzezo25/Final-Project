import React, { useContext, useEffect, useState } from "react";
import style from "./DetailsProducts.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { CartContext } from "../../Context/CartContext";

export default function DetailsProducts() {


  const [loding, setloding] = useState(false)
const [currentid, setcurrentid] = useState(0)
  let {addProducttocart,  numberitems, setnumberitems} = useContext(CartContext)
  let { id, category } = useParams();
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
  setcurrentid(id)
  setloding(true)
  let response = await addProducttocart(id)


  if(response.data.status == "success") {
    setnumberitems(numberitems + 1)
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



  
  function getAllproducts() {
    axios
    .get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((res) => {
      console.log(res.data.data);
    let related =  res.data.data.filter((product)=> product.category.name == category)
    console.log(related)
    setrelatedProdocts(related)
    })
    .catch((res) => {
      console.log(res);
    });


  }

  useEffect(() => {
    productid(id);
    getAllproducts()
  }, [id, category]);

  return  <>
  <div className="row items-center ">
   <div className="w-1/4 p-3">

   <Slider {...settings}>
   {product?.images.map((src)=> <img src={src} className="w-full"/>)}
   
   </Slider>
</div>
   <div className="w-3/4">
   <h3 >{product?.description}</h3>
   <h4 className="text-gray-400 ">{product?.title}</h4>
   <h3 className="text-emerald-600 ">{product?.category.name}</h3>


   <div className="flex justify-between p-3">
            <span>{product?.price} EGP</span>
            <span> <i className="fas fa-star text-yellow-400"></i> {product?.ratingsAverage}</span>
        </div>

{currentid == product?.id && loding ? <>
        <button onClick={()=>AddToCartDetails(product.id)} className="btn bg-emerald-600 w-full text-white px-4 py-2 rounded-lg">+ Add </button>
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

        </>:  <button onClick={()=>AddToCartDetails(product.id)} className="btn bg-emerald-600 w-full text-white px-4 py-2 rounded-lg">+ Add </button>}
   </div>

   
   </div>


   <div className="row">
    {relatedProdocts.length > 0 ? relatedProdocts.map((product)=> 
        <div key={product.id} className="w-1/6">
    <div className="proudut p-3">
        <Link to={ `/detailsproducts/${product.id}/${product.category.name}`}>
        <img src={product.imageCover} className="w-full" alt="" />
        <h4 className="text-emerald-600">{product.category.name}</h4>
        <h3>{product.title.split(" ").slice(0,2).join(" ")}</h3>
        <div className="flex justify-between p-3">
            <span>{product.price} EGP</span>
            <span> <i className="fas fa-star text-yellow-400"></i> {product.ratingsAverage}</span>
        </div>
        </Link>

        {currentid == product?.id && loding ? <>
        <button onClick={()=>AddToCartDetails(product.id)} className="btn bg-emerald-600 w-full text-white px-4 py-2 rounded-lg">+ Add </button>
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

        </>:  <button onClick={()=>AddToCartDetails(product.id)} className="btn bg-emerald-600 w-full text-white px-4 py-2 rounded-lg">+ Add </button>}
      
    </div>
   
    </div>): <>
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
    </>

}
  </div>

  </>
 
}
