import React from 'react';
import './Features.css';
import { NavLink, Outlet, Route, useLocation } from 'react-router-dom';
import { CustomizedResponses, BoostProductivity, Interact } from './subcomponents';

const Features: React.FC = () => {
  const location = useLocation();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollBy(0, -61);
  };

  return (
    <div className='Features'>
      <div className='Features__gradient-background'></div> {/* Gradient background */}
      <div className='Features__header'>
        <h1>Features</h1>
      </div>
      <div className='Features__content'>
        <div className='Feature' id="customized-responses">
          <h2><NavLink to="customized-responses" onClick={() => handleScroll('customized-responses')} className={({ isActive }) => (isActive ? 'activeLink' : '')}>Customized Responses</NavLink></h2>
        </div>
        <div className='Feature' id="boost-productivity">
          <h2><NavLink to="boost-productivity" onClick={() => handleScroll('boost-productivity')} className={({ isActive }) => (isActive ? 'activeLink' : '')}>Boost Your Productivity</NavLink></h2>
        </div>
        <div className='Feature' id="interact">
          <h2><NavLink to="interact" onClick={() => handleScroll('interact')} className={({ isActive }) => (isActive ? 'activeLink' : '')}>Interact in New Places and Languages</NavLink></h2>
        </div>
      </div>
      <div className='Features__content-line'>
        <div className={`LineSegment ${location.pathname.includes('customized-responses') ? 'activeLine' : ''}`}></div>
        <div className={`LineSegment ${location.pathname.includes('boost-productivity') ? 'activeLine' : ''}`}></div>
        <div className={`LineSegment ${location.pathname.includes('interact') ? 'activeLine' : ''}`}></div>
      </div>
      <Outlet />
    </div>
  );
};

export default Features;
