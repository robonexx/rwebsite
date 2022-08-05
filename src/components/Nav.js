import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// styles
import './Nav.scss';

const navItems = [
  {
    title: 'home',
    url: '/',
  },
  {
    title: 'Funkcamp',
    url: '/funkcamp',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Resources',
    url: '/resources',
  },
  {
    title: 'NB',
    url: '/nb',
  },
];

export default function Nav() {
  return (
    <>
      <nav className='nav'>
        <ul className='nav_menu'>
          {navItems.map(({ title, url }, i) => (
            <motion.li
              className='nav_item'
              key={title}
              initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              whileHover={{
                scale: 1.1,
                rotate: 4,
                transition: { duration: 0.1 },
              }}
            >
              {' '}
              {url !== '#work' ? (
                <>
                  <Link to={url} className='nav_links'>
                    {title}
                  </Link>
                </>
              ) : (
                <>
                  <a href={url} className="nav_links">Work</a>
                </>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </>
  );
}
