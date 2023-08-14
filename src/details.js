import "./details.css"
import image1 from "./assets/about/a.jpg"
import image2 from "./assets/about/b.jpg"
import image3 from "./assets/about/c.jpg"

const DetailsPage = () => {
    return (
        <div className="details-main" id="details">
            <h1 className="title">About The Event</h1>
            <div className="others">
                <div className="content-part">
                <div className="card">
                    <img src={image1} alt="content" className="images-head" />
                    <p className="text-heading">Technical Workshops</p>
                    <p className="content-text">
                        We are planning to host some good engaging technical workshops aimed at
                        equipping participants with practical skills and knowledge in various
                        domains of technology. 
                    </p>
                </div>
                <div className="card">
                    <img src={image2} alt="content" className="images-head" />
                    <p className="text-heading">Tech Talks</p>
                    <p className="content-text">
                        We take pride in organizing insightful tech talks that bring
                        together industry experts, researchers, and enthusiasts from diverse backgrounds.
                        
                    </p>
                </div>
                <div className="card">
                    <img src={image3} alt="content" className="images-head" />
                    <p className="text-heading">Paper Presentations</p>
                    <p className="content-text">
                        We are hosting a prestigious platform for paper presentations,
                        where researchers, academicians, and industry professionals showcase 
                        their cutting-edge work.  
                    </p>
                </div>
                </div>
                <div className="ask">
                    <p className="ask-text">Register for NSRC 2023 at NIT Calicut Through the typeform below</p>
                    <button className="button-green-reg"><a href="https://opnform.com/forms/submit-research-papers-udbrsb" rel="noreferrer" target="_blank" className="link">Register Now</a></button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage