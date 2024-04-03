import React from 'react'
import {
 Navigation,
 Pagination,
 Scrollbar,
 A11y,
 Autoplay,
 EffectCards,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import images from '../../../assets/images'
import './index.css'

const Gallery = () => {
 return (
  <div className="gallery">
   <div className="contain">
    <div className="major">
     <div className="major-1">
      <div className="title">Explore the Most Beautiful Place in Indonesia</div>
      <div className="detail">
       Whether you seek adventure in the wilderness, relaxation on pristine
       beaches, or cultural enlightenment, Indonesia promises an unforgettable
       experience that will ignite your senses and leave you yearning to return
       again and again.
      </div>
      <div className="button">Enter Gallery</div>
     </div>
     <div className="major-2">
      <div className="swiper">
       <Swiper
        modules={[
         Navigation,
         Pagination,
         Scrollbar,
         A11y,
         Autoplay,
         EffectCards,
        ]}
        slidesPerView={1}
        allowSlideNext
        allowSlidePrev
        autoplay={{ delay: 5000, reverseDirection: true }}
        speed={1200}
        loop
        effect="cards"
        cardsEffect={{
         rotate: 30,
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        grabCursor
       >
        <SwiperSlide className="item">
         <img src={images.bromo1} alt="Gallery 1" />
        </SwiperSlide>
        <SwiperSlide className="item">
         <img src={images.bromo1} alt="Gallery 2" />
        </SwiperSlide>
        <SwiperSlide className="item">
         <img src={images.bromo1} alt="Gallery 3" />
        </SwiperSlide>
        <SwiperSlide className="item">
         <img src={images.bromo1} alt="Gallery 4" />
        </SwiperSlide>
        <SwiperSlide className="item">
         <img src={images.bromo1} alt="Gallery 5" />
        </SwiperSlide>
        <SwiperSlide className="item">
         <img src={images.bromo1} alt="Gallery 6" />
        </SwiperSlide>
       </Swiper>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Gallery
