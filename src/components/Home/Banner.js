import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import {Pagination,Autoplay } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";

import banner from '../../assets/images/banner.png';
import bannerHand from '../../assets/images/banner-hand.png';
import style from '../../style/banner.module.css';

export default function Banner() {
   return (
      // pagination={true} modules={[Pagination]} className="mySwiper"
      <>
         <Swiper 
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 2500 ,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true
           }}
           
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           className="mySwiper"
         > 
            <SwiperSlide>
               <div className={style.bannerInfo}>
                  <h1>Gold big hoops</h1>
                  <h1>$ 68,00</h1>
                  <button>View Product</button>
               </div>
               <img src={banner} alt=""/>
            </SwiperSlide>
            <SwiperSlide><img src={bannerHand} alt=""/></SwiperSlide>
         </Swiper>
      </>
   );
}
