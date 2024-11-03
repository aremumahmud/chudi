import { Opulento, Tranquiluxe, Zenitho } from "uvcanvas";
import "../css/footer.css";
import GlowBtn from "./glowbtn";
import foter from "../assets/pexels-nappy-935949.jpg";
import { FaPhone } from "react-icons/fa6";

function Footer({ light }) {
  return (
    <div className="footer" id="contact">
      <div className="footer_background">
        {/* <Opulento /> */}
        <img src={foter} alt="" />
        <div
          className="content"
          style={
            light
              ? {
                  borderRadius: "30px",
                }
              : {}
          }>
          <p className="footer_content">
            Ready to build a powerful network solution together?
          </p>

          <div>
            <a className="cta" href="mailto:chudinnoch@outlook.com">
              <GlowBtn text={"Let's talk"} />
                      </a>
                      <div style={{
                          display: 'flex',
                          gap:'2rem'
                      }}>
                           <a style={{
                          display: 'flex',
                          gap:'.5rem'
                      }}  href=""><FaPhone />+1 (682) 559-8378</a>
                          <a style={{
                          display: 'flex',
                          gap:'.5rem'
                      }} href=""><FaPhone /> +1 (469) 465-2502</a>
                      </div>
                     

            {/* </div> */}
            <div className="cta">
              <p className="email">
                Don&apos;t like flashy buttons? Reach out at{" "}
                <u>chudinnoch@outlook.com</u>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Footer;
