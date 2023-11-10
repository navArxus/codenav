import Modal from "../Modal/modal"
import "./form.css"
import React ,{useRef, useState} from 'react'

const Form = (props) => {
    const [iserror,setiserror] = useState(false)
    const usernameRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault()
        
        if (usernameRef.current.value.length >= 3) {
            localStorage.setItem("username",usernameRef.current.value)
            setiserror(false)
            props.togglehandler()
        }
        else {
            setiserror(true)
        }
    }

    return (
        <Modal>
            <form onSubmit={submitHandler}>
                <h2>Set username</h2><br />
                <input type="text" autoFocus required placeholder="Nickname here..." ref={usernameRef}/> <br />
                {iserror && <small style={{color:"red"}}> *Username should contains atleast 3 chracter</small>}{iserror && <br />}
                <small>Username is type of nickname for this website </small> <br />
                <button type="submit" >Confirm</button> <br />
            </form>
        </Modal>
    )
}
export default Form 