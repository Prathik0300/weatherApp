import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/navbar.scss';
import AddCityIcon from './AddCityIcon';
import Logo from './Logo';
import CityWeather from './CityWeather';
import { AllCitySelector } from '../shared/selector';
import Loader from './Loader';

export default function Navbar() {
    const Navigate = useNavigate();
    const [degree,setDegree] = useState('Farenheit');
    const [view,setView] = useState('Grid');
    const [hamburgerStatus,setHamburgerStatus] = useState(false);
    const [navStyle,setNavStyle] = useState('');
    const cities = AllCitySelector();
    const [bgStyle,setBgStyle] = useState("");
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        hamburgerStatus?setNavStyle('toggleActive'):setNavStyle('navSlide');
    },[hamburgerStatus]);

    useEffect(() => {
        setNavStyle('');
        setIsLoading(false);
    },[]);

    if(isLoading===true){
        return <Loader/>
    }

    const updateHamburgerStatus = () => {
        setHamburgerStatus(prevStatus => !prevStatus);
    }

    const updateDegree = () => {
        degree==='Celsius'?setDegree('Farenheit'):setDegree('Celsius')
    }

    const updateView = () => {
        view==='Grid'?setView('Row'):setView('Grid')
    }

    const hamburgerIcon = 
    <div className='functionalDiv' onClick={() => updateHamburgerStatus()}>
        <div className={`hamburgerWrapper ${hamburgerStatus?"toggleActive":""}`}>
            <div className='hamburger'></div>
        </div>
    </div>;

    const navItems = 
    <div className='navItems'>
        <div onClick={updateDegree}>{degree}</div>
        <div onClick={updateView}>{view}</div>
    </div>

    const navbarPane = 
    <div className={`navbarWrapper ${navStyle}`}>
        <div className={`navbarPane`}>
            <div style={{marginTop:'3rem'}}>
                {navItems}
            </div>
            <div className='copyrights'>
                <span onClick={() => window.open("https://prathikpugazhenthi.com/","__blank")}>&#169; Prathik Pugazhenthi</span>
            </div>
        </div>
    </div>

    const cityDetails = cities.map((item,idx) => {
        let render;
        if(view==='Grid'){
            render =
            <div className='container-fluid indCityDetail' key={idx}>
            <div className='row'>
                <div className='mb-2'>
                    <CityWeather city={item.city} country={item.country} degree={degree} temp={item.temp} view={view} weather={item.weather} lat={item.lat} lng={item.lng}/>
                </div>
            </div>
            <hr/>
        </div>
        }
        else{
            render=
                <CityWeather key={idx} city={item.city} country={item.country} degree={degree} temp={item.temp} view={view} weather={item.weather} lat={item.lat} lng={item.lng}/>
        }

        return(
            <>
                {render}    
            </>   
        );
    })

    return (
        <div className='wrapper'>
            <div className={`${bgStyle}`}>
            {hamburgerIcon}
            {navbarPane}
            <Logo/>
            <AddCityIcon/>
            </div>
            <div className='container-fluid allCitiesDiv flexCityDetails'>
                {cityDetails}
            </div>
        </div>
    )
}
