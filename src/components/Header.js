import React from 'react';
import Nav from './Nav';

// styles
import './Header.scss';
import Logo from './Logo/Logo';
export default function Header() {
  return (
    <div className='header'>
      <div className="header_logo" href="/">
      <Logo /> 
      </div>      
      <Nav/>
    </div>
  );
}
