import React, { useEffect } from 'react'
import images from '../../../assets/images'
import {
 Navigation,
 Pagination,
 Scrollbar,
 A11y,
 Autoplay,
 EffectCoverflow,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.css'

const About = () => {
 useEffect(() => {
  const handleScroll = () => {
   const title = document.querySelector('.about .contain .major .title')
   const titlePosition = title.getBoundingClientRect().top
   const windowHeight = window.innerHeight

   if (titlePosition < windowHeight / 1) {
    title.classList.add('slide-in')
   } else {
    title.classList.remove('slide-in')
   }
  }

  document.addEventListener('scroll', handleScroll)
  return () => {
   document.removeEventListener('scroll', handleScroll)
  }
 }, [])

 return (
  <div className="about">
   <div className="contain">
    <div className="major">
     <div className="title">Embark on unforgettable adventures with us!</div>
     <div className="menu">
      <div className="description">
       Indojavatrip is an tour agency operating in East Java, Indonesia. Since
       our foundation, Indojavatrip has been the leading tour agency in East
       Java, Indonesia. Offering top-quality services. We take great pride in
       our diverse portfolio of tours in East Java, Indonesia. We also offer
       high quality tours and experiences.
      </div>
      <div className="swiper">
       <Swiper
        modules={[
         Navigation,
         Pagination,
         Scrollbar,
         A11y,
         Autoplay,
         EffectCoverflow,
        ]}
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
           <div className="header" style={{ color: 'white' }}>
            Affordable Prices
           </div>
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
           <div className="header" style={{ color: 'white' }}>
            Variety of Tours
           </div>
           <div className="detail">
            For discerning travelers with a passion for East Java and a penchant
            for immersive Indonesian experiences. We offer a custom variety of
            tours for those who love East Java, Indonesian travel.
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className="item">
         <div className="background">
          <div className="description">
           <div className="header" style={{ color: 'white' }}>
            Easy Booking
           </div>
           <div className="detail">
            Our customizable booking can easily embark your dream adventure with
            ease by booking a personalized tour crafted to your exact
            preferences and desires. Guaranteeing an unforgettable experience
            from start to finish.
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className="item">
         <div className="background">
          <div className="description">
           <div className="header" style={{ color: 'white' }}>
            Affordable Prices
           </div>
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
           <div className="header" style={{ color: 'white' }}>
            Variety of Tours
           </div>
           <div className="detail">
            For discerning travelers with a passion for East Java and a penchant
            for immersive Indonesian experiences. We offer a custom variety of
            tours for those who love East Java, Indonesian travel.
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className="item">
         <div className="background">
          <div className="description">
           <div className="header" style={{ color: 'white' }}>
            Easy Booking
           </div>
           <div className="detail">
            Our customizable booking can easily embark your dream adventure with
            ease by booking a personalized tour crafted to your exact
            preferences and desires. Guaranteeing an unforgettable experience
            from start to finish.
           </div>
          </div>
         </div>
        </SwiperSlide>
       </Swiper>
      </div>
     </div>
     <div className="brand">
      <img className="brand" src={images.maps2} alt="Maps" />
      <div className="circle">
       <div className="circular"></div>
       <div className="plane">
        <img src={images.plane3} alt="Plane" />
       </div>
      </div>
     </div>
    </div>
    <div className="maps-legend">
     <h3>East Java</h3>
     <div className="list">
      <div className="one">
       <h4>Mt. Bromo</h4>
       <h5>
        Mount Bromo is an active somma volcano and part of the Tengger
        mountains, in East Java, Indonesia. At 2,329 meters (7,641 ft) it is not
        the highest peak of the massif, but is the most active and famous. The
        area is one of the most visited tourist destinations in East Java, and
        the volcano is included in the Bromo Tengger Semeru National Park.
       </h5>
      </div>
      <div className="two">
       <h4>Ijen Crater</h4>
       <h5>
        The Ijen volcano complex is a group of composite volcanoes located on
        the border between Banyuwangi Regency and Bondowoso Regency of East
        Java,Indonesia. It is known for its blue fire, acidic crater lake, and
        labour-intensive sulfur mining.
       </h5>
      </div>
      <div className="three">
       <h4>Tumpaksewu Waterfall</h4>
       <h5>
        Tumpak Sewu, also known as Coban Sewu, is a tiered waterfall that is
        located between the Pronojiwo District, Lumajang Regency, and the
        Ampelgading District, Malang Regency, in East Java, Indonesia. The
        waterfall is overshadowed by Semeru, an active volcano and the highest
        mountain in Java.
       </h5>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default About
