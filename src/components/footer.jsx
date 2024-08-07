import { Zenitho } from 'uvcanvas'
import '../css/footer.css'
import GlowBtn from './glowbtn'

function Footer(){
    return <div className="footer" id='contact'>
        <div className="footer_background">
            <Zenitho />
            <div className="content">
               <p className='footer_content'>Wanna create
something awesome
together?</p>

    <div>
        <a className='cta' href="mailto:aremumahmud2003@gmail.com"><GlowBtn text={"Let's talk"} /></a> 

    
   
   
{/* </div> */}
<div className="cta"><p className='email'>Don&apos;t like flashy buttons? Reach out at <u>aremumahmud2003@gmail.com</u></p></div>
            </div></div>
        </div>
        <br /><br />
    </div>
}

export default Footer