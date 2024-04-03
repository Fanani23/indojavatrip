import React, { useState, useEffect } from 'react'
import './index.css'
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'
import images from '../../../assets/images'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import Contact from '../../../components/main/contact'
import Testimonial from '../../../components/main/testimonial'
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
import {
 Nav,
 NavItem,
 NavLink,
 TabContent,
 TabPane,
 Row,
 Col,
 Card,
 CardTitle,
 CardText,
 Button,
} from 'reactstrap'

const Destination1 = () => {
 useEffect(() => {
  window.scrollTo(0, 0)
 }, [])

 const [activeTab, setActiveTab] = useState('1')

 const toggle = (tab) => {
  if (activeTab !== tab) setActiveTab(tab)
 }

 const onWhatsApp = () => {
  const phoneNumber = '6281390070766'
  window.open(`https://wa.me/${phoneNumber}`, '_blank')
 }

 return (
  <div className="dest1">
   <Navbar />
   <div className="cont">
    <div className="bod">
     <div className="cov">
      <img src={images.dest1} alt="Dest 1" />
     </div>
     <div className="hea">
      <h1>Bromo Mid Night</h1>
      <p>
       In this package you will get amazing views such as active volcanoes,
       beautiful waterfalls and the diversity of places you visit.
      </p>
     </div>
     <div className="mai">
      <div className="left">
       <Card className="card">
        <div className="single-price">
         <h5>Private Trip</h5>
         <h4>Start From $0</h4>
        </div>
        <div className="line"></div>
        <div className="custom-price">
         <h5>Custom Trip</h5>
         <h4>Contact Directly</h4>
        </div>
        <div className="button-order" type="button" onClick={onWhatsApp}>
         Order
        </div>
       </Card>
      </div>
      <div className="right">
       <div className="heade">
        <BsFillCalendar2EventFill className="ico" />
        <h2>Itinerary / Tentative</h2>
       </div>
       <div className="bodi">
        <Nav tabs>
         <NavItem>
          <NavLink
           className={activeTab === '1' ? 'active' : ''}
           onClick={() => {
            toggle('1')
           }}
           style={{ cursor: 'pointer' }}
          >
           Day 1
          </NavLink>
         </NavItem>
         <NavItem>
          <NavLink
           className={activeTab === '2' ? 'active' : ''}
           onClick={() => {
            toggle('2')
           }}
           style={{ cursor: 'pointer' }}
          >
           Include
          </NavLink>
         </NavItem>
         <NavItem>
          <NavLink
           className={activeTab === '3' ? 'active' : ''}
           onClick={() => {
            toggle('3')
           }}
           style={{ cursor: 'pointer' }}
          >
           Exclude
          </NavLink>
         </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
         <TabPane tabId="1">
          <Row>
           <Col sm="12">
            <Card body>
             <CardTitle>
              <h3>Day 1 - Itinerary</h3>
             </CardTitle>
             <CardText>
              <ul>
               <li>
                23.00 - 23.30 WIB | Pick up on request (Hotel, Station, Airport)
               </li>
               <li>23.30 - 02.00 WIB | Depart to Jeep area Bromo</li>
               <li>02.30 - 03.30 WIB | Pick up Jeep Bromo sunrise tour</li>
               <li>
                03.30 - 04.20 WIB | Waiting at the coffee shop at the sunrise
                point in the Bromo area
               </li>
               <li>
                04.20 - 08.40 WIB | Penanjakan 1 / Kingkong Hill, Widodaren
                Hill, Sea Sand, Whispering Sand, Bromo Crater (Can walk or ride
                a horse), Teletubbies Hill
               </li>
               <li>
                09.00 - 11.30 WIB | Return to the car and breakfast. Or going to
                Madakaripura Waterfall can be requested
               </li>
               <li>12.00 - 16.00 WIB | Depart to Surabaya City</li>
              </ul>
             </CardText>
            </Card>
           </Col>
          </Row>
         </TabPane>
         <TabPane tabId="2">
          <Row>
           <Col sm="12">
            <Card body>
             <CardTitle>
              <h3>Include</h3>
             </CardTitle>
             <CardText>
              <ul>
               <li>Transport</li>
               <li>Driver</li>
               <li>Gasoline</li>
               <li>Toll</li>
               <li>Parking</li>
               <li>Entrance Ticket Bromo</li>
               <li>4x4 Bromo Jeep</li>
               <li>Mineral Water</li>
              </ul>
             </CardText>
            </Card>
           </Col>
          </Row>
         </TabPane>
         <TabPane tabId="3">
          <Row>
           <Col sm="12">
            <Card body>
             <CardTitle>
              <h3>Exclude</h3>
             </CardTitle>
             <CardText>
              <ul>
               <li>Breakfast</li>
               <li>Lunch</li>
               <li>Dinner</li>
               <li>Horse in Bromo</li>
               <li>Parking</li>
               <li>Madakaripura Cost</li>
              </ul>
             </CardText>
            </Card>
           </Col>
          </Row>
         </TabPane>
        </TabContent>
       </div>
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
        <img src={images.dest1} alt="Item 1" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 2" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 3" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 4" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 5" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 6" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 7" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 8" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 9" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 10" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 11" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 12" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 13" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 14" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 15" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest1} alt="Item 16" />
       </SwiperSlide>
      </Swiper>
     </div>
    </div>
   </div>
   <Testimonial />
   <Contact />
   <Footer />
  </div>
 )
}

export default Destination1
