import React from 'react'
import style from './Layout.module.css'

import Navbarr from '../Navbarr/Navbarr'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    
   <>

<Navbarr/>
 <div className="container mx-auto py-20 w-[80%]">
  
 <Outlet/>
 </div>
<Footer/>
   </>
  )
}
