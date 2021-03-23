const weather = {};
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

let icons = new Skycons({color: '#E4D8D8'});

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
    weather.humidity = data.main.humidity;
    weather.windSpeed = data.wind.speed;
    weather.sunrise = convertUNIX(data.sys.sunrise);
    weather.sunset = convertUNIX(data.sys.sunset);

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
}

// CONVERT TIME FROM UNIX

function convertUNIX(timestamp) {
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}

// FORMAT CURRENT DATE

function currentDateFormat(date) {
  const cDay = date.getDay();
  const cDate = date.getDate();
  // const cHours = date.getHours();
  // const cMinutes = date.getMinutes();
  const cMonth = date.getMonth();
  let day = "";
  let month = "";
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

  const compiledDate = `${day}, ${cDate} ${month}`;
  return compiledDate;
}

const dateToday = currentDateFormat(date);
dateElement.innerHTML = `${dateToday}`

// DISPLAY WEATHER TO UI

function displayWeather(e) {
  // DISPLAY PREFERRED UNIT
  let tempUnitDisplay = "";
  let windSpeedUnit = "";

  if (unit.value == "Metric") {
    tempUnitDisplay = "°C";
    windSpeedUnit = "m/s";
  } else if (unit.value == "Imperial") {
    tempUnitDisplay = "°F";
    windSpeedUnit = " mph";
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
  
  displaySkycons(weather.icon);
}

// ERROR
function displayError() {
  status.innerHTML = `Error 405`;
  locationElement.innerHTML = `Location not found`;
  temperature.innerHTML = `TBD`;
  feelsLike.innerHTML = `TBD`;
  humidity.innerHTML = `TBD`;
  windspeedElement.innerHTML = `TBD`;
  sunrise.innerHTML = `TBD`;
  sunset.innerHTML = `TBD`;
  dateElement.innerHTML = `${dateToday}`;
  displaySkycons("Error");
}

// SKYCONS

function displaySkycons(f) {
  let icons = new Skycons({color: '#E4D8D8'});
  sortSkycons(f);
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
    case "Error":
      weather.out = "wind";
  }
}
