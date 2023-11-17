import React from "react";
import "./window.css"
import Draggable from "react-draggable"
import { AiOutlineClose } from "react-icons/ai"
import { FiMinimize2, FiMaximize2 } from "react-icons/fi"
import foldericon from "../../assests/folder.png"
import terminalicon from "../../assests/terminal.png"
import abouticon from "../../assests/about.png"
import { useDispatch ,useSelector } from "react-redux"
import { windowaction } from "../../store/index"
import AboutWindow from "../layout/Windows/About";

const WindowLayout = props => {

    const nodeRef = React.useRef(null);
    console.log(props.data)
    
    const data = useSelector(state => state.userwindow)
    const dispatch = useDispatch()
    const closeWindowHanlder = () => {
        dispatch(windowaction.closeWindow(props.data))
    }
    const maxminHandler = () => {
        if (props.data.max === false) {
            dispatch(windowaction.maxWindow(props.data))
        }
        else {
            dispatch(windowaction.minWindow(props.data))
        }
    }
    const setcurrentWindowHandler = () => {
        dispatch(windowaction.setcurrentWindow(props.data.id))
    }
    return (
        <Draggable handle=".handle" nodeRef={nodeRef} disabled={props.data.max ? true : false} position={props.data.max ? { x: 0, y: 0 } : null}>
            <div className={props.data.max ? "window maxmize" : (data.currentWindow === props.data.id ? "window currentwindow":"window ")} ref={nodeRef} >
                <div className="handle" onClick={setcurrentWindowHandler}>
                    <div className="handle-left">
                        {props.data.name === "About" && <img src={abouticon} alt="" />}
                        {props.data.name !== "About" && props.data.name !== "Terminal" && <img src={foldericon} alt="" />}
                        {props.data.name === "Terminal" && <img src={terminalicon} alt="" />}
                        {props.data.name}
                    </div>
                    <div className="handle-right" onClick={maxminHandler}>
                        {props.data.max ? <FiMinimize2 size={"20px"} /> : <FiMaximize2 size={"20px"} />}


                        <div className="handle-right-close">
                            <AiOutlineClose size={"20px"} onClick={closeWindowHanlder} />
                        </div>
                    </div>
                </div>
                <div>
                    {props.data.name === "About" && <AboutWindow />}
                    {props.data.name === "Terminal" && <p>Terminal</p>}
                    {(props.data.name !== "Terminal" && props.data.name !== "About") && props.data.name}
                </div>
            </div>

        </Draggable>
    )
}
export default WindowLayout