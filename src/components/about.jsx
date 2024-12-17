import '../css/about.css'
import GlowBtn from './glowbtn'
import userImng from '../assets/m1.jpg'
import { BlurText } from './blurtext'

let text = `I am Chukwudi Nnochirionye, a seasoned IT professional with 17 years of expertise in IT infrastructure management, automation, DevOps and security. I specialize in enhancing performance, reliability and optimizaion of cloud infrastructure using tools like Terraform, Ansible, Bash scripting & Powershell. With a strong foundation in network management, security integration, storage design & optimization and disaster recovery, I’m ready to bring robust, efficient solutions to your team.`

function About({light}){
    return <div className="about_wrap" id='about'>
       <div className="about">
        <div className="img">
            <img src={userImng} alt="" />
        </div>
            <div className="content" style={light ? {
            color:'#000'
        }:{}}>
            <BlurText text={text} className='about_text' delay={30} />
            <div className="middle">
              <a href="#contact"><GlowBtn text={"Get in touch"} /></a>
            </div>   
          
            {/* <button></button> */}
        </div>
       </div>
    </div>
}

export default About 
