import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/cityWeather.scss';
import { WiCloudy,WiDaySunny,WiDayThunderstorm,WiDayRain,WiDaySnow } from "react-icons/wi";
import { useNavigate } from 'react-router-dom';

export default function CityWeather({city,country,degree,temp,view,weather,lat,lng}) {

    const Navigate = useNavigate();
    let temperature = degree==='Farenheit'?temp:(temp*(9/5))+32;
    temperature = Math.round(temperature);
    const unit = degree==='Celsius'?<span>&#8457;</span>:<span>&#8451;</span>
    let render;

    const redirect = () => {
        Navigate(`/weatherApp/${lat}/${lng}`);
    }

    const weatherIcon = weather==="Clear" || weather.includes("Sun")?<WiDaySunny/>:weather==="Drizzle" || weather.includes("Rain")?<WiDayRain/>:weather.includes("Cloud")|| weather.includes("Mist") || weather.includes("Haze")?<WiCloudy/>:weather.includes("Thunder")?<WiDayThunderstorm/>:<WiDaySnow/>;

    if(view==='Grid'){
        render = 
        <div className='container-fluid rowViewContainer'>
            <div className='rowViewDiv pl-4' onClick={() => {redirect()}}>
                <div>{city} ,</div>
                <div>{' '}{country}</div>
            </div>
            <div className='temperatureDiv'>
                <span className='weatherIcon'>{weatherIcon}</span>{temperature} {unit}
            </div>
        </div>
    }
    else{
        render = 
        <div className='cardWrapper' onClick={() => redirect()}>
            <div className='cardDiv' >
                <div className='cardTitle'>
                    {temperature} {unit} <span className='weatherIcon'>{weatherIcon}</span>
                </div>
                <div className='cardSubtitle'>
                    {city}
                </div>
                <div className='cardText'>
                    {country}
                </div>
            </div>
        </div>
    }
    
    return (
        <div>
            {render}
        </div>
    )
}
