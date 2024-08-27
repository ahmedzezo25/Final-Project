import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function CategarisSlider() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    infinite:true,
    autoplaySpeed: 2000,
    responsive: [
    
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  const [Allcategores, setAllcategores] = useState([])
  function productSlider() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => {
        console.log(res.data.data);
        setAllcategores(res.data.data)
      })
      .catch((res) => {
        console.log(res);
      });
  }

  useEffect(()=> {
    productSlider()
  }, [])
  return <>
  <h2 className="text-left font-bold text-lg">Shop Popular Categories
    
  </h2>
<Slider {...settings}>
  {Allcategores.map((category)=> <div className="my-4">
    <img src={category.image} className="w-full h-[200px] object-cover" alt="" />
    <h3>{category.name}</h3>
  </div> )}
  </Slider>
  
  
  </>;
}
