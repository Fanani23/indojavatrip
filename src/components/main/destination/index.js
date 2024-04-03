import React, { useEffect } from 'react'
import images from '../../../assets/images'
import { Card } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Destination = () => {
 const history = useNavigate()

 useEffect(() => {
  const handleScroll = () => {
   const title = document.querySelector('.destination .contain .header .title')
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
   const title = document.querySelector('.destination .contain .header .detail')
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
   const title = document.querySelector('.destination .contain .body')
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

 const onDest3 = () => {
  history('/destination-3')
  window.location.reload()
  window.scrollTo(0, 0)
 }

 const onDest4 = () => {
  history('/destination-4')
  window.location.reload()
  window.scrollTo(0, 0)
 }

 return (
  <div className="destination">
   <div className="contain">
    <div className="header">
     <div className="title">Hot Packages</div>
     <div className="detail">
      Discover top unforgettable destinations in East Java, Indonesia. Trust our
      expertise and unparalleled service quality. Here's why savvy travelers
      choose Indojavatrip.
     </div>
    </div>
    <div className="body">
     <div className="menu">
      <Card className="item">
       <img className="img" src={images.dest4p} alt="Destination 1" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img
        className="label"
        src={images.hotSale2}
        alt="Label Destination 1"
        onClick={onDest4}
       />
       <p className="head">3 Days / 2 Nights</p>
       <a href="/destination-3" rel="noopener noreferrer" className="title">
        Bromo & Tumpaksewu
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img
        className="img"
        src={images.dest3p}
        alt="Destination 2"
        onClick={onDest3}
       />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 2" />
       <p className="head">3 Days 2 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo & Ijen Crater
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img className="img" src={images.dest7} alt="Destination 3" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 3" />
       <p className="head">4 Days / 3 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo, Ijen Crater & Surabaya
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img className="img" src={images.dest8} alt="Destination 4" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 4" />
       <p className="head">4 Days / 3 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo, Ijen Crater & Tumpaksewu
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img className="img" src={images.dest9} alt="Destination 5" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 5" />
       <p className="head">4 Days / 3 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo, Tumpaksewu & Surabaya
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img className="img" src={images.dest11} alt="Destination 6" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 6" />
       <p className="head">4 Days / 3 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo, Malang & Surabaya
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img className="img" src={images.dest12} alt="Destination 7" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 7" />
       <p className="head">5 Days / 4 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo, Tumpaksewu, Malang & Surabaya
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img className="img" src={images.dest16} alt="Destination 8" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 8" />
       <p className="head">5 Days / 4 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo, Ijen Crater, Tumpaksewu & Surabaya
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
      <Card className="item">
       <img className="img" src={images.dest17} alt="Destination 9" />
       <div className="star">
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="full">&#9733;</span>
        <span className="half">&#9733;</span>
       </div>
       <img className="label" src={images.hotSale2} alt="Label Destination 9" />
       <p className="head">6 Days / 5 Nights</p>
       <a href="/destination-4" rel="noopener noreferrer" className="title">
        Bromo, Ijen, Tumpaksewu, Malang & Surabaya
       </a>
       <p className="detail">
        In this package you will get amazing views such as active volcanoes,
        beautiful waterfalls and the diversity of places you visit.
       </p>
      </Card>
     </div>
     <div className="button" type="button">
      View All Packages
     </div>
    </div>
   </div>
  </div>
 )
}

export default Destination
