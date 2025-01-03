// import { useState } from 'react'
// import reactLogo from './assets/curve.svg'
// import viteLogo from '/vite.svg'
import { FaAmazon, FaCcDiscover, FaJs, FaNodeJs, FaPython } from 'react-icons/fa6'
import { DiCss3Full, DiHtml5, DiLinux, DiMongodb, DiMysql, DiRedis } from 'react-icons/di'
import {} from 'react-icons/fi'

import './App.css'
import './css/responsive.css'
import './css/responsive_tab.css'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Skills from './components/skills'
import Work from './components/work'
import Rabbit from './components/rabbit'
import Azure from './components/azure'
import Companies from './components/marquee'
import images from './data/images'
import oem from './data/oem'
import pefeciency from './data/pefeciency'
import Reveal from './components/reveal'
import experience from './data/experience'
import { useEffect, useState } from 'react'
import certs from './data/certs'
import Cert from './components/certification'


let personal_projects = [
  {title:'Senior Software Engineer', link:'https://www.npmjs.com/package/exchange-router', name:'Exchange Router'},
  {title:"Software Engineer", link:'https://www.npmjs.com/package/search_dir_cli' , name:'SearchDir CLI'},
  {title:'Senior Software Engineer' , link:'http://clippyui.vercel.app/' , name:'Clippy Assist'},{
    title:'See more at', name:'GitHub', link:'https://github.com/aremumahmud'
  }
]





function App() {
 
  let [open, setOpen] = useState(false)
  let [light, setLight] = useState(false)

  let changeTheme = () => {
    setLight(l=> !l)
  }

  useEffect(() => {
    if (!light) {
      document.body.style.background = '#000'
        
    } else {
      document.body.style.background = '#fff'
      
    }
  })
 
  return (
    <div className='container'>
      {
        open && <Reveal  light={light}  open={open} setOpen={setOpen} />
      }
     
         <div className="band" style={light?{background:'#fff'}:{}} ></div>
      <Header changeTheme={changeTheme} light={light} />
      <Hero light={light} />
      <Work light={light} setOpen={setOpen} id={'experience'} works={experience} />
      <About light={light}/>
      <Companies  light={light} companies={images} />
      <Skills  light={light} skill={oem} />
      <Work light={light}  reduce={true} id={'projects'} title={'AREA OF SPECIALIZATION'} works={pefeciency} string={true} />
      <Cert light={light} reduce={true} id={'certs'} title={'Certifications / Hands-on Training'} works={certs} />
      
      <Footer />{/* */}
    </div>
  )
}

export default App
