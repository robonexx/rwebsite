import {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {useSpring, animated, config} from 'react-spring'

import './About.scss'

const About = () => {  
const [lights, setLights] = useState(false)

const { x } = useSpring({ config: { duration: 300 }, x: lights ? 1 : 0 });

  const bgRef = useRef()

  const lightsOnOff = () => {
      setLights(!lights)
      lights ? bgRef.current.style.backgroundColor = '#fafafa' : bgRef.current.style.backgroundColor = '#121212'
  }
    return (
      <motion.div className='about' ref={bgRef}>
        <button onClick={lightsOnOff}>
          {!lights ? 'Turn off' : 'Turn on'}
        </button>
        <div className="lamp_container">
        <div className="lamp">
<svg width="585" height="553" viewBox="0 0 585 553" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="292.5" cy="285" rx="292.5" ry="268" fill={`url(${!lights ? '#radial' : '#dark'})`}/>
<path d="M275.283 184.226C275.283 178.626 275.283 175.826 276.373 173.687C277.332 171.805 278.861 170.275 280.743 169.316C282.882 168.226 285.682 168.226 291.283 168.226H291.887C297.487 168.226 300.288 168.226 302.427 169.316C304.308 170.275 305.838 171.805 306.797 173.687C307.887 175.826 307.887 178.626 307.887 184.226V187.585H275.283V184.226Z" fill="#D8D8D8"/>
<path d="M371.057 305.533C371.057 344.493 335.476 376.075 291.585 376.075C247.694 376.075 212.113 344.493 212.113 305.533C212.113 266.574 247.694 234.991 291.585 234.991C335.476 234.991 371.057 266.574 371.057 305.533ZM227.621 305.533C227.621 336.89 256.259 362.31 291.585 362.31C326.911 362.31 355.549 336.89 355.549 305.533C355.549 274.176 326.911 248.756 291.585 248.756C256.259 248.756 227.621 274.176 227.621 305.533Z" fill="#D9D9D9"/>
<path d="M256 223.66C256 208.986 256 201.649 259.664 196.461C260.978 194.601 262.601 192.978 264.461 191.664C269.649 188 276.986 188 291.66 188V188C306.335 188 313.672 188 318.86 191.664C320.72 192.978 322.342 194.601 323.656 196.461C327.321 201.649 327.321 208.986 327.321 223.66V247.094H256V223.66Z" fill="#D9D9D9"/>
<line x1="291.642" y1="168.226" x2="291.642" y2="0.11322" stroke="black" stroke-width="6"/>
<defs>
<radialGradient id={!lights ? 'radial' : 'dark'} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(291.712 308.838) rotate(-38.5056) scale(283.105 264.919)">
<stop offset="0.380208" />
<stop offset="0.947917" />
</radialGradient>
</defs>
</svg>
    <svg className='light' fill={!lights ? '#e9c915' : '#121212'} xmlns="http://www.w3.org/2000/svg">
         {/*  <path d={lights ? Light_path[0] : Light_path[1]} /> */}
          <animated.path d={x.to({
            range: [0, 1],
            output: [
              'M103.547 48.7736C103.547 75.2207 80.511 96.6604 52.0943 96.6604C23.6777 96.6604 0.64151 75.2207 0.64151 48.7736C0.64151 22.3264 23.6777 0.88678 52.0943 0.88678C80.511 0.88678 103.547 22.3264 103.547 48.7736Z',
              'M104.547 48.7736C110 57 81.511 35 53.0944 35C24.6777 35 -6 59 1.64152 48.7736C1.64152 22.3264 24.6777 0.88678 53.0944 0.88678C81.511 0.88678 104.547 22.3264 104.547 48.7736Z'
             
            ],
          })} />
        </svg>  
        </div>                
        </div>     
        <div className='house'>
          <h2 className={!lights ? 'text_light' : 'text_dark'}>{!lights ? 'Hi there! How may I be of service?' : 'Sorry buddy, Office is closed.'} </h2>
          <div className={lights ? 'overlay' : ''}></div>
        <svg width="160" height="99" viewBox="0 0 160 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.5" y="3.5" width="139" height="95" fill="#372517" stroke="black"/>
<rect x="78.5" y="9.5" width="77" height="89" fill="#3E2C1F" stroke="black"/>
<rect x="75.5" y="6.5" width="82" height="4" fill="#8D8D8C" stroke="black"/>
<rect x="0.5" y="0.5" width="144" height="3" fill="#85807D" stroke="black"/>
<rect x="14.5" y="18.5" width="23" height="74" fill="url(#paint0_linear_4_65)" stroke="#533118"/>
<rect x="48.5" y="18.5" width="23" height="74" fill="url(#paint1_linear_4_65)" stroke="#533118"/>
<rect x="86.5" y="22.5" width="23" height="25" fill="url(#paint2_linear_4_65)" stroke="#533118"/>
<rect x="86.5" y="51.5" width="37" height="12" fill="url(#paint3_linear_4_65)" stroke="#533118"/>
<rect x="131.5" y="51.5" width="14" height="12" fill="url(#paint4_linear_4_65)" stroke="#533118"/>
<rect x="112.5" y="22.5" width="33" height="25" fill="url(#paint5_linear_4_65)" stroke="#533118"/>
<path d="M101 98.5H101.5V98V81C101.5 77.9624 99.0376 75.5 96 75.5H92C88.9624 75.5 86.5 77.9624 86.5 81V98V98.5H87H101Z" fill="#3A3027" stroke="black"/>
<circle cx="89.5" cy="90.5" r="1.5" fill="#262626"/>
<line x1="94.5" y1="78" x2="94.5" y2="89" stroke="#E4E4E4"/>
<line x1="98.5" y1="85" x2="98.5" y2="95" stroke="white"/>
<g filter="url(#filter0_d_4_65)">
<path d="M109.219 79.9575L109.197 78.3516H109.463L113.188 74.5897H114.806L110.838 78.5716H110.727L109.219 79.9575ZM108 82.9824V71.7738H109.308V83.0374L108 82.9824ZM113.41 83.0374L110.084 78.8575L111.015 77.9556L114.209 81.8274L115.072 83.0374H113.41Z" fill="#F1F1F1"/>
<path d="M115.803 83.0213V81.8113V74.5736H117.066V75.8495H117.155C117.31 75.4316 117.591 75.0924 117.998 74.8321C118.404 74.5718 118.862 74.4416 119.372 74.4416C119.468 74.4416 119.588 74.4434 119.733 74.4471C119.877 74.4508 119.986 74.4563 120.06 74.4636V75.7836C120.015 75.7726 119.914 75.7561 119.755 75.7341C119.599 75.7084 119.435 75.6956 119.261 75.6956C118.848 75.6956 118.478 75.7817 118.153 75.954C117.831 76.1227 117.576 76.3574 117.388 76.658C117.203 76.955 117.111 77.2942 117.111 77.6755V83.0213H115.803Z" fill="#F1F1F1"/>
<path d="M120.435 83.0374V74.5897H121.743V83.0374H120.435ZM121.1 73.1818C120.845 73.1818 120.625 73.0956 120.441 72.9233C120.26 72.7509 120.169 72.5438 120.169 72.3018C120.169 72.0598 120.26 71.8526 120.441 71.6803C120.625 71.508 120.845 71.4218 121.1 71.4218C121.355 71.4218 121.573 71.508 121.754 71.6803C121.939 71.8526 122.031 72.0598 122.031 72.3018C122.031 72.5438 121.939 72.7509 121.754 72.9233C121.573 73.0956 121.355 73.1818 121.1 73.1818Z" fill="#F1F1F1"/>
<path d="M123.757 71.6803V74.7602H122.604V71.6803H123.757Z" fill="#F1F1F1"/>
<path d="M127.726 83.0374C126.964 83.0374 126.292 82.9035 125.708 82.6359C125.128 82.3646 124.675 81.9924 124.35 81.5194C124.025 81.0428 123.864 80.5001 123.868 79.8915C123.864 79.4148 123.958 78.9749 124.15 78.5715C124.343 78.1646 124.605 77.8254 124.938 77.5541C125.274 77.2791 125.649 77.1049 126.063 77.0316V76.9656C125.52 76.8263 125.087 76.5238 124.766 76.0581C124.444 75.5888 124.285 75.0553 124.289 74.4577C124.285 73.8857 124.431 73.3742 124.727 72.9233C125.023 72.4723 125.429 72.1166 125.946 71.8563C126.467 71.596 127.06 71.4218 127.726 71.4218C128.383 71.4218 128.971 71.596 129.488 71.8563C130.005 72.1166 130.412 72.4723 130.707 72.9233C131.007 73.3742 131.158 73.8857 131.162 74.4577C131.158 75.0553 130.994 75.5888 130.669 76.0581C130.347 76.5238 129.92 76.8263 129.388 76.9656V77.0316C129.798 77.1049 130.168 77.2791 130.497 77.5541C130.826 77.8254 131.088 78.1646 131.284 78.5715C131.48 78.9749 131.58 79.4148 131.583 79.8915C131.58 80.5001 131.413 81.0428 131.084 81.5194C130.759 81.9924 130.307 82.3646 129.726 82.6359C129.15 82.9035 128.483 83.0374 127.726 83.0374ZM127.726 81.8274C128.239 81.8274 128.683 81.7449 129.056 81.5799C129.429 81.4149 129.717 81.1821 129.92 80.8815C130.124 80.5808 130.227 80.2288 130.231 79.8255C130.227 79.4002 130.116 79.0244 129.898 78.698C129.68 78.3717 129.383 78.1151 129.006 77.9281C128.633 77.7411 128.206 77.6476 127.726 77.6476C127.241 77.6476 126.809 77.7411 126.429 77.9281C126.052 78.1151 125.754 78.3717 125.536 78.698C125.322 79.0244 125.217 79.4002 125.22 79.8255C125.217 80.2288 125.314 80.5808 125.514 80.8815C125.717 81.1821 126.007 81.4149 126.384 81.5799C126.761 81.7449 127.208 81.8274 127.726 81.8274ZM127.726 76.4816C128.132 76.4816 128.492 76.401 128.806 76.2396C129.124 76.0783 129.374 75.8528 129.555 75.5632C129.736 75.2735 129.828 74.9344 129.832 74.5457C129.828 74.1644 129.738 73.8326 129.56 73.5502C129.383 73.2643 129.137 73.0443 128.823 72.8903C128.509 72.7326 128.143 72.6538 127.726 72.6538C127.301 72.6538 126.929 72.7326 126.611 72.8903C126.294 73.0443 126.048 73.2643 125.874 73.5502C125.701 73.8326 125.616 74.1644 125.619 74.5457C125.616 74.9344 125.702 75.2735 125.88 75.5632C126.061 75.8528 126.31 76.0783 126.628 76.2396C126.946 76.401 127.312 76.4816 127.726 76.4816Z" fill="#F1F1F1"/>
<path d="M132.752 82.8068C132.478 82.8068 132.244 82.7096 132.048 82.5153C131.852 82.321 131.754 82.0881 131.754 81.8168C131.754 81.5455 131.852 81.3127 132.048 81.1183C132.244 80.924 132.478 80.8269 132.752 80.8269C133.025 80.8269 133.26 80.924 133.456 81.1183C133.652 81.3127 133.75 81.5455 133.75 81.8168C133.75 81.9965 133.703 82.1615 133.611 82.3118C133.522 82.4621 133.402 82.5831 133.251 82.6748C133.103 82.7628 132.937 82.8068 132.752 82.8068Z" fill="#F1F1F1"/>
<path d="M141.052 74.5897L139.514 75.5797H133.611V74.4797L141.052 74.5897ZM134.897 72.4558H136.205V80.5075C136.205 80.8741 136.259 81.1491 136.366 81.3324C136.477 81.5121 136.617 81.6331 136.787 81.6954C136.961 81.7541 137.144 81.7834 137.336 81.7834C137.48 81.7834 137.598 81.7761 137.69 81.7614C137.783 81.7431 137.857 81.7284 137.912 81.7174L138.178 82.8834C138.09 82.9164 137.966 82.9494 137.807 82.9824C137.648 83.019 137.447 83.0374 137.203 83.0374C136.833 83.0374 136.471 82.9585 136.116 82.8009C135.765 82.6432 135.473 82.4031 135.241 82.0804C135.011 81.7578 134.897 81.3508 134.897 80.8595V72.4558Z" fill="#F1F1F1"/>
<path d="M141.052 74.5897V83.0374H139.514V75.5797L141.052 74.5897ZM145.728 82.8135L147.97 84.2632H108V82.9824L145.728 82.8135Z" fill="#F1F1F1"/>
<path d="M150 71L145.728 82.8135H144.397L141.249 74.3659H142.668L145.018 81.0976H145.107L147.457 74.3659L150 71Z" fill="#F1F1F1"/>
<path d="M126.855 81.3158C126.613 81.3158 126.404 81.2703 126.229 81.1794C126.054 81.0875 125.92 80.9594 125.825 80.7952C125.731 80.63 125.684 80.4379 125.684 80.2189C125.684 79.9999 125.731 79.8068 125.825 79.6398C125.92 79.4718 126.052 79.341 126.22 79.2472C126.391 79.1526 126.589 79.1053 126.816 79.1053C126.946 79.1053 127.076 79.1238 127.203 79.1609C127.331 79.1981 127.447 79.2584 127.551 79.3419C127.656 79.4245 127.739 79.534 127.802 79.6704C127.864 79.8068 127.895 79.9748 127.895 80.1743V80.3135H125.959V80.0296H127.502C127.502 79.9089 127.474 79.8013 127.417 79.7066C127.362 79.6119 127.282 79.5372 127.179 79.4825C127.076 79.4277 126.955 79.4004 126.816 79.4004C126.662 79.4004 126.529 79.4328 126.417 79.4978C126.306 79.5618 126.22 79.6454 126.16 79.7484C126.1 79.8514 126.07 79.9618 126.07 80.0797V80.269C126.07 80.4305 126.103 80.5673 126.168 80.6796C126.235 80.791 126.327 80.8759 126.444 80.9344C126.562 80.9919 126.699 81.0207 126.855 81.0207C126.956 81.0207 127.048 81.0086 127.13 80.9845C127.212 80.9594 127.284 80.9223 127.344 80.8731C127.404 80.823 127.45 80.7608 127.483 80.6866L127.855 80.7757C127.816 80.8833 127.75 80.978 127.658 81.0596C127.565 81.1404 127.451 81.2035 127.314 81.249C127.178 81.2935 127.025 81.3158 126.855 81.3158Z" fill="#F1F1F1"/>
<path d="M128.632 81.3158V79.1053H129.368V81.3158H128.632Z" fill="#F1F1F1"/>
</g>
<defs>
<filter id="filter0_d_4_65" x="106" y="69" width="54" height="25.2632" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_65"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_65" result="shape"/>
</filter>
<linearGradient id="paint0_linear_4_65" x1="4.5" y1="79.5" x2="46" y2="96" gradientUnits="userSpaceOnUse">
<stop stop-color="#CACAD6"/>
<stop offset="0.0677083" stop-color="#D9D9D9"/>
<stop offset="0.161458" stop-color="#BAB9F0" stop-opacity="0.578125"/>
<stop offset="0.249154" stop-color="#D9D9D9" stop-opacity="0.96"/>
<stop offset="0.430615" stop-color="#C8C7F2" stop-opacity="0.77"/>
<stop offset="0.463542" stop-color="#F1F1F6" stop-opacity="0.857941"/>
<stop offset="0.604167" stop-color="#C2C1F5" stop-opacity="0.58"/>
<stop offset="0.755208" stop-color="#9F9DFB"/>
<stop offset="0.984375" stop-color="#B3B1FF"/>
</linearGradient>
<linearGradient id="paint1_linear_4_65" x1="38.5" y1="79.5" x2="81.5" y2="95.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#CACAD6"/>
<stop offset="0.0677083" stop-color="#D9D9D9"/>
<stop offset="0.161458" stop-color="#BAB9F0" stop-opacity="0.578125"/>
<stop offset="0.249154" stop-color="#D9D9D9" stop-opacity="0.96"/>
<stop offset="0.430615" stop-color="#C8C7F2" stop-opacity="0.77"/>
<stop offset="0.463542" stop-color="#F1F1F6" stop-opacity="0.857941"/>
<stop offset="0.604167" stop-color="#C2C1F5" stop-opacity="0.58"/>
<stop offset="0.755208" stop-color="#9F9DFB"/>
<stop offset="0.984375" stop-color="#B3B1FF"/>
</linearGradient>
<linearGradient id="paint2_linear_4_65" x1="78.5" y1="52" x2="110.234" y2="68.3211" gradientUnits="userSpaceOnUse">
<stop stop-color="#CACAD6"/>
<stop offset="0.0677083" stop-color="#D9D9D9"/>
<stop offset="0.161458" stop-color="#BAB9F0" stop-opacity="0.578125"/>
<stop offset="0.249154" stop-color="#D9D9D9" stop-opacity="0.96"/>
<stop offset="0.430615" stop-color="#C8C7F2" stop-opacity="0.77"/>
<stop offset="0.463542" stop-color="#F1F1F6" stop-opacity="0.857941"/>
<stop offset="0.604167" stop-color="#C2C1F5" stop-opacity="0.58"/>
<stop offset="0.755208" stop-color="#9F9DFB"/>
<stop offset="0.984375" stop-color="#B3B1FF"/>
</linearGradient>
<linearGradient id="paint3_linear_4_65" x1="77" y1="81" x2="110.859" y2="100.205" gradientUnits="userSpaceOnUse">
<stop stop-color="#CACAD6"/>
<stop offset="0.0677083" stop-color="#D9D9D9"/>
<stop offset="0.161458" stop-color="#BAB9F0" stop-opacity="0.578125"/>
<stop offset="0.249154" stop-color="#D9D9D9" stop-opacity="0.96"/>
<stop offset="0.430615" stop-color="#C8C7F2" stop-opacity="0.77"/>
<stop offset="0.463542" stop-color="#F1F1F6" stop-opacity="0.857941"/>
<stop offset="0.604167" stop-color="#C2C1F5" stop-opacity="0.58"/>
<stop offset="0.755208" stop-color="#9F9DFB"/>
<stop offset="0.958992" stop-color="#B3B1FF"/>
</linearGradient>
<linearGradient id="paint4_linear_4_65" x1="127.563" y1="66.5" x2="149.886" y2="77.3021" gradientUnits="userSpaceOnUse">
<stop stop-color="#CACAD6"/>
<stop offset="0.0677083" stop-color="#D9D9D9"/>
<stop offset="0.161458" stop-color="#BAB9F0" stop-opacity="0.578125"/>
<stop offset="0.249154" stop-color="#D9D9D9" stop-opacity="0.96"/>
<stop offset="0.430615" stop-color="#C8C7F2" stop-opacity="0.77"/>
<stop offset="0.463542" stop-color="#F1F1F6" stop-opacity="0.857941"/>
<stop offset="0.604167" stop-color="#C2C1F5" stop-opacity="0.58"/>
<stop offset="0.755208" stop-color="#9F9DFB"/>
<stop offset="0.984375" stop-color="#B3B1FF"/>
</linearGradient>
<linearGradient id="paint5_linear_4_65" x1="104.208" y1="53" x2="145.677" y2="74.6453" gradientUnits="userSpaceOnUse">
<stop stop-color="#CACAD6"/>
<stop offset="0.0677083" stop-color="#D9D9D9"/>
<stop offset="0.161458" stop-color="#BAB9F0" stop-opacity="0.578125"/>
<stop offset="0.249154" stop-color="#D9D9D9" stop-opacity="0.96"/>
<stop offset="0.430615" stop-color="#C8C7F2" stop-opacity="0.77"/>
<stop offset="0.463542" stop-color="#F1F1F6" stop-opacity="0.857941"/>
<stop offset="0.604167" stop-color="#C2C1F5" stop-opacity="0.58"/>
<stop offset="0.755208" stop-color="#9F9DFB"/>
<stop offset="0.984375" stop-color="#B3B1FF"/>
</linearGradient>
</defs>
</svg>

          </div>     
      </motion.div>
    )
}

const Light_path= [
  'M104.547 48.7736C110 57 81.511 35 53.0944 35C24.6777 35 -6 59 1.64152 48.7736C1.64152 22.3264 24.6777 0.88678 53.0944 0.88678C81.511 0.88678 104.547 22.3264 104.547 48.7736Z',
'M103.547 48.7736C103.547 75.2207 80.511 96.6604 52.0943 96.6604C23.6777 96.6604 0.64151 75.2207 0.64151 48.7736C0.64151 22.3264 23.6777 0.88678 52.0943 0.88678C80.511 0.88678 103.547 22.3264 103.547 48.7736Z'
]

export default About
