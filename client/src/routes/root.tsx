// src/routes/Root.tsx
import React, { useEffect, useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import UserContext from '../contexts/usercontext/UserContext';
import './Root.css';

export default function Root(): React.ReactElement {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      setTimeout(() => {
        navigate('/');
      }, 1000); // Delay the redirection for 1 second (adjust as needed)
    }
  }, [user, loading, navigate]);

  return (
    <>
      <div id="navbar">
        <Navbar user={user} />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
