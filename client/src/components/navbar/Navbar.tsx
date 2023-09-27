import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './Navbar.css'

interface NavbarProps {
  user: any;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  const resetSelectedLink = () => {
    setSelectedLink('');
  };

  const logout = () => {
    try {
      window.location.href = 'http://localhost:5000/auth/logout';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="chatbot__navbar">
      <div className="chatbot__navbar-links">
        <div className="chatbot__navbar-links_header">
          <h1 onClick={resetSelectedLink}>
            <Link to={'/'}>Chatbot</Link>
          </h1>
        </div>
        <div className="chatbot__navbar-links_container">
          <p className={selectedLink === 'features' ? 'selected' : ''} onClick={() => handleLinkClick('features')}>
            <Link to={'/features'}>Features</Link>
          </p>
          <p className={selectedLink === 'openai' ? 'selected' : ''} onClick={() => handleLinkClick('openai')}>
            <Link to={'/openai'}>Open AI</Link>
          </p>
          <p className={selectedLink === 'blog' ? 'selected' : ''} onClick={() => handleLinkClick('blog')}>
            <Link to={'/blog'}>About Us</Link>
          </p>
          <p className={selectedLink === 'contact' ? 'selected' : ''} onClick={() => handleLinkClick('contact')}>
            <Link to={'/contact'}>Contact</Link>
          </p>
        </div>
      </div>
      <div className="chatbot__navbar-sign">
        {!user ? (
          <>
            <Link to={'/login'}>
              <button type='button' className='chatbot__navbar-sign-in'>Log in</button>
            </Link>
            <Link to={'/signup'}>
              <button type='button' className='chatbot__navbar-sign-up'>Sign up</button>
            </Link>
          </>
        ) : (
          <div className="chatbot__navbar-user">
            <img src={user.photos[0].value} alt="Avatar" className="user-avatar" />
            <span className="user-name">{user.name.givenName}</span>
            <Link to={'/'}>
              <button type='button' className='chatbot__navbar-sign-out' onClick={logout}>Sign out</button>
            </Link>
          </div>
        )}
      </div>
      <div className="chatbot__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="chatbot__navbar-menu_container scale-up-center">
            <div className="chatbot__navbar-menu_container-links">
              <p><Link to={'/openai'}>Open AI</Link></p>
              <p><Link to={'/features'}>Features</Link></p>
              <p><Link to={'/blog'}>About Us</Link></p>
              <p><Link to={'/contact'}>Contact</Link></p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;