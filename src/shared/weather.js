import { WiCloudy,WiDaySunny,WiDayThunderstorm,WiDayRain,WiDaySnow,WiDirectionDown,WiDirectionLeft,WiDirectionUp,WiDirectionRight,WiDirectionDownLeft,WiDirectionDownRight,WiDirectionUpLeft,WiDirectionUpRight } from "react-icons/wi";


export const wDirection = (windDegree) => {

    if(windDegree==0){
        return <WiDirectionUp className="wDirection"/>
    }
    else if(windDegree>0 && windDegree<90){
        return <WiDirectionUpRight className="wDirection"/>
    }
    else if(windDegree==90){
        return <WiDirectionRight className="wDirection"/>
    }
    else if(windDegree>90 && windDegree<180){
        return <WiDirectionDownRight className="wDirection"/>
    }
    else if(windDegree==180){
        return <WiDirectionDown className="wDirection"/>
    }
    else if(windDegree>180 && windDegree<270){
        return <WiDirectionDownLeft className="wDirection"/>
    }
    else if(windDegree==270){
        return <WiDirectionLeft className="wDirection"/>
    }
    else{
        return <WiDirectionUpLeft className="wDirection"/>
    }
}


export const wIcon = (weather) => {

    if( weather.includes('Clear') || weather.includes
    ("Sun")){
        return <WiDaySunny/>
    } 
    else if(weather.includes('Drizzle') || weather.includes("Rain")){
        return <WiDayRain/>
    }
    else if(weather.includes('Cloud') || weather.includes("Mist") || weather.includes("Haze") || weather.includes("Smoke") || weather.includes("Fog")){
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

    if(weather.includes('Clear') || weather.includes
    ("Sun")){
        return "sunny"
    } 
    else if(weather.includes('Drizzle') || weather.includes("Rain")){
        return "rainy"
    }
    else if(weather.includes('Cloud') || weather.includes("Haze") || weather.includes("Smoke")){
        return "cloudy"

    }
    else if(weather.includes("Mist") || weather.includes("Fog")){
        return "fog"
    }
    else if(weather.includes("Cold") || weather.includes("Winter")){
        return "winter"
    }
    else{
        return "snowy"
    }
}