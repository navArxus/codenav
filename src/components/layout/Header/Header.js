import React, { useState } from 'react'
import "./Header.css"
import { Detector } from "react-detect-offline";
import { BsBatteryCharging, BsBatteryFull, BsWifi, BsWifiOff, BsSoundwave } from "react-icons/bs";

const Header = () => {
    const [isCharging, setisCharging] = useState(false)
    const battery = async () => {
        await navigator.getBattery()
            .then(function (battery) {
                let batteryLevel = battery.charging;
                setisCharging(batteryLevel);
                console.log(batteryLevel)
            })
            .catch(function (e) {
            });
    }
    setInterval(() => {
        battery();
    }, 5000);

    return (
        <React.Fragment>
            <div className="Modal-notification">  </div>
            <div className="Modal-date"></div>
            <div className="Modal-setting"></div>
            <div className="Header">
                <div className="Header-notification"><p>Notification</p></div>
                <div className="Header-date"><p>October 15 2023</p></div>
                <div className="Header-setting">
                    <div className="Header-setting-battery">
                        {isCharging ? <BsBatteryCharging size={'19px'} /> : <BsBatteryFull size={'19px'} />}
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