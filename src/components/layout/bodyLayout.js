import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body"

import "./bodylayout.css"
const BodyLayout = () => {
    return (
        <div className="bodylayout">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
export default BodyLayout;