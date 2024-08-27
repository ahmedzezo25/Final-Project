import React, { useContext, useEffect, useState } from "react";
import style from "./RecentProduts.module.css";

import {  Link, parsePath } from "react-router-dom";
import detailsproducts from "../DetailsProducts/DetailsProducts";

import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../Context/CartContext";
import toast from 'react-hot-toast';
import { object } from "yup";

export default function RecentProduts() {
 

  let {data , isErorr, error, isLoading} = useProducts()

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
};
console.warn(searchTerm)




  





 let {addProducttocart, addwatchlistcart, setIdproduct, Idproduct, numberitems, setnumberitems } = useContext(CartContext)


const [loding, setloding] = useState(false)
const [currentid, setcurrentid] = useState(0)




async function AddToCart(id) {

  setloding(true)



  let response = await addProducttocart(id)
  setloding( false)
  setcurrentid(id)
  if(response.data.status == "success") {
    setnumberitems(numberitems + 1)
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
  setloding( false)
}



async function AddWishlist(id) {
  setloding(true)
 
  let response =   await addwatchlistcart(id)
  console.log(response)
  if(response.data.status == "success") {
    setIdproduct(response.data.data)
    localStorage.setItem("favproducts", JSON.stringify(response.data.data))
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
  //   const [products, setproducts] = useState([])
  // function getProducts() {
  //   axios
  //     .get(`https://ecommerce.routemisr.com/api/v1/products`)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setproducts(res.data.data)
  //     })
  //     .catch((res) => {
  //       console.log(res);
  //     });
  // }
  // useEffect(() => {
  //   getProducts()
  // },[])
  

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
          }).map( (product) => 
        <div  key={product.id} className="sm:w-full md:w-1/2 lg:w-1/4 p-4 mx-auto">
         
    <div  className="proudut   shadow-lg  hover:shadow-emerald-400 rounded-lg ">
        <Link to={ `detailsproducts/${product.id}/${product.category.name}`}>
        <img src={product.imageCover} className="w-full" alt="" />
        <h4 className="text-emerald-600 text-left p-2">{product.category.name}</h4>
        <h3 className="text-left p-2 font-bold">{product.title.split(" ").slice(0,2).join(" ")}</h3>
        <div className="flex justify-between p-3">
            <span>{product.price} EGP</span>
            <span> <i className="fas fa-star text-yellow-400"></i> {product.ratingsAverage}</span>
        </div>
        </Link>
      <div className="flex gap-2 p-3 items-center">
        
        {loding && currentid == product.id ? <>
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
  </> :         <button onClick={()=> AddToCart(product.id)} className="btn bg-emerald-400 w-full   text-white px-4 py-2 rounded-lg"> + Add </button> 
   }


       {Idproduct.includes(product.id)  && loding ? <>
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
        </>
        :   
         <i onClick={()=> AddWishlist(product.id)}  className="fa-solid fa-heart fa-xl text-black "></i>
  
    
  
       }
      
        </div> 
      
    </div>
   
   
    </div>)}

   

  
   
     
      
  </div>
  
    
  </>;
}
