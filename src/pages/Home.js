import React from 'react';
import vid from '../media/video/video.mp4'
// styles
import './Home.scss';
export default function Home() {
  return (
      <div id='home' className='home'>
          <div className="container">
        <video autoPlay loop muted>
          <source
            src={vid} type="video/mp4"
          />
                 
              </video>
          <h1>
          {"<"}Kreative<br />
         #Coding{">"}
      </h1> 
          </div>
     
    </div>
  );
}
