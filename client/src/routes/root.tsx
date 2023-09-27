import React, { useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

import Navbar from '../components/navbar/Navbar';
import './Root.css';

export default function Root(): React.ReactElement {
  const navigate = useNavigate();

  // Replace this line with the actual condition or function to check if the user is logged in
  const isUserLoggedIn = false;

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate('/');
    }
  }, [isUserLoggedIn, navigate]);

  return (
    <>
      <div id="navbar">
        <Navbar isUserLoggedIn={isUserLoggedIn} />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}