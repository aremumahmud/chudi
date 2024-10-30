import { a } from "@react-spring/web";
import "../css/work.css";
import { BlurText } from "./blurtext";
import { SplitText } from "./splittext";
import { FaArrowLeft, FaArrowRight, FaArrowsLeftRight, FaArrowUp19 } from "react-icons/fa6";

function Work({light, works = [1, 2, 3, 4] , title="EXPERIENCE" , id, reduce=false, string=false, setOpen}) {
  return (
    <div className={reduce?"work reduce_pad":'work'} id={id}>
      <p className="work_title" style={light ? {
        color: '#000',
        fontWeight: '590',
        opacity: 1
            }:{}}>{title}</p>
      <div className="works">
        {works.map((work, i) => {
          return (
            <div key={i} className="work_item" style={light ? {
              color: '#000',
              borderBottom:'1px solid #000'
            }:{}}>
              <div>
                 <p className="title" style={light ? {
                  fontWeight: '300',
                  opacity: 1,
                  position: 'relative',
                   zIndex:'1'
            }:{}}>
                {work.title} <br /><span style={light ? {
                  fontWeight: '300',
                    opacity: 1,
            }:{}} ><i>{work.date|| work.link}</i></span>
              </p>
              {
                work.date? <BlurText text={!string?work.name:work.toString()} className="bold_title" delay={50} />:
                <a href={work.link}><BlurText text={!string?work.name:work.toString()}   className={string?"smaller_bold":'bold_title'} delay={50} /></a>
              }
              </div>
              {
                !string && <div style={{cursor:'pointer'}} onClick={() => {
                  localStorage.setItem('list_work', JSON.stringify(work.list))
                  localStorage.setItem('work_data', JSON.stringify({
                    ...work, list:null
                  }))
                  setOpen(open => !open)
                }} className="more">
                <FaArrowRight className="arrow"/>
              </div>
              }
             
             
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
