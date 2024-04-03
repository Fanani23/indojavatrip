import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import images from '../../assets/images'
import './index.css'

const Carou = () => {
 return (
  <div className="carousel">
   <div className="contain">
    <Carousel
     className="main"
     showArrows
     showStatus={false}
     interval={10000}
     infiniteLoop
     showThumbs={false}
     showIndicators={false}
     dynamicHeight
     autoFocus
     autoPlay
     swipeable={false}
     renderArrowPrev={(clickHandler) => {
      return (
       <div className={`prev-arrow`} onClick={clickHandler}>
        <IoIosArrowBack className="arrow-icon" />
       </div>
      )
     }}
     renderArrowNext={(clickHandler) => {
      return (
       <div className={`next-arrow`} onClick={clickHandler}>
        <IoIosArrowForward className="arrow-icon" />
       </div>
      )
     }}
    >
     <div className="menu">
      <img src={images.bromo1} alt="Carousel Bromo" />
     </div>
     <div className="menu">
      <img src={images.ijen2} alt="Carousel Bromo" />
     </div>
     <div className="menu">
      <img src={images.tumpaksewu1} alt="Carousel Bromo" />
     </div>
    </Carousel>
   </div>
  </div>
 )
}

export default Carou
