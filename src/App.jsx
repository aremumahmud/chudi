// import { useState } from 'react'
// import reactLogo from './assets/curve.svg'
// import viteLogo from '/vite.svg'
import { FaAmazon, FaJs, FaNodeJs, FaPython } from 'react-icons/fa6'
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


let personal_projects = [
  {title:'Senior Software Engineer', link:'https://www.npmjs.com/package/exchange-router', name:'Exchange Router'},
  {title:"Software Engineer", link:'https://www.npmjs.com/package/search_dir_cli' , name:'SearchDir CLI'},
  {title:'Senior Software Engineer' , link:'http://clippyui.vercel.app/' , name:'Clippy Assist'},{
    title:'See more at', name:'GitHub', link:'https://github.com/aremumahmud'
  }
]

let work_experience = [
  {title:'Senior Software Engineer', date:'Jan 2018 - Dec 2022', name:'IBTIMI'},
  {title:"Software Engineer", date:'Oct 2023 - Sept 2023' , name:'BODEGA VIP RADIO'},
  {title:'Senior Software Engineer' , date:'Dec 2023 - Present' , name:'DATANOTCH'}
]

let skills_bar = [{
  icon: <FaNodeJs />,
  name:'Node.JS',
  proficiency:'Expert'
},{
  icon: <FaJs />,
   name:'JavaScript',
  proficiency:'Expert'
},{
  icon: <FaPython />,
   name:'Python',
  proficiency:'Intermediate'
},{
  icon:<DiLinux />,
   name:'Linux',
  proficiency:'Intermediate'
},{icon:<DiMongodb />,
  name:'Mongodb',
 proficiency:'Expert'},{icon:<DiMysql />,
  name:'MySQL',
 proficiency:'Expert'},
 {icon:<DiRedis />,
  name:'Redis',
 proficiency:'Expert'},
{
  icon:<FaAmazon />,
   name:'Amazon Web Services',
 proficiency:'Intermediate'
},{
  icon:<DiCss3Full />,
   name:'CSS3',
 proficiency:'Expert'
},{
  icon:<DiHtml5 />,
   name:'HTML5',
 proficiency:'Expert'
},{
  icon:<Rabbit size={50} />,
   name:'RabbitMq',
 proficiency:'Expert'
}
,{
  icon:<Azure size={50}/>, 
   name:'Azure',
 proficiency:'Intermediate'
}]


function App() {
 
  return (
    <div className='container'>
         <div className="band"></div>
      <Header />
      <Hero />
      <Work id={'experience'} works={work_experience} />
      <About />
      <Skills skill={skills_bar} />
      <Work reduce={true} id={'projects'} title={'PERSONAL PROJECTS'} works={personal_projects} />
      
      <Footer />{/* */}
    </div>
  )
}

export default App
