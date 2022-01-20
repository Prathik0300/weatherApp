import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/detailedReport.scss';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import { CitySelector } from '../shared/selector';
import { wDirection,wIcon,wBg } from '../shared/weather';
import Loader from './Loader';

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
    const [isLoading,setIsLoading] = useState(true);

    const { lat,lng } = useParams();
    let data;
    const [weatherData,setWeatherData] = useState({
        data:null
    })
    const loc = CitySelector(lat,lng);
    useEffect(async () => { 
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=c6b019a52568767562b5532a7f55755e`,{
            method:'GET',
        })
        data = await res.json();
        setWeatherData(prevState => ({
            data:data
        }));

        const time = setTimeout(() => {
            setIsLoading(false);
        },3000);
        
        return(() => clearTimeout(time));
    },[]);


    // const updateLoading = () => {
    //     console.log("onload");
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     },5000);
    // }



    if(isLoading===true || weatherData.data===null){
        console.log("return : ",isLoading)
        return <Loader/>
    }

   
    const windDirection = wDirection(weatherData.data.current.wind_deg);
    const weatherIcon = wIcon(weatherData.data.current.weather[0].main);
    const weatherBg = wBg(weatherData.data.current.weather[0].main);

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
    
    const currentExtraData=
    <div className='currentExtraDataWrapper'>
        <div className='currentExtraDataDiv'>
            <div className='currentExtraDataDivWrapper'>
                <div className='currentExtraDataHeading'>Real feel</div>
                <div>{weatherData.data.current.feels_like}{' '}<span>&#8451;</span></div>
            </div>
            <div className='currentExtraDataDivWrapper'>
                <div className='currentExtraDataHeading'>Humidity</div>
                <div>{weatherData.data.current.humidity}%</div>
            </div>
        </div>
        <div className='currentExtraDataDiv'>
            <div className='currentExtraDataDivWrapper'>
                <div className='currentExtraDataHeading'>Wind speed</div>
                <div>{windDirection}<span>{weatherData.data.current.humidity}Km/h</span></div>
            </div>
            <div className='currentExtraDataDivWrapper'>
                <div className='currentExtraDataHeading'>Pressure</div>
                <div>{weatherData.data.current.pressure} mbar</div>
            </div>
        </div>
        <div className='currentExtraDataDiv'>
            <div className='currentExtraDataDivWrapper'>
                <div className='currentExtraDataHeading'>Dew point</div>
                <div>{weatherData.data.current.dew_point}{' '}<span>&#8451;</span> Td</div>
            </div>
            <div className='currentExtraDataDivWrapper'>
                <div className='currentExtraDataHeading'>UV index</div>
                <div>{weatherData.data.current.uvi}</div>
            </div>
        </div>
    </div>


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
    <div className={`${weatherBg} dataWrapper`} >
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
        </div>
    </div>
    {currentExtraData}
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
        <div /*onLoad={updateLoading}*/>
            {wReport}
        </div>
    )
}
