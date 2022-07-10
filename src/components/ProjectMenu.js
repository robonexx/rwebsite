import React from 'react';

// styles
import './ProjectMenu.scss';

export default function ProjectMenu() {
  return (
    <div className='projects'>
      <h1>Projects I worked on</h1>
      <div className='proj-menu'>
        <div className='inside-menu'>
          <ul className='proj-nav-links'>
            {content.map(({ url, title, img }) => (
              <li key={url}>
                <a href={url}>{title}</a>
                <img src={img} alt={title}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const content = [
  {
    url: '#1',
    title: 'LockerLegends',
    img: '/images/lln1.png',
  },
  {
    url: '#2',
    title: 'Street Art Market',
    img: '/images/streetartmarket.png',
  },
  {
    url: '#2',
    title: 'Kandyz (internship',
    img: '/images/kandyzhome.png',
  },
  {
    url: '#1',
    title: 'Bev',
    img: '/images/bev.png',
  },
];
