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

const Destination4 = () => {
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
  <div className="dest4">
   <Navbar />
   <div className="cont">
    <div className="bod">
     <div className="cov">
      <img src={images.dest4} alt="Dest 1" />
     </div>
     <div className="hea">
      <h1>3 Day 2 Night Mount Bromo & Tumpaksewu</h1>
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
           Day 2
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
           Day 3
          </NavLink>
         </NavItem>
         <NavItem>
          <NavLink
           className={activeTab === '4' ? 'active' : ''}
           onClick={() => {
            toggle('4')
           }}
           style={{ cursor: 'pointer' }}
          >
           Include
          </NavLink>
         </NavItem>
         <NavItem>
          <NavLink
           className={activeTab === '5' ? 'active' : ''}
           onClick={() => {
            toggle('5')
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
                12.00 - 12.30 WIB | Pick up on request (Hotel, Station, Airport)
               </li>
               <li>12.30 - 16.30 WIB | Lunch & Depart to hotel area Bromo</li>
               <li>
                16.30 - 16.30 WIB | Check in hotel and rest & dinner in area
                Bromo
               </li>
              </ul>
             </CardText>
             <h6 style={{ color: 'red' }}>
              Note: Madakaripura Waterfall can be requested (depends on your
              flight schedule)
             </h6>
            </Card>
           </Col>
          </Row>
         </TabPane>
         <TabPane tabId="2">
          <Row>
           <Col sm="12">
            <Card body>
             <CardTitle>
              <h3>Day 2 - Itinerary</h3>
             </CardTitle>
             <CardText>
              <ul>
               <li>02.30 - 03.30 WIB | Pick up jeep Bromo sunrise tour</li>
               <li>
                03.30 - 04.10 WIB | Waiting at the coffee shop at the sunrise
                point in Bromo area
               </li>
               <li>
                04.10 - 08.40 WIB | Penanjakan 1 / Kingkong Hill, Widodaren
                Hill, Sea Sand, Whispering Sand, Bromo Crater (Can walk or ride
                a horse), Teletubbies Hill
               </li>
               <li>
                08.40 - 11.30 WIB | Return to the hotel, breakfast & check out
                from hotel
               </li>
               <li>12.00 - 16.30 WIB | Depart to Cottages Tumpaksewu, lunch</li>
               <li>16.30 - 16.30 WIB | Check in Cottages, dinner, and rest</li>
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
              <h3>Day 3 - Itinerary</h3>
             </CardTitle>
             <CardText>
              <ul>
               <li>06.00 - 06.30 WIB | Panorama kapas biru</li>
               <li>06.30 - 07.00 WIB | Breakfast</li>
               <li>
                07.00 - 09.00 WIB | Panorama Tumpaksewu (Walk 200 meters),
                Bottom Waterfall (Walk down about 20 minutes), Nirwana Wall,
                Blue Lake, and Drip Cave
               </li>
               <li>
                09.00 - 09.00 WIB | Return to Cottages (Hiking about 30 minutes)
               </li>
               <li>09.00 - 12.00 WIB | Lunch and checkout</li>
               <li>12.30 - 17.30 WIB | Depart to Surabaya City</li>
              </ul>
             </CardText>
             <h6 style={{ color: 'red' }}>
              Note: Return flight in night or stay one night in SUrabaya, we can
              change the itinerary to suit your flight schedule. You will get
              detailed the itinerary once you submit your flight time schedule
             </h6>
            </Card>
           </Col>
          </Row>
         </TabPane>
         <TabPane tabId="4">
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
               <li>1 Night Hotel in Bromo & Breakfast</li>
               <li>1 Night Cottages in Tumpaksewu & Breakfast</li>
               <li>Entrance Ticket Tumpaksewu & Guide Tumpaksewu</li>
               <li>Wifi portable</li>
              </ul>
             </CardText>
            </Card>
           </Col>
          </Row>
         </TabPane>
         <TabPane tabId="5">
          <Row>
           <Col sm="12">
            <Card body>
             <CardTitle>
              <h3>Exclude</h3>
             </CardTitle>
             <CardText>
              <ul>
               <li>Lunch</li>
               <li>Dinner</li>
               <li>Horse in Bromo</li>
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
        <img src={images.dest4} alt="Item 1" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 2" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 3" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 4" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 5" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 6" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 7" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 8" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 9" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 10" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 11" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 12" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 13" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 14" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 15" />
       </SwiperSlide>
       <SwiperSlide className="item">
        <img src={images.dest4} alt="Item 16" />
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

export default Destination4
