import '../css/header.css'
import dark_logo from '../assets/dark.png'
import ThemeToggleButton from './themeSwitch'
import curve from '../assets/curve.svg'
import curve2 from '../assets/curve2.svg'
import { FaBars } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

function Header(){

  let [open , setOpen] = useState(false)

  useEffect(()=>{
    let resize = ()=>{
      setOpen(false)
    }
      window.addEventListener('resize' , resize )

      return window.removeEventListener('resize' , resize)
  }, [])

    return <div className="header">
   
      <div className="logo_section">
        <img className='curve one desktop' src={curve} alt="" />
        <img src={dark_logo} alt="" />
        <img className='curve two desktop' src={curve} alt="" />
      </div>
      <div className={open?"nav close":'nav'}>
        <ul className='desktop'>
            <li><a  href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#skills">Skills</a></li>
            <li> <ThemeToggleButton isDark={"dark"} onChange={() =>{}} /></li>
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
           <li><a onClick={()=>setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={()=>setOpen(false)} href="#about">About</a></li>
            <li><a onClick={()=>setOpen(false)} href="#experience">Experience</a></li>
            <li><a onClick={()=>setOpen(false)} href="#contact">Contact</a></li>
            <li><a onClick={()=>setOpen(false)} href="#skills">Skills</a></li>
            <div style={{
              position:'absolute',
              top:"90%",
              left:0
            }}>
              <ThemeToggleButton  isDark={"dark"} onChange={() =>{}} />
            </div>
            

        </div>
      }
      <div className="curvysides mobile">
      <img className='curve first' src={curve} alt="" />
       <img className='curve second' src={curve} alt="" />
      </div>
     
    </div>
}


export default Header