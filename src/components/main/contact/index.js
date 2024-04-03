import React, { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Select from 'react-select'
import './index.css'

const Contact = () => {
 const onWhatsApp = () => {
  const phoneNumber = '6281390070766'
  window.open(`https://wa.me/${phoneNumber}`, '_blank')
 }

 const [subjectEmail, setSubjectEmail] = useState('')
 const [bodyEmail, setBodyEmail] = useState('')

 const onMail = () => {
  const email = 'indojavatrip@gmail.com'
  const subject = encodeURIComponent(subjectEmail)
  const body = encodeURIComponent(bodyEmail)
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  setModal(!modal)
 }

 const [modal, setModal] = useState(false)

 const toggle = () => setModal(!modal)

 const options = [
  { value: 'Bromo Mid Night', label: 'Bromo Mid Night', name: 'subject' },
  { value: '2D/1N Bromo', label: '2D/1N Bromo', name: 'subject' },
  {
   value: '3D/2N Bromo & Malang Batu City',
   label: '3D/2N Bromo & Malang Batu City',
   name: 'subject',
  },
  {
   value: '3D/2N Bromo & Tumpaksewu',
   label: '3D/2N Bromo & TUmpakseweu',
   name: 'subject',
  },
  {
   value: '3D/2N Bromo & Surabaya',
   label: '3D/2N Bromo & Surabaya',
   name: 'subject',
  },
  {
   value: '3D/2N Bromo & Ijen Crater',
   label: '3D/2N Bromo & Ijen Crater',
   name: 'subject',
  },
  {
   value: '4D/3N Bromo & Ijen Crater & Surabaya',
   label: '4D/3N Bromo & Ijen & Surabaya',
   name: 'subject',
  },
  {
   value: '4D/3N Bromo & Ijen Crater & Tumpaksewu',
   label: '4D/3N Bromo & Ijen & Tumpaksewut',
   name: 'subject',
  },
  {
   value: '4D/3N Bromo & Tumpaksewu & Surabaya',
   label: '4D/3N Bromo & Tumpaksewu & Surabaya',
   name: 'subject',
  },
  {
   value: '4D/3N & Ijen Crater & Malang',
   label: '4D/3N & Ijen Crater & Malang',
   name: 'subject',
  },
  {
   value: '4D/3N Bromo & Malang & Surabaya',
   label: '4D/3N Bromo & Malang & Surabaya',
   name: 'subject',
  },
  {
   value: '4D/3N Bromo & Tumpaksewu & Malang',
   label: '4D/3N Bromo & Tumpaksewu & Malang',
   name: 'subject',
  },
  { value: '4D/3N Rinjani', label: '4D/3N Rinjani', name: 'subject' },
  {
   value: '5D/4N Bromo & Tumpaksewu & Malang & Surabaya',
   label: '5D/4N Bromo & Tumpaksewu & Malang & Surabaya',
   name: 'subject',
  },
  {
   value: '5D/4N Bromo & Ijen Crater & Tumpaksewu & Malang',
   label: '5D/4N Bromo & Ijen Crater & Tumpaksewu & Malang',
   name: 'subject',
  },
  {
   value: '5D/4N Bromo & Ijen Crater & Malang & Surabaya',
   label: '5D/4N Bromo & Ijen Crater & Malang & Surabaya',
   name: 'subject',
  },
  {
   value: '5D/4N Bromo & Ijen Crater & Tumpaksewu & Surabaya',
   label: '5D/4N Bromo & Ijen Crater & Tumpaksewu & Surabaya',
   name: 'subject',
  },
  { value: '5D/4N Rinjani', label: '5D/4N Rinjani', name: 'subject' },
  {
   value: '6D/5N Bromo & Ijen Crater & Tumpaksewu & Malang & Surabaya',
   label: '5D/4N Bromo & Ijen Crater & Tumpaksewu & Malang & Surabaya',
   name: 'subject',
  },
 ]

 const openModal = () => {
  setSubjectEmail('')
  setBodyEmail('')
  setModal(true)
 }

 const onChange = (event) => {
  if (event.name === 'subject') {
   setSubjectEmail(event.value)
  } else if (event.target.name === 'body-email') {
   setBodyEmail(event.target.value)
  }
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
  <div className="contact" id="contact">
   <div className="contain">
    <div className="header">Contact us immediately for questions or orders</div>
    <div className="body">
     <div className="social">
      <div className="one">
       <div>Follow Our</div>
      </div>
      <div className="two">
       <FaInstagram className="logo" onClick={onInstagram} />
       <div className="detail" onClick={onInstagram}>
        Instagram
       </div>
      </div>
      <div className="three">
       <FaTiktok className="logo" onClick={onTiktok} />
       <div className="detail" onClick={onTiktok}>
        Tiktok
       </div>
      </div>
      <div className="four">
       <FaFacebookSquare className="logo" onClick={onFacebook} />
       <div className="detail" onClick={onFacebook}>
        Facebook
       </div>
      </div>
     </div>
     <div className="media">
      <div className="description">
       Experience the thrill of discovering captivating insights and exciting
       updates on our Indojavatrip social media channels, waiting to be explored
       by you.
      </div>
      <div className="button">
       <div className="one" type="button" onClick={() => onWhatsApp()}>
        <FaWhatsapp className="logo" />
        <span className="text">WhatsApp</span>
       </div>
       <div className="two" type="button" onClick={openModal}>
        <MdOutlineMail className="logo" />
        <span className="text">Email</span>
       </div>
      </div>
     </div>
    </div>
   </div>

   <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Email</ModalHeader>
    <ModalBody>
     <Select
      options={options}
      id="subject"
      name="subject"
      defaultValue={{ label: 'Choose Package', value: '', name: 'subject' }}
      onChange={onChange}
     />
     <textarea
      className="body-email"
      id="body-email"
      name="body-email"
      placeholder="Enter your message here..."
      rows="4"
      cols="50"
      value={bodyEmail}
      onChange={onChange}
     ></textarea>
    </ModalBody>
    <ModalFooter>
     <Button color="primary" onClick={onMail}>
      Send
     </Button>{' '}
     <Button color="secondary" onClick={toggle}>
      Cancel
     </Button>
    </ModalFooter>
   </Modal>
  </div>
 )
}

export default Contact
