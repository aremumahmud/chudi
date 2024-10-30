import { useEffect, useState } from 'react'
import '../css/reveal.css'
import { BlurText } from './blurtext'
import { FaX } from 'react-icons/fa6'

function Reveal({ open, setOpen, light }) {

    let [tabs, setTabs] = useState(["project_achievements"])
    let [activeTab, setActive] = useState('')
     let [base_list, setBase] = useState([])
    let [work_list, setWorkList] = useState(base_list[activeTab])
   
    let [height, setHeight] = useState('0vh')
    
    let work_data =JSON.parse(localStorage.getItem('work_data'))

    useEffect(() => {
        setHeight('95vh')
         try {

             let base_list_temp = JSON.parse(localStorage.getItem('list_work'))

             if (base_list_temp.constructor.name === 'Array') {
              
                 setBase({ project_achievements: base_list_temp })
                 base_list_temp = { project_achievements: base_list_temp }
             } else {
                 setBase(base_list_temp)
             }
            
           
            let tabs_list = Object.keys(base_list_temp)
            console.log(base_list, 'll')
            setTabs(tabs_list)
            setActive(tabs_list[0])
           setWorkList(base_list_temp[tabs_list[0]])
            
       
    } catch (err) {
        console.log('nothing yet')
    }
    }, [])
   
    useEffect(() => {
         setWorkList(base_list[activeTab])
    }, [activeTab])
    
    return <div className="reveal" style={open?{visibility:"visible", height, background:light?'#fff':'#000', border:'1rem solid #15151521'}:{}}>
        <div className="reveal_header">
            <div style={light?{color:'#000'}:{}}>
                  <p className='sub_head'  style={light ? {
                  fontWeight: '300',
                   opacity:1
                } : {}}>{ work_data.title}</p>
            <p className='sub_head'  style={light ? {
                  fontWeight: '300',
                   opacity:1
                } : {}}> <i>{ work_data.date}</i> </p>
            <BlurText text={work_data.name} className='reveal_job'/>
            </div>
            <div className="close" onClick={() => {
                setOpen(false)
                setWorkList([])
            }}>
                <FaX color={light?'#000':'#fff'} style={{cursor:'pointer'}}/> 
          </div>
        </div>
        <br /><br /><br />
        <div className="duties" style={light?{color:'#000'}:{}}>
            <div className="tabs">
                {tabs.map((tab, i) => <p style={{opacity:(light?1:.5),borderBottom: (activeTab!==tab?'none':'')}} key={i} onClick={()=>setActive(tab)} className="roles_title">{ tab.split('_').join(" ") }</p>)
                }
            </div>
         

            <div className="achievements">
                
{console.log(work_list, 'jhgf')}
                 {
                        work_list && work_list.map((data, i) => {
                            return  <div style={light?{background:'#fff', borderTop:'1px solid #6383d3'}:{}} key={i} className="achieve">
                   
                                <p style={light?{opacity:.8}:{}}>{ i+1}</p>
                    <p>  {data} </p>
                </div>
                        })
                    }
               
            </div>
        </div>
    </div>
}

export default Reveal