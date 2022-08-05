import React from 'react';
import Nav from './Nav';

// styles
import './Header.scss';
import Logo from './Logo/Logo';
import Robone from './Logo/Robone';
export default function Header() {
  return (
    <div className='header'>
      <Robone />
      <Nav/>
    </div>
  );
}
