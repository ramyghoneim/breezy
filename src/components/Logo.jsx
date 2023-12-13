// Logo.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Logo.css"; // Assuming you have a separate CSS file

const Logo = () => {
  return (
    <Link to="/">
      <div className='logo'>
        <h1>BREEZY</h1>
      </div>
    </Link>
  );
};

export default Logo;
