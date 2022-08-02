import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';
// styles
import './ProjectMenu.scss';

export default function ProjectMenu() {
  const [projUrl, setProjUrl] = useState('https://lockerlegends.org');
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleClick = (e, url) => {
    e.preventDefault();
    setProjUrl(url);
    let thisImg = document.getElementsByTagName('img');
    e.target.bind(this.thisImg).style.opacity = '1';
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
     {/*  <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='btn'
        onClick={() => (modalOpen ? close() : open())}
      >
        Check project
      </motion.button> */}
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<iframe src={projUrl} frameBorder='0'></iframe>}
        ></Modal>
      )}
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

/* const ModalContent = (e, projUrl) => {
  e.preventDefault();
  return (
    <>
      <iframe src={projUrl} frameBorder='0'></iframe>
    </>
  );
};
 */