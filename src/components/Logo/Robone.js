import React from 'react'
import {motion} from 'framer-motion'

// styles
import './Robone.scss'

const colors = ['#49297e', '#fdfb76', '#90dcff', '#e10086', '#fafaf896', '#131C5A', '#fafaf890', '#fdfb76']

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    strokeWidth: 2,
    stroke: '#282828',
    transition: {
      duration: 1, when: "afterChildren", staggerChildren: 0.2,
      ease: 'easeInOut',
    },
    fill: ['#28282800', '#28282800','#28282800','#28282800','#28282826', '#2828284d', '#28282880', '#282828bf', '#000'],
  },
};

export default function Robone() {
  return (
    <motion.div className='robone'>
  <motion.svg width="597" height="145" viewBox="0 0 597 145" fill="none" xmlns="http://www.w3.org/2000/svg"
  variants={pathVariants}
  initial="hidden"
  animate="visible">
    <motion.path d="M17.7673 136.525C10.2842 108.934 -20.2833 25.0722 23.767 14.059C23.767 14.059 3.76745 4.55904 62.9718 19.042C122.176 33.5249 111.049 73.8076 54.7325 88.5974L46.1991 89.1357V67.1102C46.1991 67.1102 76.1667 64.5 78 53.5C79.8333 42.5 46.1991 41.7465 46.1991 41.7465V136.525H17.7673ZM107.767 127.025H575.54V136.525H82.8639C80.0514 132.273 77.2389 128.021 74.4264 123.769L54.7325 88.5974L71.1755 83.059L107.767 127.025Z" 
    variants={pathVariants}
    /* animate={{fill: ['#49297e00', '#49297e00','#49297e00','#49297e00','#49297e26', '#49297e4d', '#49297e80', '#49297ebf', '#49297e']}} */
    transition={{delay: 0, duration: 0.8}}
    />
    <motion.path d="M191.966 76.2522C191.966 87.9113 189.699 97.7465 185.165 105.758C180.631 113.735 174.512 119.786 166.807 123.911C159.103 128.002 150.512 130.048 141.035 130.048C131.489 130.048 122.864 127.985 115.16 123.86C107.489 119.701 101.387 113.633 96.8529 105.656C92.3529 97.6442 90.1029 87.8431 90.1029 76.2522C90.1029 64.5931 92.3529 54.7749 96.8529 46.7976C101.387 38.7863 107.489 32.7352 115.16 28.6443C122.864 24.5193 131.489 22.4567 141.035 22.4567C150.512 22.4567 159.103 24.5193 166.807 28.6443C174.512 32.7352 180.631 38.7863 185.165 46.7976C189.699 54.7749 191.966 64.5931 191.966 76.2522Z" 
    variants={pathVariants}
    /* animate={{fill: ['#fdfb7600', '#fdfb7600','#fdfb7600','#fdfb7600','#fdfb7626', '#fdfb764d', '#fdfb7680', '#fdfb76bf', '#fdfb76']}} */
    transition={{delay: 0.1,duration: 0.4}}
    />
    <motion.path d="M179.898 130.048V25.3204H225.307C233.284 25.3204 239.983 26.3943 245.404 28.542C250.858 30.6897 254.966 33.7238 257.728 37.6442C260.523 41.5647 261.921 46.184 261.921 51.5022C261.921 55.3545 261.069 58.8658 259.364 62.0363C257.694 65.2067 255.341 67.8659 252.307 70.0136C249.273 72.1272 245.728 73.5931 241.671 74.4113V75.434C246.171 75.6044 250.262 76.7465 253.943 78.8601C257.625 80.9397 260.557 83.8204 262.739 87.5022C264.921 91.1499 266.012 95.4454 266.012 100.389C266.012 106.116 264.512 111.212 261.512 115.678C258.546 120.144 254.319 123.656 248.83 126.212C243.341 128.769 236.796 130.048 229.193 130.048H179.898ZM208.33 107.343H221.625C226.398 107.343 229.978 106.457 232.364 104.684C234.75 102.877 235.943 100.218 235.943 96.7067C235.943 94.2522 235.381 92.1726 234.256 90.4681C233.131 88.7635 231.529 87.4681 229.449 86.5817C227.404 85.6954 224.932 85.2522 222.034 85.2522H208.33V107.343ZM208.33 67.6613H219.989C222.478 67.6613 224.676 67.2693 226.586 66.4852C228.495 65.7011 229.978 64.5761 231.034 63.1102C232.125 61.6102 232.671 59.7863 232.671 57.6386C232.671 54.3999 231.512 51.9283 229.193 50.2238C226.875 48.4852 223.943 47.6158 220.398 47.6158H208.33V67.6613Z" 
    variants={pathVariants}
    /* animate={{fill: ['#90dcff00', '#90dcff00','#90dcff00','#90dcff00','#90dcff26', '#90dcff4d', '#90dcff80', '#90dcffbf', '#90dcff']}} */
    transition={{delay: 0.2,duration: 0.4}}
    />
    
    <motion.path className="streck" d="M310.329 63.9795V85.2522H261.238V63.9795H310.329Z" 
    variants={pathVariants}
   /*  animate={{fill: ['#e1008600', '#e1008600','#e1008600','#e1008600','#e1008626', '#e100864d', '#e1008680', '#e10086bf', '#e10086']}} */
    transition={{delay: 0.3,duration: 0.4}}
    />
    
    <motion.path d="M412.193 76.7124C412.193 88.3715 409.926 98.2068 405.392 106.218C400.858 114.195 394.738 120.247 387.034 124.372C379.329 128.462 370.738 130.508 361.261 130.508C351.716 130.508 343.091 128.445 335.386 124.32C327.716 120.161 321.613 114.093 317.079 106.116C312.579 98.1045 310.329 88.3033 310.329 76.7124C310.329 65.0533 312.579 55.2352 317.079 47.2579C321.613 39.2465 327.716 33.1954 335.386 29.1045C343.091 24.9795 351.716 22.917 361.261 22.917C370.738 22.917 379.329 24.9795 387.034 29.1045C394.738 33.1954 400.858 39.2465 405.392 47.2579C409.926 55.2352 412.193 65.0533 412.193 76.7124ZM382.943 76.7124C382.943 70.4397 382.108 65.1556 380.437 60.8602C378.801 56.5306 376.363 53.2579 373.125 51.042C369.92 48.792 365.966 47.667 361.261 47.667C356.556 47.667 352.585 48.792 349.346 51.042C346.142 53.2579 343.704 56.5306 342.034 60.8602C340.397 65.1556 339.579 70.4397 339.579 76.7124C339.579 82.9851 340.397 88.2863 342.034 92.6158C343.704 96.9113 346.142 100.184 349.346 102.434C352.585 104.65 356.556 105.758 361.261 105.758C365.966 105.758 369.92 104.65 373.125 102.434C376.363 100.184 378.801 96.9113 380.437 92.6158C382.108 88.2863 382.943 82.9851 382.943 76.7124Z" 
    variants={pathVariants}
    /* animate={{fill: ['#fafaf89600', '#fafaf89600','#fafaf89600','#fafaf89600','#fafaf89626', '#fafaf8964d', '#fafaf89680', '#fafaf896bf', '#fafaf896']}} */
    transition={{delay: 0.4,duration: 0.4}}
    />
    <motion.path d="M500.271 25.3496V130.077H476.543L438.702 75.0541H438.089V130.077H409.656V25.3496H433.793L471.021 80.1677H471.839V25.3496V20.059H500.271V25.3496Z" 
    variants={pathVariants}
    /* animate={{fill: ['#131C5A00', '#131C5A00','#131C5A00','#131C5A00','#131C5A26', '#131C5A4c', '#131C5A80', '#131C5Abf', '#131C5A']}} */
    transition={{delay: 0.5,duration: 0.4}}
    />
    <motion.path d="M500.271 130.077V25.3496H575.748V48.2587H528.702V66.2587H571.861V89.1678H528.702V107.168H575.543V130.077H500.271Z" 
    variants={pathVariants}
    /* animate={{fill: ['#ff00ff00', '#ff00ff00','#ff00ff00','#ff00ff00','#ff00ff26', '#ff00ff4c', '#ff00ff80', '#ff00ffbf', '#ff00ff']}} */
    transition={{delay: 0.6,duration: 0.4}}
    />
    <motion.path className='letter_o' d="M141.494 120H141.5L183.5 76.1152C183.53 67.1253 181.877 59.3485 178.444 52.8672C175.017 46.3987 170.118 41.4481 163.771 38.064C157.437 34.6607 149.99 33 141.5 33C133.011 33 125.565 34.6473 119.232 38.0236L119.228 38.0255C112.91 41.4105 108.026 46.3615 104.6 52.8283L104.597 52.835C101.197 59.3109 99.5307 67.0941 99.5004 76.104C99.4701 85.0967 101.123 92.9311 104.548 99.5336C107.968 106.127 112.86 111.208 119.203 114.727C125.54 118.243 132.994 119.973 141.494 120ZM150.304 93.4169L150.302 93.4201C147.911 96.8498 145.009 98.4034 141.5 98.4034C139.108 98.4034 137.019 97.6919 135.163 96.2565C133.377 94.8527 131.849 92.5833 130.692 89.2407C129.552 85.9199 128.958 81.5708 128.987 76.1227C129.045 68.0559 130.407 62.5653 132.734 59.2809C135.084 55.9633 137.968 54.4409 141.5 54.4409C143.902 54.4409 145.976 55.1452 147.799 56.5539L147.805 56.5585L147.811 56.563C149.595 57.9206 151.118 60.1153 152.271 63.3508C153.405 66.5358 154.013 70.7634 154.013 76.1107L154.013 76.1177C154.042 84.3626 152.691 90.0069 150.304 93.4169Z" 
    initial={{x:-800}}
    animate={{fill: ['#fafaf800', '#fafaf800','#fafaf800','#fafaf800','#fafaf826', '#fafaf84c', '#fafaf880', '#fafaf8bf', '#fafaf8'], x: 0, rotate:[360, 280, 360]}}
    transition={{delay: 0,duration: 1.5}}
    fill="white"
    stroke="none"
    />
    <motion.path d="M485.252 0.843903C485.65 0.395137 486.35 0.395137 486.748 0.843903L503.145 19.3366C503.717 19.9818 503.259 21 502.396 21H469.604C468.741 21 468.283 19.9818 468.855 19.3366L485.252 0.843903Z" 
    variants={pathVariants}
    initial={{y: 800, opacity: 0, scale: 1.5}}
    animate={{fill:"#f4f4f8", y: 0, opacity: 1, scale: 1 }}
    transition={{delay: 0.6, duration: 1}}
    />
    <motion.path d="M595.156 122.248C595.605 121.85 595.605 121.15 595.156 120.752L576.663 104.355C576.018 103.783 575 104.241 575 105.104V137.896C575 138.759 576.018 139.217 576.663 138.645L595.156 122.248Z" 
    initial={{x: -800, opacity: 0, scale: 1.5}}
    animate={{fill:"#f4f4f8", x: 0, opacity: 1, scale: 1}}
    transition={{delay: 0.6, duration: 1}}
    />
    <motion.path d="M375.5 32V30H373.5H352.335H351.764L351.28 30.3008L330.445 43.2344L329.5 43.8211V44.9336V64.7539V68.3096L332.539 66.4631L348.516 56.7542V118V120H350.516H373.5H375.5V118V32Z" 
    variants={pathVariants}
    initial={{ x: -400, opacity: 0, scale: 4}}
    animate={{ x: 0, opacity: 1, fill: '#fff', scale: 1}}
    transition={{delay: 1.2, duration: 1, ease: 'easeOut'}}
    />
    
    </motion.svg>
    </motion.div>
  )
}
/* 
<svg width="596" height="143" viewBox="0 0 596 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7673 136.525C10.2842 108.934 -20.2833 25.0722 23.767 14.059C23.767 14.059 3.76745 4.55904 62.9718 19.042C122.176 33.5249 111.049 73.8076 54.7325 88.5974L46.1991 89.1357V67.1102C46.1991 67.1102 76.1667 64.5 78 53.5C79.8333 42.5 46.1991 41.7465 46.1991 41.7465V136.525H17.7673ZM107.767 127.025H575.54V136.525H82.8639C80.0514 132.273 77.2389 128.021 74.4264 123.769L54.7325 88.5974L71.1755 83.059L107.767 127.025Z" fill="black"/>
<path d="M191.966 76.2522C191.966 87.9113 189.699 97.7465 185.165 105.758C180.631 113.735 174.512 119.786 166.807 123.911C159.103 128.002 150.512 130.048 141.035 130.048C131.489 130.048 122.864 127.985 115.16 123.86C107.489 119.701 101.387 113.633 96.8529 105.656C92.3529 97.6442 90.1029 87.8431 90.1029 76.2522C90.1029 64.5931 92.3529 54.7749 96.8529 46.7976C101.387 38.7863 107.489 32.7352 115.16 28.6443C122.864 24.5193 131.489 22.4567 141.035 22.4567C150.512 22.4567 159.103 24.5193 166.807 28.6443C174.512 32.7352 180.631 38.7863 185.165 46.7976C189.699 54.7749 191.966 64.5931 191.966 76.2522Z" fill="black"/>
<path d="M179.898 130.048V25.3204H225.307C233.284 25.3204 239.983 26.3943 245.404 28.542C250.858 30.6897 254.966 33.7238 257.728 37.6442C260.523 41.5647 261.921 46.184 261.921 51.5022C261.921 55.3545 261.069 58.8658 259.364 62.0363C257.694 65.2067 255.341 67.8659 252.307 70.0136C249.273 72.1272 245.728 73.5931 241.671 74.4113V75.434C246.171 75.6044 250.262 76.7465 253.943 78.8601C257.625 80.9397 260.557 83.8204 262.739 87.5022C264.921 91.1499 266.012 95.4454 266.012 100.389C266.012 106.116 264.512 111.212 261.512 115.678C258.546 120.144 254.319 123.656 248.83 126.212C243.341 128.769 236.796 130.048 229.193 130.048H179.898ZM208.33 107.343H221.625C226.398 107.343 229.978 106.457 232.364 104.684C234.75 102.877 235.943 100.218 235.943 96.7067C235.943 94.2522 235.381 92.1726 234.256 90.4681C233.131 88.7635 231.529 87.4681 229.449 86.5817C227.404 85.6954 224.932 85.2522 222.034 85.2522H208.33V107.343ZM208.33 67.6613H219.989C222.478 67.6613 224.676 67.2693 226.586 66.4852C228.495 65.7011 229.978 64.5761 231.034 63.1102C232.125 61.6102 232.671 59.7863 232.671 57.6386C232.671 54.3999 231.512 51.9283 229.193 50.2238C226.875 48.4852 223.943 47.6158 220.398 47.6158H208.33V67.6613Z" fill="black"/>
<path d="M310.329 63.9795V85.2522H261.238V63.9795H310.329Z" fill="black"/>
<path d="M412.193 76.7124C412.193 88.3715 409.926 98.2068 405.392 106.218C400.858 114.195 394.738 120.247 387.034 124.372C379.329 128.462 370.738 130.508 361.261 130.508C351.716 130.508 343.091 128.445 335.386 124.32C327.716 120.161 321.613 114.093 317.079 106.116C312.579 98.1045 310.329 88.3033 310.329 76.7124C310.329 65.0533 312.579 55.2352 317.079 47.2579C321.613 39.2465 327.716 33.1954 335.386 29.1045C343.091 24.9795 351.716 22.917 361.261 22.917C370.738 22.917 379.329 24.9795 387.034 29.1045C394.738 33.1954 400.858 39.2465 405.392 47.2579C409.926 55.2352 412.193 65.0533 412.193 76.7124ZM382.943 76.7124C382.943 70.4397 382.108 65.1556 380.437 60.8602C378.801 56.5306 376.363 53.2579 373.125 51.042C369.92 48.792 365.966 47.667 361.261 47.667C356.556 47.667 352.585 48.792 349.346 51.042C346.142 53.2579 343.704 56.5306 342.034 60.8602C340.397 65.1556 339.579 70.4397 339.579 76.7124C339.579 82.9851 340.397 88.2863 342.034 92.6158C343.704 96.9113 346.142 100.184 349.346 102.434C352.585 104.65 356.556 105.758 361.261 105.758C365.966 105.758 369.92 104.65 373.125 102.434C376.363 100.184 378.801 96.9113 380.437 92.6158C382.108 88.2863 382.943 82.9851 382.943 76.7124Z" fill="black"/>
<path d="M500.271 25.3496V130.077H476.543L438.702 75.0541H438.089V130.077H409.656V25.3496H433.793L471.021 80.1677H471.839V25.3496V20.059H500.271V25.3496Z" fill="black"/>
<path d="M500.271 130.077V25.3496H575.748V48.2587H528.702V66.2587H571.861V89.1678H528.702V107.168H575.543V130.077H500.271Z" fill="black"/>
<path d="M141.494 120H141.5L183.5 76.1152C183.53 67.1253 181.877 59.3485 178.444 52.8672C175.017 46.3987 170.118 41.4481 163.771 38.064C157.437 34.6607 149.99 33 141.5 33C133.011 33 125.565 34.6473 119.232 38.0236L119.228 38.0255C112.91 41.4105 108.026 46.3615 104.6 52.8283L104.597 52.835C101.197 59.3109 99.5307 67.0941 99.5004 76.104C99.4701 85.0967 101.123 92.9311 104.548 99.5336C107.968 106.127 112.86 111.208 119.203 114.727C125.54 118.243 132.994 119.973 141.494 120ZM150.304 93.4169L150.302 93.4201C147.911 96.8498 145.009 98.4034 141.5 98.4034C139.108 98.4034 137.019 97.6919 135.163 96.2565C133.377 94.8527 131.849 92.5833 130.692 89.2407C129.552 85.9199 128.958 81.5708 128.987 76.1227C129.045 68.0559 130.407 62.5653 132.734 59.2809C135.084 55.9633 137.968 54.4409 141.5 54.4409C143.902 54.4409 145.976 55.1452 147.799 56.5539L147.805 56.5585L147.811 56.563C149.595 57.9206 151.118 60.1153 152.271 63.3508C153.405 66.5358 154.013 70.7634 154.013 76.1107L154.013 76.1177C154.042 84.3626 152.691 90.0069 150.304 93.4169Z" stroke="white" stroke-width="4"/>
<path d="M485.252 0.843903C485.65 0.395137 486.35 0.395137 486.748 0.843903L503.145 19.3366C503.717 19.9818 503.259 21 502.396 21H469.604C468.741 21 468.283 19.9818 468.855 19.3366L485.252 0.843903Z" fill="black"/>
<path d="M595.156 122.248C595.605 121.85 595.605 121.15 595.156 120.752L576.663 104.355C576.018 103.783 575 104.241 575 105.104V137.896C575 138.759 576.018 139.217 576.663 138.645L595.156 122.248Z" fill="black"/>
<path d="M375.5 32V30H373.5H352.335H351.764L351.28 30.3008L330.445 43.2344L329.5 43.8211V44.9336V64.7539V68.3096L332.539 66.4631L348.516 56.7542V118V120H350.516H373.5H375.5V118V32Z" fill="#FCFCFC" stroke="black" stroke-width="4"/>
</svg> */
