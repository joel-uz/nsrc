import "./hero.css"
import pels from "./assets/others/pels.png"
import kerala from "./assets/others/kerala.png"

const Hero = () => {
    return (
        <div className="main-hero">
            <div className="content-hero">
                <div className="top-hero">
                    <div className="logos">
                        <img src={kerala} alt="keralasection" className="logo_board" />
                        <img src={pels} alt="ias/pels" className="logo_board" />
                    </div>
                    <p className="presents-main"> NSRC 2023</p>
                    <p className="presents">At National Institute of Techology Calicut</p>
                    <br/><br/>
                    <p className="presents">03-04 November 2023</p>
                </div>
            </div> 
        </div>
    )
}

export default Hero