import React, { useEffect } from "react"
import "./Modalall.css"
import { useBattery } from 'react-use';
import { Detector } from "react-detect-offline";

const Modalsetting = () => {
    const battery = useBattery();
    var { isSupported, level, charging, dischargingTime, chargingTime } = battery;
    useEffect(() => {
        var { isSupported, level, charging, dischargingTime, chargingTime } = battery;
    }, [battery])
    return (
        <div className="Modal-setting">
            <div className="Modal-setting-batteryinfo">
                <div className="Modal-setting-batteryinfo-left">
                    <p>Battery level</p>
                    <h1>{Math.round(level * 100)}%</h1>
                </div>
                <div className="Modal-setting-batteryinfo-right">
                    <p>{charging ? chargingTime : dischargingTime}</p>
                    <p>Remaining time</p>
                </div>
            </div>
            <hr />
            <div className="Modal-setting-wifiinfo">
                <p>Battery status</p>
                <p>{charging ? <p>Charging</p> : <p>Not Charging</p>}</p>
            </div>
            <hr />
            <div className="Modal-setting-wifiinfo">
                <p> Wifi</p>
                <Detector render={({ online }) => (
                    <div>
                        {online ? <p>Connected</p> : <p> Not Connected</p>}
                    </div>
                )}
                />
            </div>
        </div>
    )
}

export default Modalsetting;