import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import banner from '../../assets/images/banner.png';
import bannerHand from '../../assets/images/banner-hand.png';
import style from '../../style/banner.module.css';

export default function Banner() {
   return (
      <>
         <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
