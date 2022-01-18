import React from 'react'
import { WiCloudy,WiDaySunny,WiDayThunderstorm,WiDayRain,WiDaySnow } from "react-icons/wi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/dailyForecast.scss";

export default function DailyForecast({minTemp,maxTemp,weather}) {

    const weatherIcon = weather==="Clear" || weather.includes("Sun")?<WiDaySunny/>:weather==="Drizzle" || weather.includes("Rain")?<WiDayRain/>:weather.includes("Cloud")|| weather.includes("Mist") || weather.includes("Haze")?<WiCloudy/>:weather.includes("Thunder")?<WiDayThunderstorm/>:<WiDaySnow/>;

    const render=
    <div className='cardWrapperDaily my-5'>
        <div className='cardDivDaily'>
            <div className='cardIconDaily'>{weatherIcon}</div>
            <div className='cardTempDaily'>
                <div className='cardTempExpand'>
                    <div>Min.</div>
                    <div>{Math.round(minTemp)} <span>&#8451;</span></div>
                </div>
                <div className='cardTempExpand'>
                    <div>Max.</div>
                    <div>{Math.round(maxTemp)} <span>&#8451;</span></div>
                </div>
            </div>
        </div>
    </div>
    
    return (
        <div>
            {render}
        </div>
    )
}
