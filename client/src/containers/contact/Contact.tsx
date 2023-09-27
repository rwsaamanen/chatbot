import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='Contact__header'>
        <h1>Contact us</h1>
      </div>
      <div className='Contact__boxContainer'>
        <div className='Contact__box'>
          <h2>Support</h2>
          <p>Get help with our products and services</p>
          <Link to={'/help'}>
          <button type='button' className='Contact__button'>Get Support</button>
        </Link>
        </div>
        <div className='Contact__box'>
          <h2>Issues</h2>
          <p>Did you find any issues within the website?</p>
          <Link to={'/help'}>
          <button type='button' className='Contact__button'>Report Issue</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
