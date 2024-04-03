/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
import images from '../../../assets/images'
import './index.css'

const Package = () => {
 const history = useNavigate()

 useEffect(() => {
  const handleScroll = () => {
   const title = document.querySelector('.package .contain .header .title')
   const titlePosition = title.getBoundingClientRect().top
   const windowHeight = window.innerHeight

   if (titlePosition < windowHeight / 1.2) {
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

 useEffect(() => {
  const handleScroll = () => {
   const title = document.querySelector('.package .contain .header .detail')
   const titlePosition = title.getBoundingClientRect().top
   const windowHeight = window.innerHeight

   if (titlePosition < windowHeight / 1.2) {
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

 useEffect(() => {
  const handleScroll = () => {
   const title = document.querySelector('.package .contain .body')
   const titlePosition = title.getBoundingClientRect().top
   const windowHeight = window.innerHeight

   if (titlePosition < windowHeight / 1.2) {
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
  <div className="package">
   <div className="contain">
    <div className="header">
     <div className="title">Tour Packages</div>
     <div className="detail">
      Experience the world like never before with our meticulously crafted
      tours. Let us take you on an unforgettable journey where every moment is
      filled with wonder and excitement. Choose your travel package here and
      enjoy your journey.
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
        360: {
         slidesPerView: 1,
        },
       }}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       allowSlideNext
       allowSlidePrev
       autoplay={{ delay: 10000 }}
       speed={1200}
       loop
      >
       <SwiperSlide className="item">
        <img src={images.cov2D1N} alt="Swiper Bromo 1" />
        <div className="pakej">
         <h3>East Java</h3>
         <h5>2 Days / 1 Nights</h5>
        </div>
        <a href="/package-1" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.cov3D2N} alt="Swiper Ijen 1" />
        <div className="pakej">
         <h3>East Java</h3>
         <h5>3 Days / 2 Nights</h5>
        </div>
        <a href="/package-2" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.cov4D3N} alt="Swiper Tumpaksewu 1" />
        <div className="pakej">
         <h3>East Java</h3>
         <h5>4 Days / 3 Nights</h5>
        </div>
        <a href="/package-3" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.cov5D4N} alt="Swiper Bromo 2" />
        <div className="pakej">
         <h3>East Java</h3>
         <h5>5 Days / 4 Nights</h5>
        </div>
        <a href="/package-4" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.cov6D5N} alt="Swiper Ijen 2" />
        <div className="pakej">
         <h3>East Java</h3>
         <h5>6 Days / 5 Nights</h5>
        </div>
        <a href="/package-5" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo13} alt="Swiper Tumpaksewu 2" />
        <div className="pakej central">
         <h3>Central Java</h3>
         <h5>Yogyakarta</h5>
        </div>
        <a href="/package-6" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo13} alt="Swiper Bromo 3" />
        <div className="pakej">
         <h3>Lombok City</h3>
         <h5>Tour Package</h5>
        </div>
        <a href="/package-7" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo13} alt="Swiper Ijen 3" />
        <div className="pakej">
         <h3>Rinjani</h3>
         <h5>Tour Package</h5>
        </div>
        <a href="/package-8" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo13} alt="Swiper Tumpaksewu 3" />
        <div className="pakej">
         <h3>East Center</h3>
         <h5>Java Tour Package</h5>
        </div>
        <a href="/package-9" rel="noopener noreferrer" className="label">
         Choose Package
        </a>
       </SwiperSlide>
      </Swiper>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Package
