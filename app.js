require("dotenv").config();
const key = process.env.API_KEY;

const weather = {};
weather.temperature = {
  unit: "°C",
};
const output = document.querySelector(".output");
const KELVIN = 273;

const input = document.querySelector(".inputkardo");
const btn = document.querySelector("button");
btn.addEventListener(`click`, () => {
  getWeather(input.value, key);
});

function getWeather(input, key) {
  console.log(input);
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`;
  console.log(api);
  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      weather.city = data.name;
      weather.description = data.weather[0].main;
      weather.temperature.value = Math.floor(data.main.temp);
      weather.temperature.feelsLike = data.main.feels_like;
      weather.humidity = data.main.humidity;
      weather.country = data.sys.country;
      console.log(data);
      console.log(weather);
      displayWeather(weather);
    })
    .catch(console.log("Error aa raha bhy"), errorMoment());
}

function displayWeather(e) {
  output.innerHTML = `City of ${e.city}, ${e.country}. ${e.description}. Humidity is at ${e.humidity}%. Temperature is ${e.temperature.value}°C and feels like ${e.temperature.feelsLike}°C.`;
}
function errorMoment() {
  output.innerHTML = "";
}
