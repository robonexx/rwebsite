
import {motion} from 'framer-motion'
// styles
import './Home.scss';



export default function Home() {  

  document.querySelector('body').addEventListener('mousemove', eyeball);
function eyeball(event) {
    var eye = document.querySelectorAll('.eye');
    
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2( event.pageX - x, event.pageY - y)
        let rotation = (radian * (180 / Math.PI) * -1) + 0; 
        eye.style.transform = "rotate("+ rotation + "deg)";
   })

   console.log(event)
};
  return (
    <motion.div id='home' className='home'>
      <div className='container'>
          <Talk />
          <Face />        
      </div>
    </motion.div>
  );
}

const Face = () => {
  return (
    <div className="face_container">
    <div className="face">
    <motion.svg id="face" width="269" height="416" viewBox="0 0 269 416" fill="none" xmlns="http://www.w3.org/2000/svg">        
    <path d="M244.984 164.432C245.536 163.624 246.471 162.708 247.334 163.171C248.295 163.688 247.836 165.156 247.207 166.049C245.58 168.361 243.503 170.708 243.58 173.534C243.739 179.349 243.899 185.163 244.058 190.978C244.078 191.733 243.99 192.669 243.293 192.96C242.732 193.195 242.066 192.82 241.766 192.291C241.466 191.762 241.439 191.127 241.42 190.519C241.236 184.771 241.053 179.022 240.869 173.274C240.842 172.42 240.817 171.551 241.046 170.728C241.293 169.836 241.824 169.055 242.346 168.291C243.225 167.005 244.104 165.718 244.984 164.432Z" fill="black"/>
    <motion.path className="left_eyebrow" d="M215.663 162.477C213.341 160.957 211.321 159.023 209.085 157.379C198.432 149.543 183.963 149.037 170.994 151.624C169.371 151.948 167.664 152.311 166.089 151.803C164.514 151.295 163.206 149.546 163.811 148.006C164.407 146.487 166.329 146.081 167.952 145.919C182.168 144.496 196.577 145.019 210.652 147.469C211.634 147.639 212.66 147.84 213.435 148.466C214.167 149.056 214.577 149.946 214.963 150.803C216.364 153.917 217.766 157.031 219.167 160.145C219.501 160.888 219.835 161.76 219.463 162.485C218.807 163.762 216.864 163.264 215.663 162.477Z" fill="black"
    
    animate={{y:[0,2,0], rotate: [0,2]}}
    transition={{duration: {x: 0.3, rotate: 0.3}, repeatDelay: 5,  ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity}}
    />
    <path d="M207.962 171.138C207.331 172.11 206.101 172.463 204.977 172.744C197.967 174.492 190.957 176.24 183.947 177.989C183.46 178.111 182.907 178.223 182.484 177.95C181.884 177.563 181.953 176.597 182.436 176.071C182.919 175.546 183.652 175.347 184.344 175.172C190.904 173.513 197.464 171.855 204.024 170.196C205.467 169.832 207.462 169.736 207.962 171.138Z" fill="black"/>
    <path d="M79.2563 155.932C77.8704 156.989 75.6461 156.171 74.8796 154.606C74.113 153.041 74.5582 151.099 75.5491 149.666C76.5401 148.232 77.9968 147.199 79.4227 146.197C82.487 144.043 85.5513 141.889 88.6155 139.735C91.4348 137.754 94.5332 135.686 97.9761 135.831C107.714 136.241 117.44 136.947 127.135 137.946C128.936 138.131 131.128 138.643 131.597 140.391C131.97 141.778 130.907 143.226 129.587 143.791C128.266 144.357 126.769 144.264 125.336 144.162C119.064 143.713 112.791 143.263 106.518 142.814C104.605 142.677 102.662 142.542 100.783 142.93C98.753 143.35 96.8991 144.359 95.1023 145.393C89.6006 148.56 84.3039 152.083 79.2563 155.932Z" fill="black"/>
    <path d="M132.623 162.819C129.792 164.734 126.383 165.554 123.056 166.339C119.608 167.152 116.159 167.965 112.711 168.779C111.087 169.162 109.33 169.536 107.793 168.886C102.855 166.796 97.918 164.706 92.9805 162.616C91.3874 161.942 88.9016 161.682 88.5306 163.371C88.3493 164.197 86.9193 163.907 86.7124 163.088C86.5055 162.268 87.0428 161.464 87.5512 160.789C90.759 156.529 94.5662 151.912 99.867 151.328C105.648 150.691 111.428 150.054 117.209 149.417C118.342 149.292 119.531 149.175 120.586 149.608C121.486 149.978 122.181 150.707 122.842 151.421C126.245 155.095 129.508 158.898 132.623 162.819ZM117.871 151.92C115.193 151.338 96.0169 154.599 94.3566 156.781C93.9243 157.349 93.729 158.402 94.4207 158.578C96.2942 159.057 97.3965 160.419 99 161.5C106 164.5 122.5 164.5 127.5 160.789C126.458 157.909 121.221 151.936 117.871 151.92ZM120.124 165.271C120.496 165.184 120.973 164.843 120.739 164.54C116.655 165.208 112.586 165.968 108.536 166.818C108.259 167.302 109.123 167.593 109.67 167.487C113.167 166.812 116.653 166.073 120.124 165.271Z" fill="black"/>
    <path d="M39.4593 192.549C39.27 191.467 39.3343 189.975 40.4068 189.739C41.0742 189.592 41.7393 190.127 41.9812 190.766C42.2231 191.406 42.1491 192.115 42.0717 192.794C41.9789 193.608 41.8861 194.422 41.7933 195.236C41.7115 195.953 41.6079 196.721 41.1248 197.258C40.6417 197.795 39.6368 197.909 39.2585 197.294C37.7853 194.898 36.3121 192.502 34.8389 190.106C33.7682 188.365 32.6698 186.544 32.4723 184.509C32.3644 183.398 32.5335 182.28 32.7021 181.176C33.176 178.073 33.65 174.97 34.1239 171.867C34.236 171.133 34.3575 170.374 34.7643 169.753C35.1711 169.132 35.9481 168.688 36.6583 168.904C37.1769 169.062 37.5394 169.518 37.8638 169.952C39.4595 172.087 40.9657 174.289 42.3772 176.55C42.7632 177.169 43.1466 177.962 42.7658 178.583C42.409 179.166 41.5315 179.22 40.9387 178.881C40.346 178.541 39.9713 177.929 39.6218 177.342C38.8039 175.969 37.986 174.595 37.1681 173.221C36.9453 172.847 36.4488 173.396 36.3894 173.827C36.0093 176.584 35.6292 179.342 35.2491 182.099C35.1382 182.904 35.0274 183.723 35.1601 184.525C35.322 185.502 35.8334 186.381 36.3355 187.235C37.3768 189.006 38.418 190.778 39.4593 192.549Z" fill="black"/>
    <path d="M131.315 166.757C131.901 167.681 130.558 168.604 129.501 168.886C123.917 170.371 118.333 171.857 112.749 173.343C112.089 173.519 111.391 173.695 110.733 173.513C110.075 173.331 109.503 172.651 109.695 171.996C109.878 171.375 110.591 171.108 111.213 170.93C117.211 169.215 123.265 167.698 129.363 166.383C130.055 166.233 130.936 166.159 131.315 166.757Z" fill="black"/>
    <path d="M138.965 153.505C139.818 153.736 139.917 154.892 139.837 155.772C139.333 161.362 138.828 166.952 138.323 172.542C138.215 173.735 137.9 175.193 136.747 175.516C135.57 174.543 135.611 172.759 135.753 171.239C136.236 166.088 136.719 160.937 137.202 155.786C137.305 154.689 137.901 153.218 138.965 153.505Z" fill="black"/>
    <path d="M162.434 160.589C164.088 159.453 165.742 158.317 167.396 157.182C168.511 156.416 169.651 155.638 170.949 155.256C172.51 154.797 174.177 154.943 175.797 155.094C179.024 155.394 182.25 155.695 185.477 155.995C187.04 156.141 188.617 156.289 190.11 156.77C191.812 157.319 193.346 158.28 194.86 159.232C199.502 162.151 204.144 165.069 208.786 167.987C209.577 168.484 210.444 169.558 209.752 170.185C209.531 170.385 209.214 170.438 208.916 170.44C206.848 170.456 205.346 168.579 203.587 167.49C199.673 165.068 195.094 169.293 190.578 170.185C181.204 172.036 171.757 167.62 163.372 163.039C162.681 164.135 161.458 162.716 161.356 162.226C161.214 161.545 161.861 160.982 162.434 160.589ZM181.372 157.182C170.872 157.539 167.632 160.099 166.086 161.4C165.939 161.525 164.865 162.044 164.932 162.226C164.978 162.353 173.069 167.212 176.824 167.987C187.03 172.483 193.578 167.034 196.578 165.034C197.578 161.034 188.372 158.039 181.372 157.182Z" fill="black"/>
    <path d="M160.747 168.547C159.964 168.239 160.222 166.923 160.991 166.581C161.761 166.24 162.648 166.541 163.435 166.842C167.262 168.308 171.09 169.775 174.918 171.241C175.962 171.641 177.235 172.628 176.657 173.585C176.196 174.348 175.049 174.123 174.217 173.802C169.721 172.066 165.231 170.314 160.747 168.547Z" fill="black"/>
    <path d="M138.765 182.366C140.228 182.27 140.134 184.583 139.453 185.882C137.979 188.691 136.505 191.501 135.031 194.311C134.184 195.927 132.619 197.827 130.943 197.103C129.018 196.271 126.697 197.362 125.453 199.051C124.209 200.739 123.787 202.876 123.397 204.937C123.158 206.194 122.927 207.532 123.396 208.723C123.866 209.914 125.328 210.806 126.456 210.201C130.65 207.95 135.77 210.013 140.027 212.141C144.284 214.27 149.267 216.501 153.597 214.526C158.857 212.125 164.871 211.409 170.548 212.508C172.154 209.877 172.915 206.739 172.694 203.664C171.123 202.37 168.682 203.713 166.751 203.072C164.513 202.329 163.995 199.453 163.854 197.1C163.546 191.935 163.237 186.77 162.929 181.605C162.855 180.368 162.792 179.073 163.315 177.95C163.838 176.828 165.155 175.971 166.317 176.398C167.699 176.905 167.982 178.7 168.042 180.171C168.265 185.626 168.488 191.081 168.711 196.537C168.755 197.594 168.812 198.701 169.353 199.611C169.894 200.521 171.087 201.136 172.039 200.674C172.971 200.221 174.133 200.917 174.559 201.862C174.985 202.807 174.88 203.895 174.766 204.925C174.583 206.585 174.4 208.246 174.217 209.906C174.061 211.314 173.884 212.785 173.09 213.959C172.297 215.132 170.678 215.88 169.42 215.228C163.28 212.047 156.247 217.893 149.332 217.924C145.201 217.942 141.4 215.867 137.542 214.386C133.685 212.905 129.069 212.072 125.624 214.352C124.114 215.35 121.94 214.322 121.084 212.727C120.228 211.133 120.317 209.219 120.427 207.412C120.642 203.915 120.918 200.228 122.884 197.327C124.849 194.425 129.129 192.783 131.967 194.839C133.83 190.478 136.11 186.295 138.765 182.366Z" fill="black"/>
    <path d="M244.907 131.63C241.006 129.623 237.106 127.617 233.206 125.61C234.482 124.585 236.159 124.243 237.76 123.901C244.743 122.409 251.596 120.309 258.216 117.632C258.388 117.966 258.145 118.355 257.912 118.65C254.746 122.675 251.579 126.699 248.413 130.723C247.922 131.347 247.345 132.021 246.555 132.107C245.978 132.169 245.423 131.895 244.907 131.63Z" fill="black"/>
    <path d="M18.9314 362.882C16.3415 360.669 14.0608 358.095 12.1763 355.257C23.951 348.955 36.0265 343.216 48.3481 338.065C49.5337 337.569 49.9138 336.107 50.1397 334.842C52.9696 318.989 55.2802 303.044 57.0666 287.041C58.8737 285.8 61.5298 287.083 62.5098 289.045C63.4897 291.006 63.2802 293.325 63.0475 295.505C61.9126 306.137 60.7776 316.77 59.6426 327.403C59.2487 331.094 58.5338 335.313 55.3536 337.227C42.6192 344.891 30.4366 353.473 18.9314 362.882Z" fill="black"/>
    <path d="M212.352 301.078C211.958 311.198 211.563 321.318 211.169 331.438C210.696 343.566 236.833 360.371 247 367C219.082 401.96 159.23 415.943 114.5 415C69.7702 414.057 26.4197 390.239 0 354.133C11.1607 344.686 24.765 338.151 39.1151 335.343C43.8576 334.415 45.3494 328.476 45.8631 323.671C47.3099 310.137 48.7567 296.603 50.2035 283.069C50.9105 276.456 51.5612 269.467 48.7896 263.421C42.9495 250.682 40.2611 236.511 41.0294 222.517C36.1058 223.04 30.9101 223.522 26.3956 221.489C21.8812 219.455 18.5349 213.942 20.6402 209.461C29.6139 190.358 19.8371 167.901 21.5459 146.865C21.846 143.171 22.6851 139.184 25.5287 136.807C28.3722 134.431 33.7077 135.028 34.7203 138.593C35.4498 136.916 36.1793 135.24 36.9088 133.563C33.7833 129.595 27.3325 131.565 22.6591 129.647C14.5582 126.324 15.9524 114.554 18.7782 106.266C24.3256 89.9968 29.8731 73.7275 35.4205 57.4583C37.3874 51.6898 42.2127 44.5514 47.7537 47.0895C45.5207 38.033 56.3207 31.6767 65.1446 28.6527C90.5073 19.9606 115.87 11.2686 141.233 2.57658C145.225 1.20824 149.336 -0.178027 153.552 0.0187483C157.992 0.225965 162.142 2.16802 166.156 4.07499C190.22 15.5049 214.284 26.9348 238.347 38.3647C241.456 39.8413 243.193 43.1444 244.716 46.2304C248.182 53.2511 251.648 60.2719 255.114 67.2926C263.564 84.4085 272.215 103.778 266.26 121.913C263.094 131.555 256.154 139.414 249.389 146.978C246.775 149.9 244.161 152.822 241.547 155.744C247.331 152.464 253.654 159.695 255.052 166.196C256.58 173.307 255.951 180.866 253.269 187.627C250.966 193.431 247.172 198.734 246.19 204.9C245.086 211.828 247.696 218.843 247.351 225.85C247.006 232.856 241.242 240.76 234.493 238.844C232.664 253.224 226.906 267.084 218.006 278.526C213.165 284.75 212.659 293.2 212.352 301.078ZM236.479 234.082C241.607 235.126 245.505 228.962 245.351 223.731C245.198 218.501 242.759 213.508 242.823 208.276C242.921 200.307 248.654 193.659 251.461 186.2C255.042 176.684 253.547 165.42 247.609 157.167C245.885 159.373 241.971 159.237 240.403 156.918C238.836 154.599 240.17 150.917 242.859 150.139C235.926 144.121 225.869 141.922 217.056 144.498C211.529 146.113 205.613 145.401 199.933 144.454C186.072 142.142 172.432 138.51 159.258 133.621C127.545 121.853 90.4683 125.622 61.7729 143.533C59.4385 144.99 57.0088 146.584 54.26 146.712C51.5112 146.839 48.4541 144.791 48.6356 142.045C48.8364 139.009 47.2389 135.717 44.3792 134.677C41.5195 133.637 37.7588 135.735 37.756 138.778C37.7544 140.513 37.6332 143.407 36.0491 142.698C33.6072 141.1 31.1653 139.502 28.7234 137.904C26.1113 139.119 25.1739 142.312 24.6974 145.154C23.2739 153.641 23.3885 162.385 25.034 170.832C26.5585 178.659 29.397 186.553 27.9843 194.4C27.1667 198.942 24.9613 203.131 24.002 207.645C23.0426 212.159 23.6948 217.549 27.4184 220.275C37.1471 216.216 49.2046 218.546 56.7201 225.938C62.1564 231.285 67.5927 236.632 73.0291 241.979C75.4131 244.324 79.5025 242.732 81.9785 240.484C84.915 237.819 87.1079 234.419 90.0283 231.736C92.9487 229.053 97.043 227.087 100.839 228.235C100.432 226.693 101.819 225.305 103.093 224.345C105.462 222.559 108.104 220.845 111.069 220.718C114.033 220.591 117.278 222.682 117.361 225.648C127.447 222.084 138.991 222.871 148.5 227.771C150.403 226.073 153.259 226.179 155.801 226.383C163.349 226.99 170.896 227.596 178.444 228.203C182.075 228.495 185.831 228.823 189.021 230.582C193.593 233.102 196.319 238.605 195.554 243.769C196.541 242.32 199.087 243.337 199.549 245.028C200.011 246.719 199.158 248.461 198.336 250.009C197.514 251.557 196.673 253.309 197.157 254.994C197.963 257.797 202.144 260.121 200.444 262.491C207.301 255.586 214.159 248.68 221.017 241.775C225.255 237.507 230.585 232.88 236.479 234.082ZM230 361C229.984 359.988 225.217 358.715 224.5 358C219.969 353.487 215.576 348.093 209.445 346.273C209.152 327.911 209.657 309.537 210.956 291.218C205.311 295.722 199.666 300.226 194.021 304.73C186.204 310.966 178.388 317.202 170.572 323.438C168.636 321.795 167.306 319.454 166.885 316.95C165.638 327.228 156.426 334.4 147.966 340.368C141.554 344.892 135.142 349.415 128.73 353.939C122.22 347.127 115.709 340.314 109.199 333.502C105.765 329.91 102.109 324.682 104.727 320.459C104.591 322.152 102.486 323.094 100.841 322.672C99.195 322.249 97.9542 320.934 96.8099 319.678C90.6895 312.963 84.5695 306.247 78.4498 299.531C76.0693 296.919 73.5188 293.397 74.9759 290.177C73.9368 290.69 72.8978 291.202 71.8588 291.715C66.2758 285.279 60.2287 279.245 53.78 273.677C51.652 293.938 49.524 314.198 47.396 334.459C32.223 338.442 17.6327 344.638 4.22954 352.789C14.4099 372.161 32.5865 386.365 52.3394 395.787C80.6236 409.277 114.514 411.625 143 408C173.014 397.625 207.986 389.949 227 363.5C227.506 362.796 230.014 361.867 230 361ZM183.25 270.32C181.039 269.752 180.782 266.752 181 264.479C181.364 260.672 181.728 256.865 182.092 253.058C181.015 252.628 179.845 253.318 178.892 253.979C172.129 258.669 165.365 263.359 158.602 268.049C157.809 268.599 156.91 269.448 157.237 270.356C158.161 272.919 156.416 275.679 154.394 277.506C152.373 279.333 149.91 280.849 148.715 283.298C147.617 285.545 147.792 288.178 147.991 290.671C148.295 294.478 148.599 298.286 148.903 302.093C157.856 296.955 166.98 292.114 176.254 287.581C179.218 286.132 179.555 282.124 179.562 278.825C179.569 275.526 180.159 271.474 183.25 270.32ZM237.465 141.802C239.633 143.404 243.252 144.819 244.5 142.43C232.598 132.572 218.522 125.354 203.572 121.442C183.169 116.103 162.766 110.765 142.363 105.427C137.523 104.16 132.56 102.883 127.582 103.367C113.217 104.762 98.8519 106.157 84.4871 107.552C78.5743 108.126 72.2977 108.638 66.9817 105.986C55.8812 100.449 44.6276 95.2189 33.2382 90.3034C31.2103 89.4283 28.6013 88.652 27.0099 90.1835C26.9913 91.1746 28.032 91.8049 28.9312 92.2222C41.216 97.9241 53.5008 103.626 65.7856 109.328C69.2185 110.921 72.8628 112.553 76.6284 112.174C90.486 110.78 104.344 109.385 118.201 107.991C125.14 107.293 132.258 106.607 138.997 108.399C158.279 113.525 177.56 118.651 196.842 123.777C203.726 125.608 210.634 127.446 217.218 130.166C224.43 133.146 231.19 137.162 237.465 141.802ZM101.247 252.079C100.98 258.095 100.713 264.111 100.445 270.127C100.41 270.934 100.378 271.771 100.679 272.521C100.975 273.258 101.56 273.835 102.13 274.387C111.049 283.029 120.17 291.462 129.484 299.676C130.551 300.618 132.358 300.037 133.183 298.878C134.007 297.718 134.121 296.214 134.206 294.794C134.52 289.534 134.673 283.734 131.369 279.629C129.95 277.865 128.002 276.586 126.571 274.831C125.14 273.076 124.301 270.48 125.511 268.566C126.204 267.47 125.774 265.952 124.881 265.012C123.989 264.071 122.744 263.568 121.547 263.07C114.429 260.112 107.615 256.423 101.247 252.079ZM146.618 245.887C143.48 246.204 140.688 242.929 137.603 243.587C136.334 243.858 134.96 244.764 133.874 244.054C129.16 240.97 123.001 240.21 117.678 242.055C115.14 242.935 112.275 244.352 109.963 242.985C109.235 242.555 108.663 241.882 107.901 241.516C107.139 241.15 106.022 241.251 105.697 242.032C127.236 253.035 153.056 255.361 176.215 248.385C170.997 247.442 165.78 246.499 160.562 245.556C159.021 245.277 157.342 244.919 156.366 243.695C155.243 242.288 152.985 242.637 151.416 243.519C149.846 244.401 148.409 245.707 146.618 245.887ZM255.819 127.917C258.281 124.756 260.751 121.494 262.034 117.699C262.247 117.07 263.666 116.643 263.5 116C263.247 115.018 261.507 115.119 260.5 115C259.493 114.881 259.19 115.465 258.216 115.748C248.508 118.572 237.578 120.118 227.87 122.942C226.881 123.23 225.651 123.906 225.904 124.903C226.029 125.396 226.494 125.714 226.924 125.985C232.692 129.605 238.619 132.973 244.681 136.075C245.634 136.563 246.682 137.058 247.733 136.852C248.842 136.634 249.645 135.698 250.354 134.818C252.193 132.532 254.015 130.231 255.819 127.917ZM150.223 268.848C159.973 263.462 169.403 257.498 178.447 250.996C167.525 253.51 156.416 255.207 145.242 256.068C143.353 256.213 141.453 256.334 139.568 256.147C137.15 255.906 134.815 255.162 132.5 254.423C124.01 251.712 115.521 249.001 107.032 246.29C105.873 245.92 104.654 245.545 103.46 245.776C102.265 246.007 101.138 247.069 101.285 248.277C103.304 246.284 106.644 247.026 109.342 247.903C116.692 250.291 124.043 252.678 131.393 255.066C134.271 256.001 137.186 256.943 140.206 257.13C142.22 257.255 144.237 257.04 146.243 256.826C154.681 255.925 163.118 255.023 171.556 254.122C164.445 259.03 157.334 263.939 150.223 268.848ZM103.181 249.443C103.184 250.435 104.193 251.08 105.076 251.532C114.263 256.228 123.449 260.923 132.635 265.619C133.76 266.194 135.13 265.563 136.107 264.761C137.084 263.959 137.969 262.944 139.189 262.612C138.388 261.664 136.852 262.491 136.018 263.41C135.183 264.328 134 265.434 132.899 264.861C123 259.709 113.094 254.569 103.181 249.443ZM140.299 263.937C141.972 265.499 143.854 266.836 145.88 267.901C146.818 268.394 148.058 268.797 148.853 268.097C145.681 266.885 142.747 265.054 140.263 262.737C139.734 262.685 139.91 263.574 140.299 263.937Z" fill="black"/>
    <path d="M262 117L226.658 124.812L248.224 135.114L262 117Z" stroke="#F14019" strokeWidth="5" strokeLinejoin="round"/>
    <path d="M28 90.5L73 110.5L131 105L216.5 127L244.5 144" stroke="#F14019" strokeWidth="5" strokeLinecap="round"/>
    </motion.svg>

    <svg className="skin" width="269" height="416" viewBox="0 0 269 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.0001 140.5C38.5002 138.788 43.0001 126 43.0001 126H81.0001L123 122.5C123 122.5 160 117.5 169.5 126C179 134.5 228.5 141.167 238.5 144.5C248.5 147.833 241 154.5 241 154.5C241 154.5 245.5 156.5 248.5 156.5C251.5 156.5 254 169 254 178C254 187 245 196.5 245 205.5C245 214.5 246.5 220.5 245 227.5C243.5 234.5 237.5 242.5 233.5 236C229.5 229.5 186 344 229 359C272 374 218 371 197.5 389.5C177 408 147.5 406.5 108 412.5C68.5 418.5 1.5 363 1.5 354C1.5 345 47 337.5 46.5 332.5C46 327.5 53.5 267 53.5 267L43.0001 222C43.0001 222 25.0001 223.5 22.0001 216.5C19.0001 209.5 29.5001 198 26.5001 188C23.5001 178 25.0001 181.5 22.0001 167.5C19.0001 153.5 23.0002 139.5 26.5001 137.5C30 135.5 33.5 142.212 36.0001 140.5Z" fill="#D7B9B0"/>
    </svg>

    <div className="eyes">
        <div className="eyeball">                
            <div className="eye" ></div>                
        </div>
        <div className="eyeball">               
            <div className="eye" ></div>                
        </div>
    </div>
    
    </div>
    </div>
  )
}

const Talk = () => (
  <div className="talk">
  <svg width="347" height="202" viewBox="0 0 347 202" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M179.097 202C271.827 202 347 156.781 347 101C347 45.2192 271.827 0 179.097 0C86.3672 0 11.1946 45.2192 11.1946 101C11.1946 113.692 15.0862 125.837 22.1908 137.027C16.2709 143.985 0.394264 164.774 0.394279 187.588C0.39428 189.75 0.350014 191.399 0.291146 192.603C0.0187033 194.165 -0.0296793 195.155 0.0142402 195.259C0.0581597 195.364 0.19438 194.583 0.291146 192.603C1.73001 184.354 9.41851 160.147 42.766 166.144C46.7565 166.861 49.9897 167.261 52.5614 167.39C83.3406 188.6 128.617 202 179.097 202Z" fill="#F8F0F0"/>
  <text className="svgText" x="60" y="80">Hello there!</text>
  <text className="svgText" x="60" y="120">How we doin?</text>
  </svg>

  </div>
)