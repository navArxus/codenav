import React from 'react'
import "./Body.css"
import Folder from './folder'
import WindowCount from '../Windows/windows'
const folder = [
    {
        id: 1,
        name: "About",
        icon: "abouticon",
    },
    {
        id: 2,
        name: "Contact",
        icon: "foldericon",
    },
    {
        id: 3,
        name: "Tech Stack",
        icon: "foldericon",
    },
    {
        id: 4,
        name: "Project",
        icon: "foldericon",
    },
    {
        id: 5,
        name: "Terminal",
        icon: "terminalicon",
    }
]

const Body = () => {
    return (
        <div className='Body'>
            <WindowCount />
            {folder.map((folderDetails) => {
                return (
                    <Folder data={folderDetails} key={folderDetails.id} />
                )
            })}
        </div>
    )
}

export default Body 