import React, { useEffect, useState } from 'react'
import "./Style.css"
import Tempcard from './Tempcard';
const Weathercard = () => {
    var [city,setCity]=useState("ghaziabad");
    const [info,setInfo]=useState({});
    const searchcity=async() => {
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f09898062812ceb458db4b5015cb6c89`
            const res=await fetch(url);
            const data=await res.json();
        
            const {temp,humidity,pressure}=data.main;
            const {country,sunset}=data.sys
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const myNewWeather={
                temp,
                humidity,
                pressure,
                country,
                name,
                sunset,
                speed,
                weathermood,
            };
            setInfo(myNewWeather);
        } catch (error) {
            console.log(error);
            alert("City Not Found");
        }
    }
    useEffect(()=>{
        searchcity();
    },[])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='Enter City' autoFocus id="search" className='searchTerm' value={city}
                    onChange={(e)=>{setCity(e.target.value);}}/>
                    <button type="button" className='searchButton' onClick={searchcity}>SEARCH</button>
                </div>
            </div>
            <Tempcard info={info} />
        </>
    )
}
export default Weathercard;