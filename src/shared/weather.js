import { WiCloudy,WiDaySunny,WiDayThunderstorm,WiDayRain,WiDaySnow,WiDirectionDown,WiDirectionLeft,WiDirectionUp,WiDirectionRight,WiDirectionDownLeft,WiDirectionDownRight,WiDirectionUpLeft,WiDirectionUpRight,WiFog,WiNightClear,WiNightFog,WiNightAltRain,WiNightAltThunderstorm,WiNightCloudy,WiNightSnow } from "react-icons/wi";

const dt = new Date(Date.now()).getHours();

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
        if(dt>=6 && dt<=18){
            return <WiDaySunny/>
        }
        else{
            return <WiNightClear/>
        }
        
    } 
    else if(weather.includes('Drizzle') || weather.includes("Rain")){
        if(dt>=6 && dt<=18){
            return <WiDayRain/>
        }
        else{
            return <WiNightAltRain/>
        }
        
    }
    else if(weather.includes('Cloud') || weather.includes("Haze") || weather.includes("Smoke")){
        if(dt>=6 && dt<=18){
            return <WiCloudy/>
        }
        else{
            return <WiNightCloudy/>
        }     
    }
    else if(weather.includes("Fog") || weather.includes("Mist")){
        if(dt>=6 && dt<=18){
            return <WiFog/>
        }
        else{
            return <WiNightFog/>
        }
        
    }
    else if(weather.includes("Thunder")){
        if(dt>=6 && dt<=18){
            return <WiDayThunderstorm/>
        }
        else{
            return <WiNightAltThunderstorm/>
        }
        
    }
    else{
        if(dt>=6 && dt<=18){
            return <WiDaySnow/>
        }
        else{
            return <WiNightSnow/>
        } 
    }
}

export const wBg = (weather) => {

    if(weather.includes('Clear') || weather.includes
    ("Sun")){
        if(dt>=6 && dt<=16){
            return "sunny"
        }
        else if(dt>=17 && dt<=18){
            return "evening"
        }
        else{
            return "nightClear"
        }  
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


export const wForecastIcons = (weather,hour=dt) => {
    
    if( weather.includes('Clear') || weather.includes
    ("Sun")){
        if((hour)%24>=6 && (hour)%24<=18){
            return <WiDaySunny className="sunnyF"/>
        }
        else{
            return <WiNightClear className="sunnyF"/>
        }
        
    } 
    else if(weather.includes('Drizzle') || weather.includes("Rain")){
        if((hour)%24>=6 && (hour)%24<=18){
            return <WiDayRain className="rainyF"/>
        }
        else{
            return <WiNightAltRain className="rainyF"/>
        }
        
    }
    else if(weather.includes('Cloud') || weather.includes("Haze") || weather.includes("Smoke")){
        if((hour)%24>=6 && (hour)%24<=18){
            return <WiCloudy className="cloudyF"/>
        }
        else{
            return <WiNightCloudy className="cloudyF"/>
        }     
    }
    else if(weather.includes("Fog") || weather.includes("Mist")){
        if((hour)%24>=6 && (hour)%24<=18){
            return <WiFog className="fogF"/>
        }
        else{
            return <WiNightFog className="fogF"/>
        }
        
    }
    else if(weather.includes("Thunder")){
        if((hour)%24>=6 && (hour)%24<=18){
            return <WiDayThunderstorm className="thunderF"/>
        }
        else{
            return <WiNightAltThunderstorm className="thunderF"/>
        }
        
    }
    else{
        if((hour)%24>=6 && (hour)%24<=18){
            return <WiDaySnow className="snowyF"/>
        }
        else{
            return <WiNightSnow className="snowyF"/>
        } 
    }
}
