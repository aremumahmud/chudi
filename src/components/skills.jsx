import { FaGithub, FaNodeJs } from 'react-icons/fa6'
import '../css/skill.css'
import { BlurText } from './blurtext'


function Skills({light ,skill=[1,2,3,4,5,6,7,7]}){
    return <div className="skills" id='skills'>
<div className="skill_title" style={light ? {
        color: '#000',
        fontWeight: '590',
        opacity: 1
            }:{}}>OEM Proficiency</div>
    <div className="skills_collection">
        {
            skill.map((skill_item, i)=>{
                return <div className="skill_item" key={i} style={light ? {
        color: '#000',
        fontWeight: '590',
                    opacity: 1,
                    backgroundColor: '#fff',
        border: '1px solid #ccc'
            }:{}}>
                    <div className="image">
                        <img src={skill_item.img} alt="" />
                      </div>
                        <BlurText className='name' text={skill_item.name} />
                     {/* <div className="name">Github</div> */}
                     <div className="info">
                       {/* <p className="stats">Proficiency: <span>{skill_item.proficiency}</span></p> */}
                       {/* <p className="years">Years of hands-on Experience: 4years</p> */}
                     </div>
                
                </div>
            })
        }
    </div>
    
    </div>
}

export default Skills