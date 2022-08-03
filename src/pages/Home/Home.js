import React from 'react';
import FunkcampLogo from '../../components/Logo/FunkcampLogo';
import ProjectMenu from '../../components/ProjectMenu';
import img from '../../media/img/beauty.jpg';
// styles
import './Home.scss';

export default function Home() {
  return (
    <div id='work' className='home'>
      <div className='container'>
        <h4>Some some </h4>
        <img src={img} alt="butterfly"/>
        <h1>
          New webiste
          <br />
          User experiences
          <br />
          Interfaces</h1>
      </div>
      <section>
        <FunkcampLogo />
      </section>
      {/* <div className="project-container" id="work">
        <ProjectMenu />
      </div> */}
    </div>
  );
}

{/*  <iframe
            id='ytplayer'
            className="iframe"
            type='text/html'
            width='100%'
            height='360'
            src={`https://www.youtube-nocookie.com/embed/${ytVid1}?start=38`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
          ></iframe> */}
