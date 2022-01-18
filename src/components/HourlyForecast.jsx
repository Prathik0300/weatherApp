import React from 'react'
import { WiCloudy,WiDaySunny,WiDayThunderstorm,WiDayRain,WiDaySnow } from "react-icons/wi";
import "../css/hourlyForecast.scss"

export default function HourlyForecast({temperature,weather}) {

    const weatherIcon = weather==="Clear" || weather.includes("Sun")?<WiDaySunny/>:weather==="Drizzle" || weather.includes("Rain")?<WiDayRain/>:weather.includes("Cloud")|| weather.includes("Mist") || weather.includes("Haze")?<WiCloudy/>:weather.includes("Thunder")?<WiDayThunderstorm/>:<WiDaySnow/>;

    const render = 
    <div className='cardWrapper2 my-5'>
        <div className='cardDiv2'>
            <div className='cardIcon2'>{weatherIcon}</div>
            <div className='cardTemp2'>{Math.round(temperature)}<span>&#8451;</span></div>
        </div>
    </div>
    


    return (
        <div>
            {render}
        </div>
    )
}
