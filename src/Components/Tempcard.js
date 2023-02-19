import React, { useEffect, useState } from 'react'

const Tempcard = ({info}) => {
    var [mood,setMood]=useState("");
    let sec=info.sunset;
let date=new Date(sec*1000);
let timeStr=`${date.getHours()}:${date.getMinutes()}`
let {weathermood}=info;
useEffect(()=>{
if(weathermood){
    switch(weathermood){
        case "Clouds": setMood("wi wi-day-cloudy");break;
        case "Clear": setMood(" wi wi-day-sunny");break;
        case "Mist": setMood("wi wi-fog");break;
        case "Snow": setMood("wi wi-snow");break;
        case "Smoke": setMood("wi wi-smoke");break;
        case "Haze": setMood("wi wi-day-haze");break;
        default:  setMood(" wi wi-day-sunny");
        break;
    }
}
},[weathermood])
    return (
        <div>
            <div className="widget">
                <div className="weatherIcon"><i className={mood}></i></div>
                <div className="weatherInfo">
                    <div className="temperature"><span>{info.temp}&#8451;</span></div>
                    <div className="description">
                        <div className="weatherCondition">{info.weathermood}</div>
                        <div className="place">{info.name} {info.country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={'wi wi-sunset'}></i></p>
                            <p className="extra-info-leftside">
                                {timeStr} PM<br />
                                sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={'wi wi-sunset'}></i></p>
                            <p className="extra-info-leftside">
                                {info.humidity}<br />
                                humidity
                            </p>
                        </div></div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={'wi wi-sunset'}></i></p>
                            <p className="extra-info-leftside">
                                {info.pressure}<br />
                                pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={'wi wi-sunset'}></i></p>
                            <p className="extra-info-leftside">
                                {info.speed}<br />
                                speed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tempcard;
