import '../css/glowbtn.css'


function GlowBtn({text}){
    return <button className="button">
    <div className="blob1"></div>
    <div className="blob2"></div>
    <div className="inner">{text}</div>
  </button>
}


export default GlowBtn