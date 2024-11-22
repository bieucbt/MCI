import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { landscape1, landscape2, landscape3, landscape4 } from '../assets';

const Slider = () => {
  
  return (
    <>
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop={true}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          className="mySwiper mt-5"
        >
          <SwiperSlide><img src={landscape1} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
          <SwiperSlide><img src={landscape2} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
          <SwiperSlide><img src={landscape3} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
          <SwiperSlide><img src={landscape4} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
          <SwiperSlide><img src={landscape1} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
          <SwiperSlide><img src={landscape2} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
          <SwiperSlide><img src={landscape3} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
          <SwiperSlide><img src={landscape4} className='w-full h-full object-cover' alt="img" /></SwiperSlide>
      </Swiper>
      
    </>
  )
}

export default Slider