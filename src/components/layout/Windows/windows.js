import React from "react"
import { useSelector } from "react-redux"
import WindowLayout from '../../Modal/windowLayout'

const WindowCount = () => {
    const data = useSelector(state => state.userwindow)
    console.log(data)
    return (
        <div>
            {data.windows.map(win => {
                return(
                    <WindowLayout data={win} >{win.name}</WindowLayout>
                )
            })}
        </div>
    )
}
export default WindowCount;
