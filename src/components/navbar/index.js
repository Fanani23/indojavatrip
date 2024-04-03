/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import images from '../../assets/images'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import './index.css'

const Navbar = () => {
 const history = useNavigate()
 const [isOpen, setIsOpen] = useState(false)
 const [isScrolled, setIsScrolled] = useState(false)

 const onMain = () => {
  history('/')
 }

 const toggleMenu = () => {
  setIsOpen(!isOpen)
 }

 useEffect(() => {
  const handleScroll = () => {
   const scrollY = window.scrollY
   setIsScrolled(scrollY > 10)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
   window.removeEventListener('scroll', handleScroll)
  }
 }, [])

 return (
  <div className="navbar-custom">
   <div className="contain">
    <div className={`${isScrolled ? 'scroll' : 'unscroll'}`}>
     <nav className="major">
      <div className="brand">
       <img src={images.logo} alt="Brand Logo" type="button" onClick={onMain} />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
       {isOpen ? (
        <FaTimes size={30} style={{ color: '#ff6501' }} />
       ) : (
        <FaBars size={30} style={{ color: '#ff6501' }} />
       )}
      </div>
      <div className="menu">
       {isOpen ? (
        <>
         <div className="list active">
          <div className="open">
           <div className="top">
            <div className="left">
             <a href="/">Home</a>
             <a href="/">Package</a>
             <a href="/">Contact</a>
             <a href="/">Languange</a>
            </div>
            <div className="right">
             <a href="/">East Java 2D/1N</a>
             <a href="/">East Java 3D/2N</a>
             <a href="/">East Java 4D/3N</a>
             <a href="/">East Java 5D/4N</a>
             <a href="/">East Java 6D/5N</a>
             <a href="/">Central Java</a>
             <a href="/">Lombok City</a>
             <a href="/">Rinjani</a>
             <a href="/">East & Center Java</a>
            </div>
           </div>
           <div className="line"></div>
           <div className="center">
            <div className="left">
             <FaWhatsapp className="icon" />
             <h5>WhatsApp</h5>
            </div>
            <div className="right">
             <MdOutlineMail className="icon" />
             <h5>Email</h5>
            </div>
           </div>
           <div className="line"></div>
           <div className="bottom">
            <FaInstagram />
            <FaFacebookSquare />
            <FaTiktok />
           </div>
          </div>
         </div>
        </>
       ) : (
        <ul className="list">
         <li className="close">
          <a href="/">Home</a>
         </li>
         <li className="close">
          <div className="dropdown-custom">
           <button className="dropdown-toggle-custom">Package</button>
           <div className="dropdown-menu-custom">
            <a href="/package-1">East Java 2D/1N</a>
            <a href="/package-2">East Java 3D/2N</a>
            <a href="/package-3">East Java 4D/3N</a>
            <a href="/package-4">East Java 5D/4N</a>
            <a href="/package-5">East Java 6D/5N</a>
            <a href="/package-6">Central Java</a>
            <a href="/package-7">Lombok City</a>
            <a href="/package-8">Rinjani</a>
            <a href="/package-9">East & Center Java</a>
           </div>
          </div>
         </li>
         <li className="close">
          <a href="#contact">Contact</a>
         </li>
         <li className="close">
          <div className="dropdown-custom">
           <button className="dropdown-toggle-custom">Languange</button>
           <div className="dropdown-menu-custom">
            <a href="/">Indonesia</a>
            <a href="/">English</a>
            <a href="/">Malaysia</a>
            <a href="/">Chinese</a>
           </div>
          </div>
         </li>
        </ul>
       )}
      </div>
     </nav>
    </div>
   </div>
  </div>
 )
}

export default Navbar
