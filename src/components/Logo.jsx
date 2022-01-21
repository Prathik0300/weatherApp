import React, { useEffect, useState } from 'react'
import '../css/logo.scss';
import { WiDayStormShowers } from "react-icons/wi";
import { useNavigate } from 'react-router';

export default function Logo() {

    const Navigate = useNavigate();
    const [screenWidth,setScreenWidth] = useState(null);
    const [nameStyle,setNameStyle] = useState("");

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    },[]);

    useEffect(() => {
        window.addEventListener('resize',() => setScreenWidth(window.innerWidth));
        screenWidth>450?setNameStyle("logoName"):setNameStyle("hideLogoName");

       return(() => {
           window.removeEventListener('resize',() => setScreenWidth(window.innerWidth));
       }) ;
    });

    const logo = 
    <div className='logoDiv' onClick={() => Navigate("/")}>
        <div className={`logoIcon ${screenWidth>450?"":"alignLogoIcon"}`}>
            <WiDayStormShowers/>
        </div>
        <div className={`${nameStyle}`}>Insta Weather</div>
    </div>

    return (
        <div>
            {logo}
        </div>
    )
}
