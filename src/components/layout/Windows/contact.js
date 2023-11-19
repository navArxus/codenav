import githubpng from "../../../assests/contact/github.png"
import twitterpng from "../../../assests/contact/twitter.png"
import linkedinpng from "../../../assests/contact/linkedin.png"
import instapng from "../../../assests/contact/insta.png"


import "./window.css"

const Contact = () => {
    return (
        <div className="techstack">
            <a href="https://github.com/nav302004" target="_blank" rel="noreferrer">
                <div className="techstack-skill">
                    <img src={githubpng} alt="" />
                    <small>Github</small>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/navvermaa" target="_blank" rel="noreferrer">
                <div className="techstack-skill">
                    <img src={twitterpng} alt="" />
                    <small>Twitter</small>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/navvermaa" target="_blank" rel="noreferrer">
                <div className="techstack-skill">
                    <img src={linkedinpng} alt="" />
                    <small>Linkedin</small>
                </div>
            </a>
            <a href="https://www.instagram.com/nav.2994/" target="_blank" rel="noreferrer">
                <div className="techstack-skill">
                    <img src={instapng} alt="" />
                    <small>Instagram</small>
                </div>
            </a>
        </div >
    )
}

export default Contact