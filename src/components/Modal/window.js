import React from "react";
import "./window.css"
import Draggable from "react-draggable"
import {AiOutlineClose} from "react-icons/ai"
import {FiMinimize2 , FiMaximize2} from "react-icons/fi"


const Window = () => {

    const nodeRef = React.useRef(null);

    return (
        <Draggable handle=".handle"  nodeRef={nodeRef} >
            <div className="window" ref={nodeRef} >
                <div className="handle">
                    <div className="handle-left"></div>
                    <div className="handle-right" onClick={() => alert("hellow wrold")} >
                        <FiMaximize2 size={"20px"} />
                        <FiMinimize2 size={"20px"} />
                        <AiOutlineClose size={"20px"} />
                    </div>
                </div>
                <h1>Window</h1>
            </div>
        </Draggable>
    )
}
export default Window