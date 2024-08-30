
import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import img1 from '../assets/img12.jpg/'
import img2 from '../assets/img13.jpg';
import img3 from '../assets/img11.jpg';
import img4 from '../assets/img10.jpg';



// import hero4 from '../assets/hero4.webp';
export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return <>
 
   <section className="">
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-2/3">
          <Slider {...settings}>
          <div>
          <img src={img1} alt="" className="w-full h-[400px]" />
          </div>
          <div>
          <img src={img2} alt="" className="w-full h-[400px]" />
          </div>
          <div>
          <img src={img3} alt="" className="w-full h-[400px]" />
          </div>
        </Slider>
      </div>
      <div className="w-1/3">
      <div>
        <img src={img4} className="w-full h-[200px]" alt=""  />
      </div>
      <div>
        <img src={img3} className="w-full h-[200px]" alt="" />
      </div>
      </div>
    </div>

   </section>


 

          
      
    
    </>
  
}