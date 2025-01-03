import Marquee from "react-fast-marquee";
import CompanyImages from "./compimages";

function Companies({ companies, light}) {
    return <div >
        <br /><br /><br /><br /><br />
        <p style={{
            color: !light?'#fff':'#000',
            textAlign: 'center',
            fontWeight:'200',
            fontSize: '1.5rem',
            marginBottom:"3rem"
        }}>Companies Collaborated With </p>
        <Marquee>

        {
            companies && companies.map(company => {
                return <CompanyImages light={light} src={company.img}  />
            })
        }

        </Marquee>
            <br /><br /><br /><br /><br />
        </div>
}

export default Companies