import { a } from "@react-spring/web";
import "../css/work.css";
import { BlurText } from "./blurtext";
import { SplitText } from "./splittext";

function Work({ works = [1, 2, 3, 4] , title="EXPERIENCE" , id, reduce=false}) {
  return (
    <div className={reduce?"work reduce_pad":'work'} id={id}>
      <p className="work_title">{title}</p>
      <div className="works">
        {works.map((work, i) => {
          return (
            <div key={i} className="work_item">
              <p className="title">
                {work.title} <br /><span>{work.date|| work.link}</span>
              </p>
              {
                work.date? <BlurText text={work.name} className="bold_title" delay={50} />:
                <a href={work.link}><BlurText text={work.name} className="bold_title" delay={50} /></a>
              }
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
