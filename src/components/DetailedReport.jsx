import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { WiCloudy,WiDaySunny,WiDayThunderstorm,WiDayRain,WiDaySnow,WiRaindrop,WiBarometer,WiHumidity,WiDirectionDown,WiDirectionLeft,WiDirectionUp,WiDirectionRight } from "react-icons/wi";
import '../css/detailedReport.scss';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

export default function DetailedReport() {

    const dayOfTheWeek = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }

    const { lat,lng } = useParams();
    let data;
    const [weatherData,setWeatherData] = useState({
        data:null
    })

    const [loc,setLoc] = useState(useSelector((state) => state.city.filter((item) => (item.lat == lat && item.lng==lng)?item:null)));

    useEffect(async () => { 
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=c6b019a52568767562b5532a7f55755e`,{
            method:'GET',
        })
        data = await res.json();
        setWeatherData(prevState => ({
            data:data
        }));
    },[]);

    useEffect(() => {
        console.log(weatherData.data)
    },[weatherData])

    if(weatherData.data===null){
        return "Loading..."
    }

    const windDirection = weatherData.data.current.wind_deg>=0 && weatherData.data.current.wind_deg<=90?<WiDirectionUp/>:weatherData.data.current.wind_deg>90 && weatherData.data.current.wind_deg<=180?<WiDirectionRight/>:weatherData.data.current.wind_deg>180 && weatherData.data.current.wind_deg<=270?<WiDirectionDown/>:<WiDirectionLeft/>

    console.log("loc : \n",weatherData,weatherData.data.current.temp);

    const weatherIcon = weatherData.data.current.weather[0].main==="Clear" || weatherData.data.current.weather[0].main.includes("Sun")?<WiDaySunny/>:
    weatherData.data.current.weather[0].main==="Drizzle" || weatherData.data.current.weather[0].main.includes("Rain")?<WiDayRain/>:
    weatherData.data.current.weather[0].main.includes("Cloud") || weatherData.data.current.weather[0].main.includes("Mist") || weatherData.data.current.weather[0].main.includes("Haze")?<WiCloudy/>:
    weatherData.data.current.weather[0].main.includes("Thunder")?<WiDayThunderstorm/>:<WiDaySnow/>;

    const weatherBg = weatherData.data.current.weather[0].main==="Clear" || weatherData.data.current.weather[0].main.includes("Sun")?"sunny":
    weatherData.data.current.weather[0].main==="Drizzle" || weatherData.data.current.weather[0].main.includes("Rain")?"rainy":
    weatherData.data.current.weather[0].main.includes("Cloud") || weatherData.data.current.weather[0].main.includes("Mist") ||weatherData.data.current.weather[0].main.includes("Haze")?"cloudy":"snowy";

    const hourly = weatherData.data.hourly.map((item,idx) =>{
        const hour = new Date(Date.now()).getHours();
        return(
            <>
                {
                    idx>=hour? <div key={idx} className='individualDiv'>
                    <div className={`individualCard`}>
                        <HourlyForecast temperature={item.temp} weather={item.weather[0].main}/>
                    </div>
                    <div className='individualTime'>
                        {(idx)%24}:00 <span>{(idx)%24>=12? "PM" : "AM"}</span>
                    </div>
                </div>:null
                }
            </>
        )
    })
    

    const daily = weatherData.data.daily.map((item,idx) => {
        const today = new Date(Date.now());
        const date = new Date(Date.now());
        date.setDate(date.getDate() + idx);

        return(
            <>
                <div key={idx} className='individualDiv'>
                    <div className={`individualCard`}>
                        <DailyForecast minTemp={item.temp.min} maxTemp={item.temp.max} weather={item.weather[0].main}/>
                    </div>
                    <div className='individualTime'>
                        {today.getDate()===date.getDate()?"Today":dayOfTheWeek[date.getDay()]}
                    </div>
                </div>
            </>
        )
    })

    const wReport = 
    <div className={`${weatherBg} dataWrapper`}>
    <div className={`container-fluid currentData`}>
        <div className='currentWeatherWrapper'>
            <div className='currentWeather'>
                <div className='currentTemp'>
                    {Math.round(weatherData.data.current.temp)} <span>&#8451;</span>{' '} 
                    <span className='weatherIcon'>{weatherIcon}</span>
                </div>
                <div className='currentCondition'>{loc[0].weather}</div>
                <div className='currentLoc'>{loc[0].city}, {loc[0].country}</div>
            </div>
            <div className='currentExtraData'>
            <div>
                <WiRaindrop/><span>{weatherData.data.current.dew_point}</span>
            </div>
            <div>
                <WiBarometer/><span>{weatherData.data.current.pressure} mbar</span>
            </div>
            <div>
                <WiHumidity/><span>{weatherData.data.current.humidity} %</span>
            </div>
            <div>
                {windDirection}<span>{weatherData.data.current.wind_speed} km/h</span>
            </div>
        </div>
        </div>
    </div>
    <div className='hourlyHeading' style={{color:'#fff',zIndex:'40'}}><b>Hourly Forecast</b></div>
    <div className='forecastReport'>
        {hourly}
    </div>
    <div className='dailyHeading' style={{color:'#fff',zIndex:'40'}}><b>Daily Forecast</b></div>
    <div className='forecastReport mb-4'>
        {daily}
    </div>
    </div>

    return (
        <div>
            {wReport}
        </div>
    )
}
