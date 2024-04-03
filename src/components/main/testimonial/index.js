import React from 'react'
import {
 Navigation,
 Pagination,
 Scrollbar,
 A11y,
 Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.css'

const Testimonial = () => {
 return (
  <div className="testimonial">
   <div className="contain">
    <div className="header">
     <div className="title">Testimonials from Our Valued Guests</div>
     <div className="detail">
      Voice of delight from our valued guests. Not only satisfied, but
      captivated by our packages and services, they fall head over heels in love
      with what we offer.
     </div>
    </div>
    <div className="body">
     <div className="swiper">
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
       breakpoints={{
        1024: {
         slidesPerView: 3,
        },
        983: {
         slidesPerView: 2,
        },
        768: {
         slidesPerView: 2,
        },
        356: {
         slidesPerView: 1,
        },
       }}
       allowSlideNext
       allowSlidePrev
       autoplay={{ delay: 5000 }}
       speed={1200}
       loop
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
       }}
      >
       <SwiperSlide className="item">
        <div className="background">
         <div className="description">
          <div className="star">
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
          </div>
          <div className="header">Michael Essien</div>
          <div className="detail">
           Indojavatrip ensures its clients enjoy unbeatable prices, making
           every journey affordable and accessible.
          </div>
         </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="item">
        <div className="background">
         <div className="description">
          <div className="star">
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
          </div>
          <div className="header">Marcheilla A</div>
          <div className="detail">
           For discerning travelers with a passion for East Java and a penchant
           for immersive Indonesian experiences.
          </div>
         </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="item">
        <div className="background">
         <div className="description">
          <div className="star">
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="half">&#9733;</span>
          </div>
          <div className="header">Ummaya Ra</div>
          <div className="detail">
           Our customizable booking can easily embark your dream adventure with
           ease by booking a personalized tour.
          </div>
         </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="item">
        <div className="background">
         <div className="description">
          <div className="star">
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="half">&#9733;</span>
          </div>
          <div className="header">Michael Essien</div>
          <div className="detail">
           Indojavatrip ensures its clients enjoy unbeatable prices, making
           every journey affordable and accessible.
          </div>
         </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="item">
        <div className="background">
         <div className="description">
          <div className="star">
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="half">&#9733;</span>
          </div>
          <div className="header">Marcheilla A</div>
          <div className="detail">
           For discerning travelers with a passion for East Java and a penchant
           for immersive Indonesian experiences.
          </div>
         </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="item">
        <div className="background">
         <div className="description">
          <div className="star">
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
           <span className="full">&#9733;</span>
          </div>
          <div className="header">Ummaya Ra</div>
          <div className="detail">
           Our customizable booking can easily embark your dream adventure with
           ease by booking a personalized tour.
          </div>
         </div>
        </div>
       </SwiperSlide>
      </Swiper>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Testimonial
