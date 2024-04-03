import React from 'react'
import { useNavigate } from 'react-router-dom'
import images from '../../assets/images'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import './index.css'

const Footer = () => {
 const history = useNavigate()

 const onHome = () => {
  history('/')
  window.location.reload()
  window.scrollTo(0, 0)
 }

 const onInstagram = () => {
  window.open('https://www.instagram.com/indojavatrip/', '_blank')
 }

 const onTiktok = () => {
  window.open('https://www.tiktok.com/@indojavatriporganizer', '_blank')
 }

 const onFacebook = () => {
  window.open('https://www.facebook.com/indojavatrip/', '_blank')
 }

 return (
  <div className="footer">
   <div className="contain">
    <div className="body">
     <div className="brand">
      <img src={images.logo} alt="Brand" />
      <div className="detail">
       Indojavatrip is an tour agency operating in East Java, Indonesia. Since
       our foundation, Indojavatrip has been the leading tour agency in East
       Java, Indonesia.
      </div>
     </div>
     <div className="links">
      <div className="header">Quick Links</div>
      <div className="item" onClick={onHome}>
       Home
      </div>
      {/* <div className="item">Package</div>
      <div className="item">Contact</div> */}
     </div>
     <div className="category">
      <div className="header">Category</div>
      <a href="/package-1" className="item">
       East Java 2D/1N
      </a>
      <a href="/package-2" className="item">
       East Java 3D/2N
      </a>
      <a href="/package-3" className="item">
       East Java 4D/3N
      </a>
      <a href="/package-4" className="item">
       East Java 5D/4N
      </a>
      <a href="/package-5" className="item">
       East Java 6D/5N
      </a>
      <a href="/package-6" className="item">
       Central Java
      </a>
      <a href="/package-7" className="item">
       Lombok City
      </a>
      <a href="/package-8" className="item">
       Rinjani
      </a>
      <a href="/package-9" className="item">
       East & Center Java
      </a>
     </div>
     <div className="connection">
      <div className="header">Contact</div>
      <div className="item">
       <FaWhatsapp className="logo" />
       <p>+62 813-9007-0766</p>
      </div>
      <div className="item">
       <MdOutlineMail className="logo" />
       <p>indojavatrip@gmail.com</p>
      </div>
     </div>
     <div className="social">
      <div className="header">Follow Us</div>
      <div className="item">
       <FaInstagram className="logo" onClick={onInstagram} />
       <p onClick={onInstagram}>Instagram</p>
      </div>
      <div className="item">
       <FaTiktok className="logo" onClick={onTiktok} />
       <p onClick={onTiktok}>Tiktok</p>
      </div>
      <div className="item">
       <FaFacebookSquare className="logo" onClick={onFacebook} />
       <p onClick={onFacebook}>Facebook</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Footer
