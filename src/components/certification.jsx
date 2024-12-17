import { a } from "@react-spring/web";
import "../css/work.css";
import { BlurText } from "./blurtext";
import { SplitText } from "./splittext";
import { FaArrowLeft, FaArrowRight, FaArrowsLeftRight, FaArrowUp19 } from "react-icons/fa6";

function Cert({light, works = [1, 2, 3, 4] , title="EXPERIENCE" , id, reduce=false}) {
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
            <div key={i} className="work_item item_cert" style={light ? {
              color: '#000',
              border:'1px solid #ccc'
            }:{}}>
              <div>
               
              {
                          <BlurText text={work.name} className="bold_title smallee" delay={50} />}
                      {
                          work.cert_list.map(dt => <p style={{opacity:.8}}>{ dt}</p>)
                      }
              </div>
             
             
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cert;
