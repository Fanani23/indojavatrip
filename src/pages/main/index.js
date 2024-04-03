import React, { useEffect } from 'react'
import './index.css'
import Navbar from '../../components/navbar'
import Carousel from '../../components/carousel'
import Package from '../../components/main/package'
import Destination from '../../components/main/destination'
import About from '../../components/main/about'
import Gallery from '../../components/main/gallery'
import Testimonial from '../../components/main/testimonial'
import Contact from '../../components/main/contact'
import Footer from '../../components/footer'

const Main = () => {
 useEffect(() => {
  window.scrollTo(0, 0)
 }, [])

 return (
  <div className="main">
   <div className="contain">
    <Navbar />
    <Carousel />
    <Package />
    <Destination />
    <About />
    <Gallery />
    <Testimonial />
    <Contact />
    <Footer />
   </div>
  </div>
 )
}

export default Main
