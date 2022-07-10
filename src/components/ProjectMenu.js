import { useState } from 'react';

// styles
import './ProjectMenu.scss';

export default function ProjectMenu() {
  const [projUrl, setProjUrl] = useState('https://lockerlegends.org');

  const handleClick = (e, url) => {
    e.preventDefault();
    setProjUrl(url);
  };

  return (
    <div className='projects'>
      <h1>Projects I worked on</h1>
      <div className='proj-menu'>
        <div className='inside-menu'>
          <ul className='proj-nav-links'>
            {content.map(({ url, title, img, id }) => (
              <li key={id}>
                <a href='' onClick={(e) => handleClick(e, url)}>
                  {title}
                </a>
                <img src={img} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <iframe src={projUrl} frameborder='0'></iframe>
    </div>
  );
}

const content = [
  {
    url: 'https://lockerlegends.org',
    title: 'LockerLegends',
    img: '/images/lln1.png',
    id: 1,
  },
  {
    url: 'https://streetartmarket.se',
    title: 'Street Art Market',
    img: '/images/streetartmarket.png',
    id: 2,
  },
  {
    url: '/images/kandyzhome.png',
    title: 'Kandyz (internship',
    img: '/images/kandyzhome.png',
    id: 3,
  },
  {
    url: '/images/bev.png',
    title: 'Bev',
    img: '/images/bev.png',
    id: 4,
  },
];

// use this in scss
// and then intersection observer to
// create a class so the menu will
// have and animation to enter screen

/* 
        @for $i from 0 through 4 {
            li:nth-child(#{$i + 1}n) {
                a {
                    transition-delay: #{$i/10 + 0.8}s;
                }
            }
        }
 */
