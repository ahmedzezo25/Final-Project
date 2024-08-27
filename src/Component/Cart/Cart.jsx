import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../../Context/CartContext";

import toast from "react-hot-toast"
import { Link } from "react-router-dom";
export default function Cart() {
  const [detcartitem, setdetcartitem] = useState(null);
  const [loding, setloding] = useState(false)

  let { getCartitem, Updatecartproductquantity, deleteeitem, clearitem, numberitems, setnumberitems  } = useContext(CartContext);


 

 async function cartitemget() {
let response =  await  getCartitem()

if(response.data.status == "success") {
  setdetcartitem(response.data.data)
}
  
 }

  async function updateproduct(id, count) {
    setloding(true)

    if(count == 0) {
      return
    }
    let response =  await Updatecartproductquantity(id, count)
   console.log(response.data.data)
   setloding(false)
   if(response.data.status == "success") {
    setdetcartitem(response.data.data)
    toast.success("product updated successfully")


  }else {
    toast.error("error")

  }
  setloding(false)
  }

async function Cartdelete(productId) {
  setloding(true)
  let response = await deleteeitem(productId)
  console.log(response)
  if(response.data.status == "success") {
    setnumberitems(numberitems -1)
  setdetcartitem(response.data.data)
  setloding(false)
  }else {
    setloding(false)
  }
  
}

async function Cartremovecart() {
  setloding(true)
  let response = await clearitem()
  // console.log(response.data)
  if(response.data.message == "success") {
    setloding(false)
  setdetcartitem(response.data.data)
  }else {
    setloding(false)
  }
}


  useEffect(() => {
    cartitemget()
  }, []);

  return (
    <>
   
    
      <div className="bg-gray-200 p-16 my-14 relative">



        <h1 className=" text-3xl font-semibold mb-8	">Cart Shop</h1>

{detcartitem?.products.length > 0 ? <>
<Link to={`/checkout`}>
<button className="top-16 absolute right-16 text-white bg-blue-600 px-4 py-3 rounded-lg text-md font-semibold">Check out</button>
</Link>
  <div className="flex justify-between items-center ">
          <h5 className="text-xl font-medium ">total price : <span className="text-emerald-400">{detcartitem?.totalCartPrice   }</span></h5>
          <h5 className="text-xl font-medium ">total number of items : <span className="text-emerald-400">{detcartitem?.numOfCartItems  }</span></h5>
        </div>
      { detcartitem?.products.map((product) => 
      <div key={product.product.id}>
        

        <div className="row justify-between border-l-0 border-r-0 border-t-0 border-b-2 border-gray-300">
          <div className="flex items-center gap-5 my-8">
            <img src={product.product.imageCover} className=" w-[150px]" alt="" />
            <div className="text">
              <h5 className="text-lg font-medium my-2">{product.product.title}</h5>
              <h6 className="text-lg font-semibold">{product.price} EGP</h6>
             
              <button onClick={ ()=> Cartdelete(product.product.id)}  className="text-red-600 mt-3">
                <i class="fa-solid fa-trash"></i>
                Remove
              </button>




           
            </div>
          </div>
          <div class="flex items-center">
         
            <button onClick={() => updateproduct(product.product.id, product.count - 1)}
              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-8 w-8   border border-emerald-400 focus:border-black  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>








            <div>
            <span>{product.count}</span>
            </div>




            <button onClick={() => updateproduct(product.product.id, product.count + 1)}
              class="inline-flex items-center justify-center h-8 w-8 p-1 ms-3 text-sm font-medium text-gray-500  border border-emerald-400 focus:border-black  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>






          

          </div>
        </div>          
        
        </div>
        ) }

<div className="flex justify-center items-center">
        <button onClick={()=> Cartremovecart()}
          type="button"
          className="     my-5  text-black border border-emerald-400    font-semibold rounded-lg text-xl px-5 py-2.5  me-2 mb-2     "
        >
          clear Your Cart
        </button>
        </div>
</> :<h1 className="text-3xl font-semibold ">your cart is empty</h1>}
   

       
      </div>
    

     
    </>
  );
}

