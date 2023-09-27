import React from 'react'
import UwasaLogo from '../../assets/uwasa.png'


import './Chatbot.css'

export default function Chatbot() {
  return (
    <div className='Chatbot'>
      <aside className='chatbot__aside_left'>
        <div>
          <h1 className='chatbot__aside_left-button'>
            <span>+</span>
            New Chat
          </h1>
        </div>
      </aside>
      <section className='chatbot__section'>
        <div className='chatbot__chat-log'>
          <div className='chatbot__chat-log-message'>
            <div className='chatbot__chat-message-center'>
              <div className='chatbot__avatar'>
              </div>
              <div className='chatbot__chat-message'>
                Hello
              </div>
            </div>
          </div>
          <div className='chatbot__chat-log-message-chatbot'>
            <div className='chatbot__chat-message-center'>
              <div className='chatbot__avatar-chatbot'>
                <img src={UwasaLogo} alt='uwasa logo' className='chatbot__avatar-image' />
              </div>
              <div className='chatbot__chat-message'>
                AI
              </div>
            </div>
          </div>
        </div>
        <div className='chatbot__input'>
          <textarea rows={1} className='chatbot__input-textarea' placeholder='Send a message'></textarea>
        </div>
        <p className='chatbot__bottom-text'>Chatbot may display inaccurate or offensive information.</p>
      </section>
    </div>
  )
}