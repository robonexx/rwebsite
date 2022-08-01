import {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Img1 from '../../media/img/culture.jpg'
import Img2 from '../../media/img/eighties.jpg'
import Img3 from '../../media/img/beauty.jpg'
import Img4 from '../../media/img/unknown.jpg'
import Img5 from '../../media/img/knowledge.jpg'

import './About.scss'
import Logo from '../../components/Logo/Logo'
import Logo2 from '../../components/Logo/Logo2'

const About = () => {  
  
    return (
      <motion.div className='about'>
        <div>
        <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'}}>
        <Logo2/>
        </section>
        <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'}}>          
           <Logo />
        </section>         
        </div>
        <Content />        
      </motion.div>
    )
}

export default About

const Content = () => {
    const {ref, inView} = useInView({
      threshold: 0.4
    })
    const animation = useAnimation()

    useEffect(() => {

        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 0.6,
                    bounce: 0.2
                }
            })
        }
        if(!inView) {
            animation.start({
                x: '-100vw'
            })
        }
      console.log('use effekt in view:', inView)
    }, [inView])

    return (
    <div ref={ref}>
        <section>
        <div className='container'>
          <h1 className='headline'>Hello</h1>
        
          <motion.img src={Img1} alt='something special'
          animate={animation}
          />
        </div>
        </section>
        <section>
        <div className='container'>
          <h1 className='headline'>Hej</h1>
        
          <motion.img src={Img2} alt='something special'
         
          />
        </div>
        </section>
        <section>
        <div className='container' >
          <h1 className='headline'>Terve</h1>
        {/*   <p>below element is {!inView ? ' not in viewport' : ' in viewport'} </p> */}
          <img src={Img3} alt='something special'/>
        </div>
        </section>
        <section>
        <div className='container'>
          <h1 className='headline'>Hola</h1>
       {/*    <p>{!inView2 ? 'not in viewport' : 'is in viewport'}</p> */}
          <motion.img src={Img4} alt='something special'  />
        </div>
        </section>
        <section>
        <div className='container'>
          <h1 className='headline'>Bonjour</h1>
       
          <img src={Img5} alt='something special'/>
        </div>
        </section>
        </div>
    )
}