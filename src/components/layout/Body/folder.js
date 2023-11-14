import React, { useState } from "react"
import foldericon from "../../../assests/folder.png"
import terminalicon from "../../../assests/terminal.png"
import abouticon from "../../../assests/about.png"
import "./Body.css"
import {useDispatch ,useSelector } from "react-redux"
import {windowaction} from "../../../store/index"


const Folder = (props) => {
    const [counter,setcounter] = useState(0)
    const disptach = useDispatch() 
    const folderHandler = () => {
        setcounter(counter + 1)
        disptach(windowaction.addWindow({name:props.data.name,max:false}))
    }
    return (
        <div className="folder-whole-icon" onClick={folderHandler} >
            {props.data.icon === "abouticon" && <img src={abouticon} alt="" />}
            {props.data.icon === "foldericon" && <img src={foldericon} alt="" />}
            {props.data.icon === "terminalicon" && <img src={terminalicon} alt="" />}
            <p>{props.data.name}</p>
        </div>
    )
}
export default Folder;