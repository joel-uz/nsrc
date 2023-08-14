import "./about.css"
import image1 from "./assets/gallery/7.jpg"


const About = () => {
    return (
        <div className="details-main" id="about">
            <h1 className="title"> About Us </h1>
            <div className="about-content">
                <div className="images">
                    <img src={image1} alt="image1-" className="image-about"/>
                </div>
                <div className="about-ieee">
                    <p className="content-aboutieee">
                        <span className="special">We are</span> a group of enthusiastic students who are passionate about
                    technology and innovation. Our aim is to foster technical skills, knowledge sharing,
                    and professional development among our members. Through various events, workshops,
                    and projects, we strive to create a vibrant community that encourages collaboration
                    and learning in the field of engineering. Join us and become a part of our journey
                    towards exploring and shaping the future of technology!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About