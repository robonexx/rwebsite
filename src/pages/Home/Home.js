import React from 'react';
import ProjectMenu from '../../components/ProjectMenu';
import vid from '../../media/video/video.mp4';
// styles
import './Home.scss';

export default function Home() {
  return (
    <div id='work' className='home'>
      <div className='container'>
        <video autoPlay loop muted>
          <source src={vid} type='video/mp4' />
        </video>
        <h1>
          Funkcamp
          <br />
          #Sweden
        </h1>
      </div>
      <section>

      </section>
      <div className="project-container" id="work">
        <ProjectMenu />
      </div>
    </div>
  );
}
