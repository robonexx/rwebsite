import {useState, useEffect, useRef} from 'react'
import Img1 from '../../media/img/culture.jpg'
import Img2 from '../../media/img/eighties.jpg'
import Img3 from '../../media/img/beauty.jpg'
import Img4 from '../../media/img/unknown.jpg'
import Img5 from '../../media/img/knowledge.jpg'

// styles
import './Home.scss'

export default function Home() {
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
    <div className='home'>
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
        <img src={Img2} alt='something special'/>
      </div>
      </section>
      <section>
      <div className='container' >
        <h1 className='headline'>Terve</h1>
        <p>below element is {!visible ? ' not in viewport' : ' in viewport'} </p>
        <img src={Img3} alt='something special'/>
      </div>
      </section>
      <section>
      <div className='container' ref={viewRef}>
        <h1 className='headline'>Hola</h1>
        <p>{!visible ? 'not in viewport' : 'is in viewport'}</p>
        <img src={Img4} alt='something special'/>
      </div>
      </section>
      <section>
      <div className='container'>
        <h1 className='headline'>Bonjour</h1>
       {/*  <p>{!visible ? 'not in viewport' : 'is in viewport'}</p> */}
        <img src={Img5} alt='something special'/>
      </div>
      </section>
    </div>
  )
}
