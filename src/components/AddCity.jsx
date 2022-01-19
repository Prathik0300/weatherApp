import React, { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/addCity.scss";
import { Typography } from 'antd';
import { BsArrowLeftShort } from "react-icons/bs";
import { Link,useNavigate } from 'react-router-dom';
import { cities } from '../cities';
import { Actions } from '../shared/actions';
import { useDispatch } from 'react-redux';

const { Title } = Typography;

export default function AddCity() {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [query,setQuery] = useState("");
    const [searchCity,setSearchCity] = useState("");
    const [city,setCity] = useState({
        "city":null,
        "country":null,
        "lat":null,
        "lng":null,
        "temp":null,
        "weather":null
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchCity(query)
        },500)
    
        return (() => clearTimeout(timeout));
    },[query]);

    useEffect(() => {
        if(city.city!==null){
            setQuery(city.city);
            setSearchCity("");
        }   
    },[city.city])

    useEffect(() => {
        
        if(city.city!=="" && city.country!==""  && city.lat!==null  && city.lng!==null && city.temp!==null && city.weather!==null){

            dispatch(Actions.storeCityDetails({
                city:city.city,
                country:city.country,
                lat:city.lat,
                lng:city.lng,
                temp:city.temp,
                weather:city.weather
            }));
            Navigate('/weatherApp');
        }
    },[city]);

    const inputCity = 
    <div className='container-fluid mb-5'>
        <div className='row col-12'>
            <div className='col-12 searchBar'>
                <input type="text" placeholder='Enter the city name...' value={query} onChange={e => setQuery(e.target.value)}/>
            </div>
        </div>
    </div>

    useEffect(async () => {
        if(city.lat!==null && city.lng!==null){
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lng}&units=metric&appid=c6b019a52568767562b5532a7f55755e`,{
                method:'GET',
            })
        const data = await res.json();
        setCity(prevState => ({
            ...prevState,
            "temp":data.current.temp,
            "weather":data.current.weather[0].main
        }));
        }
        
        return (() => {
            setCity(prevState => ({
                ...prevState,
                "temp":null,
                "weather":null
            }));
        })
    }, [city.lat,city.lng])

    const updateCity = (item) => {
        setCity(prevState => ({
            ...prevState,
            "city":item.city,
            "country":item.country,
            "lat":item.lat,
            "lng":item.lng,
        }))
    }

    const cityResults = cities.filter((item) =>{
        if(searchCity!==null && searchCity!==""){
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
