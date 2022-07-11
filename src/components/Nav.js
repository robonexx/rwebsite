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
    title: 'Work',
    url: '#work',
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
    title: 'Contact',
    url: '/contact',
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
              transition={{ duration: 1, delay: i * 0.2 }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                transition: { duration: 0.2 },
              }}
            >
              {' '}
              {url != '#work' ? (
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
