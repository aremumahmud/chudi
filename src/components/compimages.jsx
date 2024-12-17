function CompanyImages({src, light}) {
    return <div className="image_company" style={{ background: !light?'#151515':"#fff", padding: '1rem', border:light?'1px solid #ccc':'none' }}>
        <img src={src} alt="" />
    </div>
}

export default CompanyImages