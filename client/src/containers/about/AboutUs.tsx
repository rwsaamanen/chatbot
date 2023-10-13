import React from 'react';
import './AboutUs.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const AboutUs: React.FC = () => {
  const location = useLocation();

  return (
    <div className='about'>
      <div className='about__sidebar'>
        <div className='about__header'>
          <h1>About us</h1>
          <h2>Web application to get some help</h2>
          <h3>Insights about stack, timeline, etc</h3>
        </div>
        <div className='about__links'>
          <NavLink to='timeline' className={`about__link ${location.pathname.includes('timeline') ? 'activeLink' : ''}`}>Timeline</NavLink>
          <NavLink to='tech-stack' className={`about__link ${location.pathname.includes('tech-stack') ? 'activeLink' : ''}`}>Tech stack</NavLink>
          <NavLink to='team' className={`about__link ${location.pathname.includes('team') ? 'activeLink' : ''}`}>Developers</NavLink>

        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutUs;
