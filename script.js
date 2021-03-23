const weather = {};
<<<<<<< HEAD
const date = new Date();
const key = "976d88e8699f349aa3435ae965b66663";
const city = document.querySelector("#search");
const btn = document.querySelector("#button");
const unit = document.querySelector("#unit");

const status = document.querySelector("#status");
const locationElement = document.querySelector("#location");
const temperature = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feelslike");
const humidity = document.querySelector("#humidity");
const windspeedElement = document.querySelector("#windspeed");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const dateElement = document.querySelector("#date");

let icons = new Skycons();

icons.set("icon", "clear-day");
icons.play();

btn.addEventListener(`click`, (e) => {
  e.preventDefault();
  getWeather(city.value, unit.value, key);
});

async function getWeather(city, unit, key) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;
  //   console.log(api);
  try {
    let response = await fetch(api);
    let data = await response.json();
    // console.log(data);
    weather.temperature = Math.floor(data.main.temp);
    weather.description = data.weather[0].main;
    weather.icon = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
    weather.feelsLike = Math.floor(data.main.feels_like);
=======
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
>>>>>>> 581cd55c8a7621accf61e519d80f58d1fc3c5447
    weather.humidity = data.main.humidity;
    weather.windSpeed = data.wind.speed;
    weather.sunrise = convertUNIX(data.sys.sunrise);
    weather.sunset = convertUNIX(data.sys.sunset);
<<<<<<< HEAD

    // let currentDate = Math.round(date.getTime() / 1000);

    // if (currentDate > data.sys.sunrise && currentDate < data.sys.sunset) {
    //   weather.image = "sun";
    // } else if (
    //   currentDate < data.sys.sunrise ||
    //   currentDate > data.sys.sunset
    // ) {
    //   weather.image = "moon";
    // }

    console.log(weather);
    console.log(data);

    displayWeather(weather);
  } catch (e) {
    console.log(e);
    displayError();
  }
=======
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
>>>>>>> 581cd55c8a7621accf61e519d80f58d1fc3c5447
}

// CONVERT TIME FROM UNIX

<<<<<<< HEAD
function convertUNIX(timestamp) {
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
=======
convertUNIX = timestamp => {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
>>>>>>> 581cd55c8a7621accf61e519d80f58d1fc3c5447
}

// FORMAT CURRENT DATE

<<<<<<< HEAD
function currentDateFormat(date) {
  const cDay = date.getDay();
  const cDate = date.getDate();
  // const cHours = date.getHours();
  // const cMinutes = date.getMinutes();
  const cMonth = date.getMonth();
  let day = "";
  let month = "";
  switch (cDay) {
=======
currentDateFormat = date => {    
const cDay = date.getDay();
const cDate = date.getDate();
// const cHours = date.getHours();
// const cMinutes = date.getMinutes();
const cMonth = date.getMonth();

switch (cDay) {
>>>>>>> 581cd55c8a7621accf61e519d80f58d1fc3c5447
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
<<<<<<< HEAD
      day = "Tuesday";
=======
       day = "Tuesday";
>>>>>>> 581cd55c8a7621accf61e519d80f58d1fc3c5447
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

<<<<<<< HEAD
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

  const compiledDate = `${day}, ${cDate} ${month}`;
  return compiledDate;
=======
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
>>>>>>> 581cd55c8a7621accf61e519d80f58d1fc3c5447
}

const dateToday = currentDateFormat(date);

// DISPLAY WEATHER TO UI

function displayWeather(e) {
<<<<<<< HEAD
  // DISPLAY PREFERRED UNIT
  let tempUnitDisplay = "";
  let windSpeedUnit = "";

  if (unit.value == "Metric") {
    tempUnitDisplay = "°C";
    windSpeedUnit = "m/s";
  } else if (unit.value == "Imperial") {
    tempUnitDisplay = "°F";
    windSpeedUnit = " miles/hour";
  } else if (unit.value == "Standard") {
    tempUnitDisplay = "K";
    windSpeedUnit = "m/s";
  }

  status.innerHTML = `${e.description}`;
  locationElement.innerHTML = `${e.city}, ${e.country}`;
  temperature.innerHTML = `${e.temperature}${tempUnitDisplay}`;
  feelsLike.innerHTML = `${e.feelsLike}${tempUnitDisplay}`;
  humidity.innerHTML = `${e.humidity}%`;
  windspeedElement.innerHTML = `${e.windSpeed}${windSpeedUnit}`;
  sunrise.innerHTML = `${e.sunrise}`;
  sunset.innerHTML = `${e.sunset}`;
  dateElement.innerHTML = `${dateToday}`;

  displaySkycons();
}

// ERROR
function displayError() {
  status.innerHTML = `Error 405`;
  locationElement.innerHTML = `Bruh`;
  temperature.innerHTML = `TBD`;
  feelsLike.innerHTML = `TBD`;
  humidity.innerHTML = `TBD`;
  windspeedElement.innerHTML = `TBD`;
  sunrise.innerHTML = `TBD`;
  sunset.innerHTML = `TBD`;
  dateElement.innerHTML = `TBD`;
}

// SKYCONS

function displaySkycons() {
  let icons = new Skycons();
  sortSkycons(weather.icon);
  icons.set("icon", weather.out);
  icons.play();
}

function sortSkycons(e) {
  console.log(e);
  switch (e) {
    case "01d":
      weather.out = "clear-day";
      break;
    case "01n":
      weather.out = "clear-night";
      break;
    case "02d":
      weather.out = "partly-cloudy-day";
      break;
    case "02n":
      weather.out = "partly-cloudy-night";
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      weather.out = "cloudy";
      break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
    case "11d":
    case "11n":
      weather.out = "rain";
      break;
    case "13d":
    case "13n":
      weather.out = "snow";
      break;
    case "50d":
    case "50n":
      weather.out = "fog";
      break;
  }
}
=======
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
>>>>>>> 581cd55c8a7621accf61e519d80f58d1fc3c5447
