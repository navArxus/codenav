import React from "react"
import ReactDOM from "react-dom"
import "./modal.css"


const Overlay = (props) => {
    return (
        <div className="overlay">
            <div className="modal">{props.children}</div>
        </div>
    )
}
const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById("overlays"))}
        </React.Fragment>
    )
}

export default Modal;