const inputBox =document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');



 async function checkWeather( city){
    const api_key = "23067cc421e3c0bbb6e2eff33837cbf8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =  await fetch(`${url}`).then(respons => respons.json());


if(weather_data.cod === `404`){

    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
}
     console.log("run");
     location_not_found.style.display = "none";
     weather_body.style.display = "flex";


    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;


    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;


     switch( weather_data.weather[0].main){

        case 'Clouds':
            weather_img.src = "cloud.png";
        break;

        case 'Clear':
            weather_img.src = "clear.png";
        break;

        case 'Rain':
            weather_img.src = "rain.png";
            break;

        case 'Mist':
            weather_img.src = "mist.png";
            break;
            
         case 'Snow':
            weather_img.src = "snow.png";
            break;    

     }
     console.log(weather_data);

}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
   inputBox.innerText = "";
})