import React from "react";
import "./Footer.css"
import { useSelector , useDispatch } from "react-redux"
import foldericon from "../../../assests/folder.png"
import terminalicon from "../../../assests/terminal.png"
import abouticon from "../../../assests/about.png"
import {windowaction} from "../../../store/index"
const Footer = () => {
    const disptach = useDispatch()
    const data = useSelector(state => state.userwindow.windows)
    const footerclickHandler = (value) => {
        disptach(windowaction.setcurrentWindow(value))
    }
    return (
        <div className="Footer">
            {data.map((win) => {
                return (
                    <div className="Footer-each" onClick={footerclickHandler.bind(null,win.id)} >
                        {win.name === "About" && <img src={abouticon} alt="" />}
                        {win.name === "Terminal" && <img src={terminalicon} alt="" />}
                        {(win.name !== "About" && win.name!=="Terminal") && <img src={foldericon} alt="" />}
                        <small>{win.name.replace("Stack","")}</small>
                    </div>
                )
            })}
        </div>
    )
}

export default Footer