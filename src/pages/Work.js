import React from 'react';
import ProjectMenu from '../components/ProjectMenu';
import vid from '../media/video/video.mp4';
// styles
import './Work.scss';

export default function Work() {
  return (
    <div id='work' className='work'>
      <div className='container'>
        <video autoPlay loop muted>
          <source src={vid} type='video/mp4' />
        </video>
        <h1>
          {'<'}Kreative
          <br />
          #Coding{'>'}
        </h1>
      </div>
      <div className="project-container" id="work">
        <ProjectMenu />
      </div>
    </div>
  );
}
