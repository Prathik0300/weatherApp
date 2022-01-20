import React from 'react'
import { wForecastIcons } from '../shared/weather';
import "../css/hourlyForecast.scss"

export default function HourlyForecast({temperature,weather}) {

    const weatherIcon = wForecastIcons(weather);
// className={
//     className="sunny"
// className="rainy"
// className="cloudy"
// className="fog"
// className="thunder"
// className="snowy"
// }
    const render = 
    <div className='cardWrapperHourly my-5'>
        <div className='cardDivHourly'>
            <div className='cardIconHourly'>{weatherIcon}</div>
            <div className='cardTempHourly'>
                {Math.round(temperature)}<span>&#8451;</span>
            </div>
        </div>
    </div>
    


    return (
        <div>
            {render}
        </div>
    )
}
