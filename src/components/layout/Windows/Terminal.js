import { useState } from "react"
import { useDispatch , useSelector} from "react-redux"
import { terminalactions } from "../../../store"
import "./window.css"
const TerminalWindow = () => {
    const [userInput, setuserInput] = useState("")
    const dispatch = useDispatch()
    const data = useSelector(state => state.terminal)
    const inputHandler = e => {
        setuserInput(e.target.value)
    }
    const inputenterHandler = e => {
        if (e.key === "Enter") {
            dispatch(terminalactions.commandexecutes(userInput.replace("/","")))
            setuserInput("")
        }
    }
    return (
        <div className="terminal-window" style={{padding:"10px 10px",}}>
            <div className="terminal-window-results">
                {data.chats.map((command) => {
                    return(
                        <div className="terminal-window-results-data"key={Math.random()}>
                            <small>{command.username}@Nav's portfolio:~$ {command.command}</small> <br />
                            <small>{command.result}</small> <br />
                            <br />
                        </div>
                    )
                })}
            </div>
            <small> {localStorage.getItem("username")}@Nav's portfolio:~$  <input type="text" onChange={inputHandler} autoFocus onKeyDown={inputenterHandler} value={userInput}/></small>
            <br /><br />
        </div>
    )
}
export default TerminalWindow
