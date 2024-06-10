'use client';

import React, { useState, useEffect } from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      id="header" 
      className={`fixed-top d-flex align-items-center ${
        scroll > 100 ? 'header-scrolled' : ''
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        {/* Uncomment below if you have an image logo */}
        <a href="/" className="logo me-auto me-lg-0">
          <img src="assets/images/logofinal.png" alt="Tellis Catering" className="img-fluid" />
        </a>
        <Nav />
        <AppBtn name="book an event"/>
      </div>
    </header> 
  );
}
