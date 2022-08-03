import {useState, useEffect, useRef} from 'react'
import FunkcampLogo from '../../components/Logo/FunkcampLogo'
import vid from '../../media/video/tonygogo.mp4'

// styles
import './Funkcamp.scss'

export default function Funkcamp() {

  return (
    <div className='funkcamp'>
        <div className='container'>
        <h4 >Tony Gogo Roché Apinsa Willow Evann Manne Schütt</h4>
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
    </div>
  )
}





/* 

Observer

 const [visible, setVisible] = useState()
  const viewRef = useRef();

useEffect(() => {
    const observer = new IntersectionObserver((el) => {
      const element = el[0];
      setVisible(element.isIntersecting)     
    })
    observer.observe(viewRef.current)
  }, [])

 <section>
      <div className='container'>
        <h1 className='headline'>Hello</h1>
      
       <img src={Img1} alt='something special'/>
       </div>
       </section>
       <section>
       <div className='container'>
         <h1 className='headline'>Hej</h1>
    
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
         <img src={Img1} alt='something special'/>
       </div>
       </section>
*/