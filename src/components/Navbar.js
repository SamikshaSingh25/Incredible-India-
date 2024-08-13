// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import a from './Navbar.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    
const [scrolled, setScrolled] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <nav className={`${a.navbar} ${scrolled ? a.scrolled : ''}`}>
      <div className={a.logo}>
        <Link to="/" className={a.logoname}>Incredible India<i className="fa-solid fa-carrot" style={{ color: '#eb750d' }}></i></Link>
      </div>
      <div className={a.links}>
        <Link to="/" className={a.navlink}>Home</Link>
        <Link to="/" className={a.navlink}>Explore</Link>
        <Link to="/" className={a.navlink}>Articles</Link>
        <Link to="/" className={a.navlink}>Galleries</Link>
        <Link to="/" className={a.navlink}>Contact</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
