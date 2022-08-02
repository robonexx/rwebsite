import React from 'react';
import FunkcampLogo from '../../components/Logo/FunkcampLogo';
import ProjectMenu from '../../components/ProjectMenu';
import vid from '../../media/video/tonygogo.mp4';
// styles
import './Home.scss';

export default function Home() {
  return (
    <div id='work' className='home'>
      <div className='container'>
        <h4>Tony Gogo Roché Apinsa Willow Evann Manne Schütt</h4>
        <video autoPlay loop muted>
          <source src={vid} type='video/mp4' />
        </video>
        <h1>
          Funkcamp
          <br />
          MARCH 2023
          <br />
          #Sweden#</h1>
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
