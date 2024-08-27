import React from 'react'
import style from './MainSlider.module.css'
import Slider from "react-slick";
import slide1 from '../../assets/41nN4nvKaAL._AC_SY200_.jpg'
import slide2 from '../../assets/61cSNgtEISL._AC_SY200_.jpg'
import slide3 from '../../assets/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg'
import slide4 from '../../assets/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import slide5 from '../../assets/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'
export default function MainSlider() {


  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    // autoplay: true
    
  };
  return (
  <>
  <div className="row my-5 m-auto flex justify-center items-center  ">
    <div className=" sm:w-full md:w-1/4 mb-7   ">
    <Slider {...settings}>
    <img src={slide1} className='w-[150px]  object-cover object-center	 '  alt="" />
    <img src={slide2} className=' w-[150px] object-cover object-center '  alt="" />
    <img src={slide3} className=' w-[150px] object-cover object-center'  alt="" />
    </Slider>
    </div>
    <div className=" sm:w-full md:w-1/4 ">
    <img src={slide4} className=' h-[201px]  w-full  ' alt="" />
    <img src={slide5} className=' h-[210px] w-full ' alt="" />
    </div>
  </div>
  </>
  )
}
