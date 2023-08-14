import "./details.css"
import image1 from "./assets/about/a.jpg"
import image2 from "./assets/about/b.jpg"
import image3 from "./assets/about/c.jpg"
import { Checkbox } from 'antd';
import { useState } from "react";


const DetailsPage = () => {

    const [tick, setTick] = useState(false);

    const onChange = (e) => {
        setTick(e.target.checked)
    };

    return (
        <div className="details-main" id="details">
            <h1 className="title"> Our Event </h1>
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
                <div className="ask" id="reg">
                    <p className="ask-text">Register for NSRC 2023 at NIT Calicut Through the typeform below</p>
                    <div className="card-guide">
                        <p className="text-heading">Abstract Submission Guidelines</p>
                        <p className="content-text">
                           1. The abstract length is limited to 1000 words. <br/>
                            2.Your publications from the work also may be included at the end of the abstract page.<br/>
                            3.The Abstract should be submitted through the given portal and no other submissions are allowed.<br/>
                            4.The abstract template can be downloaded using this link.
                        </p>
                        <Checkbox onChange={onChange}>I abide by the rules and regulations</Checkbox>
                    </div>
                    <button className= {tick? "button-green-reg":"no-button"} disabled={true}><a href="https://opnform.com/forms/submit-research-papers-udbrsb" rel="noreferrer" target="_blank" className="link" disabled={!tick}>Register Now</a></button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage