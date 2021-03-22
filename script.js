const weather = {};
const date = new Date;
// var d = new Date(2018, 11, 24, 10, 33, 30, 0);
const key = "&appid=976d88e8699f349aa3435ae965b66663";

const output = document.querySelector(".output");
const city = document.querySelector("#city");
const unit = document.querySelector("#unit")
const btn = document.querySelector(".enterbtn");

btn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather(city.value, unit.value, key);
    }
});

btn.addEventListener(`click`, (e) => {
    e.preventDefault();
    getWeather(city.value, unit.value, key);
});

async function getWeather(city, unit, key) {

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}${key}&units=${unit}`;
  console.log(api);

  try {
    let response = await fetch(api);
    let data = await response.json();
    console.log(data)

    weather.temperature = data.main.temp;
    weather.description = data.weather[0].description;
    weather.city = data.name;
    weather.country = data.sys.country;
    weather.feelsLike = data.main.feels_like;
    weather.humidity = data.main.humidity;
    weather.windSpeed = data.wind.speed;
    weather.sunrise = convertUNIX(data.sys.sunrise);
    weather.sunset = convertUNIX(data.sys.sunset);
    let currentDate = Math.round(date.getTime()/1000);

    if (currentDate > data.sys.sunrise && currentDate < data.sys.sunset) {
        weather.image = 'sun';
    } else if (currentDate < data.sys.sunrise || currentDate > data.sys.sunset) {
        weather.image = 'moon';
    }

    console.log(weather);
    console.log(data);
    displayWeather(weather);
    }

    catch (e) {
        console.log(e);
        displayError();
    }
}

// DISPLAY PREFERRED UNIT

let tempUnitDisplay = '';
let windSpeedUnit = '';

if (unit.value == 'metric') {
    tempUnitDisplay = '°C';
    windSpeedUnit = 'm/s'
} else if (unit.value == 'imperial') {
    tempUnitDisplay = '°F';
    windSpeedUnit = 'miles/hour'
} else {
    tempUnitDisplay = 'K';
    windSpeedUnit = 'm/s'
}

// CONVERT TIME FROM UNIX

convertUNIX = timestamp => {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

// FORMAT CURRENT DATE

currentDateFormat = date => {    
const cDay = date.getDay();
const cDate = date.getDate();
// const cHours = date.getHours();
// const cMinutes = date.getMinutes();
const cMonth = date.getMonth();

switch (cDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

switch (cMonth) {
    case 0:
        month = "Jan";
        break;
    case 1:
        month = "Feb";
        break;
    case 2:
        month = "Mar";
        break;
    case 3:
        month = "Apr";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "Jun";
        break;
    case 6:
        month = "Jul";
        break;
    case 7:
        month = "Aug";
        break;
    case 8:
        month = "Sep";
        break;
    case 9:
        month = "Oct";
        break;
    case 10:
        month = "Nov";
        break;
    case 11:
        month = "Dec";
        break;
}

const compiledDate = `${day}, ${cDate} ${month}`
return compiledDate;
}

const dateToday = currentDateFormat(date);

// DISPLAY WEATHER TO UI

function displayWeather(e) {
    output.innerHTML = 
    `<div class="cont-loc">
        <div class="user-loc">
            <p class = "location">${e.city}, ${e.country}</p>
            <p class="dateToday">${dateToday}</p>
        </div>
        <div class="tempDisplay">
        <figure class="icons">
            <canvas id="icon" width="64" height="64"></canvas>
        </figure>
        <figure class="icons">
            <canvas id="icon" width="64" height="64"></canvas>
        </figure>
            ${e.temperature} ${tempUnitDisplay}
        </div>
    </div>
    <div class="info">
        <div><span>Humidity<p>${e.humidity}%</span></div>
        <div>Wind Speed<p>${e.windSpeed} ${windSpeedUnit}</span></div>
        <div>Sunrise<p>${e.sunrise}</span></div>
        <div>Sunset<p>${e.sunset}</span></div>
    </div>
    <div class="description"><p>${e.description}</p>
    <p style="font-size: 1.5vw; margin-top: 1.5vh;">Feels like ${e.feelsLike}°</p></div>`;
}


// ERROR 
function displayError() {
    output.innerHTML = `<div class="error">Error 404</div>`;
}

// SKYCONS 

let icons = new Skycons({"color": "white"});

icons.set("icon", "clear-day");
// icons.set("clear-night", Skycons.CLEAR_NIGHT);
// icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
// icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
// icons.set("cloudy", Skycons.CLOUDY);
// icons.set("rain", Skycons.RAIN);
// icons.set("sleet", Skycons.SLEET);
// icons.set("snow", Skycons.SNOW);
// icons.set("wind", Skycons.WIND);
// icons.set("fog", Skycons.FOG);

icons.play();