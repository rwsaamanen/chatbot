import React from 'react'
import { Link } from 'react-router-dom';

import Github from "../../assets/github.png"
import Google from "../../assets/google.png"
import Facebook from "../../assets/facebook.png"

import './LogIn.css'

const LogIn = () => {

  return (
    <div className='LogIn'>
      <div className='LogIn__center-container'>
        <div className='LogIn__content'>
          <div className='LogIn__header'>
            <h1>Log in to Chatbot</h1>
          </div>
          <div className='LogIn__button-container'>
            <div className='LogIn__button-github'>
              <img src={Github} alt='Github' />
              Continue with Github
            </div>
          </div>
          <div className='LogIn__button-container'>
            <div className='LogIn__button-google'>
              <img src={Google} alt='Google' />
              Continue with Google
            </div>
          </div>
          <div className='LogIn__button-container'>
            <div className='LogIn__button-facebook'>
              <img src={Facebook} alt='Facebook' />
              Continue with Facebook
            </div>
          </div>
        </div>
        <div className='LogIn__line'></div>
        <div className='LogIn__signup-container'>
          <span>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
        </div>
      </div>
    </div>
  )
}


export default LogIn