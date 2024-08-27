import React from 'react'
import style from './Home.module.css'
import RecentProduts from '../RecentProduts/RecentProduts'
import MainSlider from '../MainSlider/MainSlider'
import CategarisSlider from '../CategarisSlider/CategarisSlider'
export default function Home() {
  return (
    <>
    <MainSlider/>
    <CategarisSlider/>
  <RecentProduts/>
   
   </>
  )
}
