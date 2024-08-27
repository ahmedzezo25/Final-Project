import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };



   const [Idproduct, setIdproduct] = useState(
    localStorage.getItem("favproducts")
    ?  localStorage.getItem("favproducts")
    : null
   )

const [cartid, setcartid] = useState(0)

const [numberitems, setnumberitems] = useState(0)


  function addProducttocart(productId) {
   return axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId },
      { headers }
    )
    .then((res) => res)
    .catch((err)=> err)
  }





function getCartitem() {
 return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers})
  .then((res) =>  {
    console.log(res.data.numOfCartItems
      )
      setnumberitems(res.data.numOfCartItems)
    setcartid(res.data.data._id)
    return res
  
    
  })
  .catch((err)=> err)
}

useEffect(()=> {
  getCartitem()
}, [])



  function Updatecartproductquantity(productId, mycount) {
    return axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count: mycount },
      { headers }
    )
    .then((res) => res)
    .catch((err)=> err)
  }


  function deleteeitem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {headers})
    .then((res) => res)
    .catch((err)=> err)
  }

  function clearitem() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {headers})
    .then((res) => res)
    .catch((err)=> err)
  }

  function addwatchlistcart(productId) {
    return axios.post(
       `https://ecommerce.routemisr.com/api/v1/wishlist`,
       { productId: productId },
       { headers }
     )
     .then((res) => res)
     .catch((err)=> err)
   }



   function getwishlistCart() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {headers})
    .then((res) => res)
    .catch((res)=> res)
  }

function Removeproductwishlist (productId) {
return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {headers})
.then((res) => res)
.catch((res)=> res)
}


function checkout(cardid, url, formdata) {
 return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardid}?
  url=${url}`, {
  shippingAddress : formdata

  }, {
    headers
  }
)

.then((res) => res)
.catch((res)=> res)
}

  return (
    <CartContext.Provider value={{numberitems, setnumberitems,cartid,checkout, Idproduct,setIdproduct , clearitem ,Removeproductwishlist, deleteeitem, Updatecartproductquantity,  getCartitem, addProducttocart, addwatchlistcart,getwishlistCart}}>{props.children}</CartContext.Provider>
  );
}
