import { WiCloudy,WiDaySunny,WiDayThunderstorm,WiDayRain,WiDaySnow,WiDirectionDown,WiDirectionLeft,WiDirectionUp,WiDirectionRight,WiDirectionDownLeft,WiDirectionDownRight,WiDirectionUpLeft,WiDirectionUpRight } from "react-icons/wi";


export const wDirection = (windDegree) => {

    if(windDegree==0){
        return <WiDirectionUp/>
    }
    else if(windDegree>0 && windDegree<90){
        return <WiDirectionUpRight/>
    }
    else if(windDegree==90){
        return <WiDirectionRight/>
    }
    else if(windDegree>90 && windDegree<180){
        return <WiDirectionDownRight/>
    }
    else if(windDegree==180){
        return <WiDirectionDown/>
    }
    else if(windDegree>180 && windDegree<270){
        return <WiDirectionDownLeft/>
    }
    else if(windDegree==270){
        return <WiDirectionLeft/>
    }
    else{
        return <WiDirectionUpLeft/>
    }
}


export const wIcon = (weather) => {

    if( weather==="Clear" || weather.includes
    ("Sun")){
        return <WiDaySunny/>
    } 
    else if(weather==="Drizzle" || weather.includes("Rain")){
        return <WiDayRain/>
    }
    else if(weather==='Cloud' || weather.includes("Mist") || weather.includes("Haze") || weather.includes("Smoke")){
        return <WiCloudy/>
    }
    else if(weather.includes("Thunder")){
        return <WiDayThunderstorm/>
    }
    else{
        return <WiDaySnow/>
    }
}

export const wBg = (weather) => {

    if( weather==="Clear" || weather.includes
    ("Sun")){
        return "sunny"
    } 
    else if(weather==="Drizzle" || weather.includes("Rain")){
        return "rainy"
    }
    else if(weather==='Cloud' || weather.includes("Mist") || weather.includes("Haze") || weather.includes("Smoke")){
        return "cloudy"

    }
    else{
        return "snowy"
    }
}