import React, { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/addCity.scss";
import { Typography } from 'antd';
import { BsArrowLeftShort } from "react-icons/bs";
import { Link,useNavigate } from 'react-router-dom';
import { cities } from '../cities';
import { useDispatch } from 'react-redux';
import { storeCityDetails } from '../redux/citySlice';

const { Title } = Typography;

export default function AddCity() {

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const [query,setQuery] = useState("");
    const [searchCity,setSearchCity] = useState("");
    const [selectedCity,setSelectedCity] = useState("");
    const [selectedCountry,setSelectedCountry] = useState("");
    const [lat,setLat] = useState(null);
    const [lng,setLng] = useState(null);
    const [temperature,setTemperature] = useState(null);
    const [weather,setWeather] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchCity(query)
        },1000)
    
        return (() => clearTimeout(timeout));
    },[query]);

    useEffect(() => {
        setQuery(selectedCity);
        setSearchCity("");
    },[selectedCity])

    useEffect(() => {
        
        if(selectedCity!=="" && selectedCountry!==""  && lat!==null  && lng!==null && temperature!==null && weather!==""){
            dispatch(storeCityDetails({
                city:selectedCity,
                country:selectedCountry,
                lat:lat,
                lng:lng,
                temp:temperature,
                weather:weather
            }));

            const timeout = setTimeout(() => {
                Navigate('/weatherApp');
            },3000);

            return (() => clearTimeout(timeout));
        }
    },[selectedCity,selectedCountry,lat,lng,temperature,weather]);

    const inputCity = 
    <div className='container-fluid mb-5'>
        <div className='row col-12'>
            <div className='col-12 searchBar'>
                <input type="text" placeholder='Enter the city name...' value={query} onChange={e => setQuery(e.target.value)}/>
            </div>
        </div>
    </div>

    useEffect(async () => {
        if(lat!==null && lng!==null){
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=c6b019a52568767562b5532a7f55755e`,{
                method:'GET',
            })
        const data = await res.json();
        setTemperature(data.current.temp);
        setWeather(data.current.weather[0].main);
        }
        
        return (() => {
            setTemperature(null);
            setWeather("");
        })
    }, [lat,lng])

    const updateCity = async (item) => {
        setSelectedCity(item.city)
        setSelectedCountry(item.country)
        setLat(item.lat);
        setLng(item.lng);
    }

    const cityResults = cities.filter((item) =>{
        if(searchCity!==""){
            if(item.city.toLowerCase().includes(searchCity.trim().toLowerCase()) || item.city.toLowerCase()===searchCity.trim().toLowerCase()){
                return item;
            }
        }}).map((item,idx) =>{
        return(
            <div key={idx} className="" onClick={() => updateCity(item)}>
                <div className='resultCityDiv py-3 mt-1'>
                    {item.city}{', '}{item.country}
                </div>
                <hr/>
            </div>
        );
    })   

    return ( 
        <div className='container-fluid addCityDiv'>
            <div className='container-fluid mt-'>
                <div className='headingAddCity mb-5'>
                    <Link to={'/weatherApp'}>
                        <div className='backArrow'>
                            <BsArrowLeftShort/>
                        </div>
                    </Link>
                    <div>
                        <Title className='heading'>
                            Search City
                        </Title>
                    </div>
                </div>
                {inputCity}
                {cityResults}
            </div> 
        </div>
    )
}
