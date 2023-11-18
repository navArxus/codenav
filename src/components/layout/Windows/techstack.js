import  htmlpng from "../../../assests/techstack/html.png"
import  csspng from "../../../assests/techstack/css.png"
import  jspng from "../../../assests/techstack/js.png"
import  pythonpng from "../../../assests/techstack/python.png"
import  jquerypng from "../../../assests/techstack/jquery.png"
import  firebasepng from "../../../assests/techstack/firebase.png"
import  gitpng from "../../../assests/techstack/git.png"
import  reactpng from "../../../assests/techstack/react.png"

import "./window.css"

const Techstack = () => {
    return (
        <div className="techstack">
            <div className="techstack-skill">
                <img src={htmlpng} alt="" />
                <small>HTML</small>
            </div>
            <div className="techstack-skill">
                <img src={csspng} alt="" />
                <small>CSS</small>
            </div>
            <div className="techstack-skill">
                <img src={jspng} alt="" />
                <small>JavaScript</small>
            </div>
            <div className="techstack-skill">
                <img src={jquerypng} alt="" />
                <small>jQuery</small>
            </div>
            <div className="techstack-skill">
                <img src={reactpng} alt="" />
                <small>React</small>
            </div>
            <div className="techstack-skill">
                <img src={firebasepng} alt="" />
                <small>Firebase</small>
            </div>
            <div className="techstack-skill">
                <img src={gitpng} alt="" />
                <small>Git</small>
            </div>
            <div className="techstack-skill">
                <img src={pythonpng} alt="" />
                <small>Python</small>
            </div>
        </div >
    )
}

export default Techstack