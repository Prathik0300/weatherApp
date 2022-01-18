import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/navbar.scss';
import AddCityIcon from './AddCityIcon';
import Logo from './Logo';
import CityWeather from './CityWeather';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const Navigate = useNavigate();
    const [degree,setDegree] = useState('Celsius');
    const [view,setView] = useState('Grid');
    const [hamburgerStatus,setHamburgerStatus] = useState(false);
    const [navStyle,setNavStyle] = useState('');
    const [cities,setCities] = useState(useSelector((state) => state.city));
    const [scrollStyle,setScrollStyle] = useState(false);
    const [bgStyle,setBgStyle] = useState("");
    window.onscroll = () => {scrollEvent();}

    const scrollEvent = () => {
        if(document.body.scrollTop>=50 || document.documentElement.scrollTop>='50px'){
            setScrollStyle(true);
        }
        else{
            setScrollStyle(false);
        }
    }

    useEffect(() => {
        if(scrollStyle){
            setBgStyle("navbarDiv")
        }
        else{
            setBgStyle("")
        }
        

    },[scrollStyle]);

    useEffect(() => {
        hamburgerStatus?setNavStyle('toggleActive'):setNavStyle('navSlide');
    },[hamburgerStatus]);

    useEffect(() => {
        setNavStyle('');
    },[]);

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

    const settingsLink = () => {
        updateHamburgerStatus();
        Navigate("Settings");
    }

    const navItems = 
    <div className='navItems'>
        <div onClick={settingsLink}>Settings</div>
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
            <div className='container-fluid' key={idx}>
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
        <div>
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
