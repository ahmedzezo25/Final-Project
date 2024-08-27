import React, { useContext, useEffect, useState } from 'react'
import style from './WishList.module.css'
import { CartContext } from '../../Context/CartContext';

export default function WishList() {
  const [detcartwishlist, setdetcartwishlist] = useState([]);

  const [loding, setloding] = useState(false)
  let { getwishlistCart, addProducttocart, Removeproductwishlist, setnumberitems, numberitems   } = useContext(CartContext);

  async function getcartwishlist() {
    let response = await getwishlistCart();
    // console.log(response.data);
   if (response.data.status == "success") {
    // console.log(response.data.data);
   setdetcartwishlist(response.data.data);
   }
   }

   async function AddToCartwashlist(id) {
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


  async function removeitem(productId) {
    let response = await Removeproductwishlist(productId)
    console.log(response.data)
   
    if(response.data.status == "success"){
      
      setdetcartwishlist(response.data)
    }
    
   

    

  }

  useEffect(() => {
    getcartwishlist();
  }, []);

 
  return (
    <>
      <div className="bg-gray-200 p-16 my-14">
        <h1 className=" text-3xl font-semibold  mb-10	">My wish List</h1>

       
      { detcartwishlist?.length > 0 ? detcartwishlist?.map((product) => 
      <div key={product.id}>
       

        <div className="row justify-between items-center border-l-0 border-r-0 border-t-0 border-b-2 border-gray-300">
          <div className="flex items-center gap-5 my-8 ">
            <img src={product.imageCover} className=" w-[150px]" alt="" />
            <div className="text">
              <h5 className="text-lg font-medium my-2">{product.title}</h5>
              <h6 className="text-lg font-semibold">{product.price} EGP</h6>
              <button onClick={()=> removeitem(product.id)} className="text-red-600 mt-3">
                <i class="fa-solid fa-trash"></i>
                Remove
              </button>
            </div>
          </div>
       
      <button onClick={()=>AddToCartwashlist(product.id)} className=' mb-3 px-4 py-2 border w-30 border-emerald-400 block rounded-lg h-12 text-lg font-medium '>Add To Cart</button>
   
        </div>
        </div> ) :   
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
</div>}


      
      </div>
    </>
  );
}
