import React, { useContext, useEffect, useState } from "react";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import productdetails from "../productDetails/ProductDetails";
import toast from 'react-hot-toast';
import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../Context/CartContext";

export default function RecentProduts() {

  const [loding, setloding] = useState(false)
  const [currentid, setcurrentid] = useState(0)
  let {addProducttocart, addwatchlistcart,  numberitems, setnumberitems} = useContext(CartContext)
 
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
};

let {data, isErorr, error, isLoading} = useProducts()

async function AddToCart(id) {
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

async function AddWishlist(id) {
  setloding(true)
  setcurrentid(id)
  let response =   await addwatchlistcart(id)
  console.log(response)
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



  if(isErorr) {
    return <h3>{error}</h3>

  }
  if(isLoading) {

    return     <>
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

  

  return <>


<input
          
          name="name"
          type="text"
          value={searchTerm}
              onChange={handleChange.bind(this)}
          className=" my-5 border border-gray-300 outline-8 focus:outline-none focus:outline-blue-300  text-lg rounded-lg  block w-full p-1 px-3 "
          placeholder="Search..."
        />
 <div className="row  ">
    { data?.data?.data.filter((product) => {
            return searchTerm.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(searchTerm.toLowerCase());
          }).map((product)=> 
        <div key={product.id} className="sm:w-full md:w-1/2 lg:w-1/4 p-4 mx-auto">
         
    <div className="proudut   shadow-lg  hover:shadow-emerald-400 ">
        <Link to={ `/productdetails/${product.id}`}>
        <img src={product.imageCover} className="w-full" alt="" />
        <h4 className="text-emerald-400 text-left p-2">{product.category.name}</h4>
        <h3 className="text-left p-2 font-bold">{product.title.split(" ").slice(0,2).join(" ")}</h3>
        <div className="flex justify-between p-3">
            <span>{product.price} EGP</span>
            <span> <i className="fas fa-star text-yellow-400"></i> {product.ratingsAverage}</span>
        </div>
        </Link>

        <div className="flex gap-2 p-3 items-center">
          {currentid == product.id && loding? <>
            <button onClick={()=> AddToCart(product.id)} className="btn bg-emerald-400 w-full   text-white px-4 py-2 rounded-lg"> + Add </button>


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


          </> :         <button onClick={()=> AddToCart(product.id)} className="btn bg-emerald-400 w-full   text-white px-4 py-2 rounded-lg"> + Add </button>}


       {currentid == product.id && loding ? <>
        <i onClick={()=> AddWishlist(product.id)}  className="fa-solid fa-heart fa-xl text-red-600 "></i>

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


       </>:        <i onClick={()=> AddWishlist(product.id)}  className="fa-solid fa-heart fa-xl text-black "></i>}

        
        </div> 
      
    </div>
   
   
    </div>)}
  </div>
  
  
  </>;
}
