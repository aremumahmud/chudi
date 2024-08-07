import '../css/header.css'
import dark_logo from '../assets/dark.png'
import ThemeToggleButton from './themeSwitch'
import curve from '../assets/curve.svg'

function Header(){
    return <div className="header">
   
      <div className="logo_section">
        <img className='curve one' src={curve} alt="" />
        <img src={dark_logo} alt="" />
        <img className='curve two' src={curve} alt="" />
      </div>
      <div className="nav">
        <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#skills">Skills</a></li>
            <li> <ThemeToggleButton isDark={"dark"} onChange={() =>{}} /></li>
        </ul>
      </div>
    </div>
}


export default Header