import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'
import Brands from './Component/Brands/Brands'
import Categares from './Component/Categares/Categares'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import Products from './Component/Products/Products'
import Checkout from './Component/Checkout/Checkout'

import Notfound from './Component/Notfound/Notfound'
import DetailsProducts from './Component/DetailsProducts/DetailsProducts'
import ProductDetails from './Component/productDetails/ProductDetails'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import  { Toaster } from 'react-hot-toast';
import WishList from './Component/WishList/WishList'
import Allorders from './Component/Allorders/Allorders'
import Forget from './Component/Forget/Forget'

 import ForgetVirfy from './Component/ForgetVirfy/ForgetVirfy'
 import NewPassword from './Component/NewPassword/NewPassword'

 let qurey = new QueryClient();


let x = createBrowserRouter([
  {path: "", element: <Layout/>,children:[
    {index: true, element:<ProtectedRoute><Home/> </ProtectedRoute>   },
    {path:"cart", element:<ProtectedRoute> <Cart/>  </ProtectedRoute> },
    {path:"wishlist", element:<ProtectedRoute> <WishList/>  </ProtectedRoute> },
    {path:"brands", element:<ProtectedRoute>  <Brands/>  </ProtectedRoute> },
    {path:"categares", element:<ProtectedRoute>  <Categares/>  </ProtectedRoute> },
    {path:"checkout", element:<ProtectedRoute> <Checkout/>   </ProtectedRoute> },
    {path:"allorders", element:<ProtectedRoute> <Allorders/>   </ProtectedRoute> },
    {path:"forget", element: <Forget/>   },
    {path:"forgetvirfy", element: <ForgetVirfy/>   },
    {path: "newpassword", element: <NewPassword/>},


  
    {path:"detailsproducts/:id/:category", element:<ProtectedRoute>  <DetailsProducts/>  </ProtectedRoute> },
    {path:"productdetails/:id", element:<ProtectedRoute>  <ProductDetails/>  </ProtectedRoute> },
    
 
    {path:"login", element:<Login/>},
    {path:"register", element:<Register/>},
    {path:"products", element:<ProtectedRoute> <Products/>  </ProtectedRoute> },
    {path:"*", element:<Notfound/>},
    

  ]}

])





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <UserContextProvider>
  <QueryClientProvider client={qurey}>
    <CartContextProvider>
    <RouterProvider router={x}></RouterProvider>
    </CartContextProvider>
    <Toaster/>
 
  < ReactQueryDevtools/>
  </QueryClientProvider>


 </UserContextProvider>




 
    </>
  )
}

export default App
