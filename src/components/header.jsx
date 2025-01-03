import '../css/header.css'
import dark_logo from '../assets/dark.png'
import light_logo from '../assets/light_logo.png'
import ThemeToggleButton from './themeSwitch'
import curve from '../assets/curve.svg'
import curve2 from '../assets/curve2.svg'
import curve_light from '../assets/curve_white.svg'
import { FaBars } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

function Header({light, changeTheme}){

  let [open , setOpen] = useState(false)

  useEffect(()=>{
    let resize = ()=>{
      setOpen(false)
    }
      window.addEventListener('resize' , resize )

      return window.removeEventListener('resize' , resize)
  }, [])

    return <div className={light?"header non-transparent":'header'} style={light?{background:'transparent'}:{}}>
   
      <div style={light?{background:'#fff'}:{}} className="logo_section">
        <img className='curve one desktop' src={!light?curve:curve_light} alt="" />
        <img src={!light?dark_logo:light_logo} alt="" />
        <img className='curve two desktop' src={!light?curve:curve_light} alt="" />
      </div>
      <div className={open?"nav close":'nav'}>
        <ul className='desktop'>
            <li><a  href="#projects">Specialization</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href='#certs'>Certifications</a></li>
            <li> <ThemeToggleButton onChange={changeTheme} isDark={!light} /></li>
        </ul>

        <div className="mobile" onClick={()=>setOpen(o=>!o)} >
         
          {
            open?'Close':'Menu'
          }
          {
            open && <div className="blind">
          <img className='curve five' src={curve2} alt="" />
          </div>
          }
         
        
        </div>
      </div>
      {
        open && <div className="nav_mobile mobile">
           <li><a onClick={()=>setOpen(false)} href="#projects">Specialization</a></li>
            <li><a onClick={()=>setOpen(false)} href="#about">About</a></li>
            <li><a onClick={()=>setOpen(false)} href="#experience">Experience</a></li>
            <li><a onClick={()=>setOpen(false)} href="#contact">Contact</a></li>
          <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href='#certs'>Certifications</a></li>
            <div style={{
              position:'absolute',
              top:"90%",
              left:0
            }}>
              <ThemeToggleButton  isDark={!light} onChange={changeTheme} />
            </div>
            

        </div>
      }
      <div className="curvysides mobile">
      {/* <img className='curve first' src={curve} alt="" /> */}
       <img className='curve second' src={!light?curve:curve_light} alt="" />
      </div>
     
    </div>
}


export default Header