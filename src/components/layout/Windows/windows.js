import React from "react"
import { useSelector } from "react-redux"
import WindowLayout from '../../Modal/windowLayout'

const WindowCount = () => {
    const data = useSelector(state => state.userwindow)
    return (
        <div>
            {data.windows.map(win => {
                return (
                    <div key={win.id}>
                        <WindowLayout data={win} >{win.name}</WindowLayout>
                    </div>
                )
            })}
        </div>
    )
}
export default WindowCount;
