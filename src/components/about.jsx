import '../css/about.css'
import GlowBtn from './glowbtn'
import userImng from '../assets/m1.jpg'
import { BlurText } from './blurtext'

let text = `I’m Mahmud Aremu, a software engineer based in Nigeria With a strong foundation in both frontend and backend development, I specialize in crafting exceptional web experiences through clean code and thoughtful design.`

function About(){
    return <div className="about_wrap" id='about'>
       <div className="about">
        <div className="img">
            <img src={userImng} alt="" />
        </div>
        <div className="content">
            <BlurText text={text} />
               
            <a href="#contact"><GlowBtn text={"Get in touch"} /></a>
            {/* <button></button> */}
        </div>
       </div>
    </div>
}

export default About 