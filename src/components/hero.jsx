import {  Zenitho } from "uvcanvas"
import '../css/hero.css'
import curve from '../assets/curve.svg'
import { FaArrowDown } from 'react-icons/fa6'
import SwiperTop from "./sliderTop"
import SwiperBottom from "./SliderBottom"
import { BlurText } from "./blurtext"

function Hero (){
    return <div className="hero">
        <div className="animated">
             <Zenitho className='animated-background' />
             <div className="catchy">
             <img className='curve three' src={curve} alt="" />
             <img className='curve four' src={curve} alt="" />
             <div style={{height:'100%'}}>
             <BlurText text="A versatile software engineer with a strong design aesthetic" className="catchy_text" delay={50} />
               
                <div className="icon-arrow">
                   <FaArrowDown />
                </div>
             </div>
               
             </div>
        </div>
        <div className="other_content">
            <SwiperTop />
            <SwiperBottom />
        </div>
       
    </div>
}

export default Hero