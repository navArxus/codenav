import React, { useState } from 'react'
import "./Header.css"
import { Detector } from "react-detect-offline";
import { BsBatteryCharging, BsBatteryFull, BsWifi, BsWifiOff, BsSoundwave } from "react-icons/bs";
import { PiNotification, PiCalendarBlankLight } from "react-icons/pi"
import Modaldate from './Modaldate';
import Modalnotification from './Modalnotification';
import Modalsetting from './Modalsetting';
import { useBattery } from 'react-use';

const Header = () => {
    const battery = useBattery();
    const { isSupported, level, charging, dischargingTime, chargingTime } = battery;

    const [isnotification, setnotification] = useState(false)
    const [isdate, setdate] = useState(false)
    const [issetting, setsetting] = useState(false)

    const notificationHandler = () => {
        setnotification(!isnotification);
        setdate(false)
        setsetting(false)
    }
    const dateHandler = () => {
        setnotification(false);
        setdate(!isdate)
        setsetting(false)
    }
    const settingHandler = () => {
        setnotification(false);
        setdate(false)
        setsetting(!issetting)
    }

    return (
        <React.Fragment>
            <div className="Modal-display">{isnotification && <Modalnotification />}</div>
            <div className="Modal-display">{isdate && <Modaldate />} </div>
            <div className="Modal-display">{issetting && <Modalsetting />}</div>
            <div className="Header">
                <div className="Header-responsive">
                    <div className="Header-notification-responsive" onClick={notificationHandler} > <PiCalendarBlankLight /> </div>
                    <div className="Header-date-responsive" onClick={dateHandler} ><PiNotification /></div>
                </div>
                <div className="Header-notification" onClick={notificationHandler} ><p>Notification(1)</p></div>
                <div className="Header-date" onClick={dateHandler} ><p>October 15 2023</p></div>
                <div className="Header-setting" onClick={settingHandler} >
                    <div className="Header-setting-battery">
                        {charging ? <BsBatteryCharging size={'19px'} /> : <BsBatteryFull size={'19px'} />}
                    </div>
                    <div className="Header-setting-wifi">
                        <Detector
                            render={({ online }) => (
                                <div>
                                    {online ? <BsWifi size={'19px'} /> : <BsWifiOff size={'19px'} />}
                                </div>
                            )}
                        />
                    </div>
                    <div className="Header-setting-sound">
                        <BsSoundwave size={'19px'} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;