import React, { useState } from 'react';
import styles from "../Weather/Weather.css";
import search1 from "../Assets/search.png"
import cloud from "../Assets/cloud.png"
import clear from "../Assets/clear.png"
import drizzle from "../Assets/drizzle.png"
import humidity from "../Assets/humidity.png"
import rain from "../Assets/rain.png"
import snow from "../Assets/snow.png"
import windi from "../Assets/windi.png"
const Weather = () => {

    let api_key="852277f6e4bba4b408b56d857d62774e";

    const[wicon,setWicon] =useState(cloud);
    
    const search = async ()=>{
        const element =document.getElementsByClassName("cityInput")
        if (element[0].value==="")
        {
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response =await fetch(url);
        let data = await response.json();
        const humidity =document.getElementsByClassName("humidityPercent");
        const wind=document.getElementsByClassName("windRate");
        const temprature=document.getElementsByClassName("weatherTemp");
        const location=document.getElementsByClassName("weatherLocation");

        humidity[0].innerHTML =data.main.humidity+"%";
        wind[0].innerHTML= Math.floor(data.wind.speed)+"km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
        location[0].innerHTML= data.name;

        if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n")
        {
            setWicon(clear);

        }
        else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n")
        {
            setWicon(cloud);

        }
        else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n")
        {
            setWicon(drizzle);

        }
        else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n")
        {
            setWicon(drizzle);

        }
        else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n")
        {
            setWicon(rain);

        }
        else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n")
        {
            setWicon(rain);

        }
        else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n")
        {
            setWicon(snow);

        }
        else
        {
            setWicon(clear);
        }
    }
    return (
        <div className="bg1">
            <div className="container">
                <div className="topbar">
                <input type='text' className="cityInput" placeholder='Search ...'/>
                <div onClick={()=> { search() } } className="searchIcon">
                    <img src={search1} alt="searchicon" />
                </div>

                </div>
                <div className="weatherImg">
                    <img src={wicon} alt='cloud'  />
                </div>
                <div className="weatherTemp">24°c</div>
                <div className="weatherLocation">London</div>
                <div className="dataContainer">
                  <div  className="element">

                    <img src={humidity} alt='' className="icon"/>
                    <div className="data">
                        <div className="humidityPercent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                  </div>

                  <div className="element">

                    <img src={windi} alt='' className="icon"/>
                    <div className="data">
                        <div className="windRate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                  </div>


                </div>
            </div>
        </div>
    );
};

export default Weather;