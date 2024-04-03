import React from 'react'
import images from '../../../assets/images'
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'
import { Card } from 'reactstrap'
import {
 Navigation,
 Pagination,
 Scrollbar,
 A11y,
 Autoplay,
 Virtual,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/virtual'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import './index.css'
import Contact from '../../../components/main/contact'

const Package4 = () => {
 return (
  <div className="package4">
   <Navbar />
   <div className="contain">
    <div className="body">
     <div className="cover">
      <img src={images.bromo1} alt="Package 1" />
     </div>
     <div className="header">
      <h1>East Java 5 Days / 4 Nights</h1>
      <p>
       Explore the breathtaking wonders of East Java with our exclusive 5 days
       and 4 night packages. Immerse yourself in the rich cultural tapestry,
       stunning landscapes, and unforgettable experiences that await you in this
       enchanting region. Embark on an extraordinary journey to discover the
       breathtaking wonders of East Java with our meticulously crafted 5 days
       and 4 night packages. Delve deep into the heart of this mesmerizing
       region as you immerse yourself in its rich cultural tapestry, traverse
       its diverse landscapes, and create unforgettable memories that will
       linger in your heart for a lifetime.
      </p>
     </div>
     <div className="main">
      <h1>Choose your package</h1>
      <div className="menu">
       <Card className="item">
        <img className="img" src={images.dest13} alt="Menu 1" />
        <div className="star">
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
        </div>
        <img
         className="label"
         src={images.hotSale2}
         alt="Label Destination 1"
        />
        <h6>5 Days / 4 Nights</h6>
        <a href="/destination-13" rel="noopener noreferrer">
         Bromo, Tumpaksewu, Malang & Surabaya
        </a>
        <p>
         In this package you will get amazing views such as active volcanoes,
         beautiful waterfalls and the diversity of places you visit.
        </p>
       </Card>
       <Card className="item">
        <img className="img" src={images.dest14} alt="Menu 2" />
        <div className="star">
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="half">&#9733;</span>
        </div>
        <h6>5 Days / 4 Nights</h6>
        <a href="/destination-14" rel="noopener noreferrer">
         Bromo, Ijen Crater, Tumpaksewu & Malang
        </a>
        <p>
         In this package you will get amazing views such as active volcanoes,
         beautiful waterfalls and the diversity of places you visit.
        </p>
       </Card>
       <Card className="item">
        <img className="img" src={images.dest15} alt="Menu 3" />
        <div className="star">
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="half">&#9733;</span>
        </div>
        <h6>5 Days / 4 Nights</h6>
        <a href="/destination-15" rel="noopener noreferrer">
         Bromo, Ijen Crater, Malang & Surabaya
        </a>
        <p>
         In this package you will get amazing views such as active volcanoes,
         beautiful waterfalls and the diversity of places you visit.
        </p>
       </Card>
       <Card className="item">
        <img className="img" src={images.dest16} alt="Menu 4" />
        <div className="star">
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
         <span className="full">&#9733;</span>
        </div>
        <img
         className="label"
         src={images.hotSale2}
         alt="Label Destination 4"
        />
        <h6>5 Days / 4 Nights</h6>
        <a href="/destination-16" rel="noopener noreferrer">
         Bromo, Ijen Crater, Tumpaksewu & Surabaya
        </a>
        <p>
         In this package you will get amazing views such as active volcanoes,
         beautiful waterfalls and the diversity of places you visit.
        </p>
       </Card>
      </div>
     </div>
     <div className="swiper">
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]}
       allowSlideNext
       allowSlidePrev
       autoplay={{ delay: 5000 }}
       speed={1200}
       loop
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       spaceBetween={20}
      >
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 1" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 2" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 3" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 4" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 5" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 6" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 7" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 8" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 9" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 10" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 11" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 12" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 13" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 14" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 15" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.bromo1} alt="Item 16" />
       </SwiperSlide>
      </Swiper>
     </div>
    </div>
   </div>
   <div className="testimonial">
    <div className="list">
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
          Indojavatrip ensures its clients enjoy unbeatable prices, making every
          journey affordable and accessible.
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
          Indojavatrip ensures its clients enjoy unbeatable prices, making every
          journey affordable and accessible.
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
   <Contact />
   <Footer />
  </div>
 )
}

export default Package4
