import React from 'react';
import Nav from './Nav';

// styles
import './Header.scss';
export default function Header() {
  return (
    <div className='header'>
      <h1 href="/">
        {'< '}Kreative Coding{' >'}
      </h1>
      <Nav/>
    </div>
  );
}
