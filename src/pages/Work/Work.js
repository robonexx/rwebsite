import {useState, useEffect, useRef} from 'react'

import Img1 from '../../media/img/beauty.jpg'


// styles
import './Work.scss'

export default function Work() {
  const [visible, setVisible] = useState()
  const viewRef = useRef();



  useEffect(() => {
    /* console.log('ref: ', viewRef.current) */
    const observer = new IntersectionObserver((el) => {
      const element = el[0];
      setVisible(element.isIntersecting)     
    })
    observer.observe(viewRef.current)
  }, [])

  console.log('is visible?: ', visible)
  return (
    <div className='work'>
      <section>
      <div className='container'>
        <h1 className='headline'>Hello</h1>
       {/*  <p>{!visible ? 'not in viewport' : 'is in viewport'}</p> */}
        <img src={Img1} alt='something special'/>
      </div>
      </section>
      <section>
      <div className='container'>
        <h1 className='headline'>Hej</h1>
       {/*  <p>{!visible ? 'not in viewport' : 'is in viewport'}</p> */}
        <img src={Img1} alt='something special'/>
      </div>
      </section>
      <section>
      <div className='container' >
        <h1 className='headline'>Terve</h1>
        <p>below element is {!visible ? ' not in viewport' : ' in viewport'} </p>
        <img src={Img1} alt='something special'/>
      </div>
      </section>
      <section>
      <div className='container' ref={viewRef}>
        <h1 className='headline'>Hola</h1>
        <p>{!visible ? 'not in viewport' : 'is in viewport'}</p>
        <img src={Img1} alt='something special'/>
      </div>
      </section>
      <section>
      <div className='container'>
        <h1 className='headline'>Bonjour</h1>
       {/*  <p>{!visible ? 'not in viewport' : 'is in viewport'}</p> */}
        <img src={Img1} alt='something special'/>
      </div>
      </section>
    </div>
  )
}

