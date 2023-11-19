// selectores
let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".WindSpeed");
let input = document.querySelector(".input");
let button = document.querySelector(".btn");
let img = document.querySelector(".weatherIcon");

// function of Weather Check
async function checkWeather(city) {
    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69b87a5434de5c1609526e070478e248&units=metric`);
    var data = await api.json();

    console.log(data.weather);
   console.log(data.weather[0].main);

    cityName.innerText = data.name;
    temp.innerText = Math.floor(data.main.temp) + "°C";
    humidity.innerText = data.main.humidity+ "%";
    windSpeed.innerText =Math.round( data.wind.speed) + "KM/Hr";

    if(data.weather[0].main == "Clouds" && data.weather[0].description == "few clouds"){
        img.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        img.src = "clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        img.src = "mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        img.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        img.src = "rain.png";
    }
    else if(data.weather[0].description == "broken clouds"){
        img.src = "snow.png";
    }
    else if( data.weather[0].main == "Haze"){
        img.src = "mist.png";
        
    }

}

// Event listner 
button.addEventListener("click",() =>{
    let value = input.value;
    checkWeather(input.value);
    
})





