import {  Opulento, Velustro, Zenitho } from "uvcanvas"
import '../css/hero.css'
import curve from '../assets/curve.svg'
import { FaArrowDown } from 'react-icons/fa6'
import SwiperTop from "./sliderTop"
import SwiperBottom from "./SliderBottom"
import { BlurText } from "./blurtext"
import curve_light from '../assets/curve_white.svg'
// import imagw from '../assets/pexels-pixabay-60504.jpg'
import imagw from '../assets/devops-concept-software-development-it-operations-agile-programming_1075498-9127.jpg'

function Hero ({light}){
    return <div className="hero">
        <div className="animated">
             {/* <Zenitho className='animated-background' /> */}
             <img className="backy" src={imagw} alt="" />
             <div className="catchy">
             <img className='curve three' src={!light?curve:curve_light} alt="" />
             <img className='curve four' src={!light?curve:curve_light} alt="" />
                <div className="hero_content" style={light ? {
                    background: '#fff',
                    color: '#000',
                    borderTopRightRadius: '30px'
             }:{}} >
             <BlurText text="Versatile Senior DevOps Engineer with expertise in Data Center design, storage & network optimization, and Cybersecurity." className="catchy_text" delay={50} />
               
               <a href="#about">
                    <div className="icon-arrow">
                   <FaArrowDown />
                </div>
               </a>
            
             </div>
               
             </div>
        </div>
        <div className="other_content">
              {/* <SwiperTop /> */}
            <p className="hero_title" style={light ? {
                    background: '#fff',
                color: '#000',
                    opacity:1,
                borderTopRightRadius: '30px',
                    fontWeight:'500'
             }:{}}>OPEN SOURCE SOLUTION WORKED WITH</p>
            {/* <SwiperTop /> */}
            <SwiperBottom light={light} />
        </div>
       
    </div>
}

export default Hero
