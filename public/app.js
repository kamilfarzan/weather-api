// GETTING THE KEY FROM key.txt
const key = {};
fetch("/resources/key.txt")
  .then((e) => e.text())
  .then((data) => {
    key.pass = data;
  });

// GLOBAL VARIABLES
const weather = {};
weather.temperature = {
  unit: "°C",
};
const output = document.querySelector(".output");
const KELVIN = 273;
const input = document.querySelector(".inputkardo");
const btn = document.querySelector("button");

// BUTTON EVENT LISTENER
btn.addEventListener(`click`, () => {
  getWeather(input.value, key.pass);
});

// GET WEATHER FUNCTION
function getWeather(input, key) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`;

  fetch(api)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      weather.city = data.name;
      weather.description = data.weather[0].main;
      weather.temperature.value = Math.floor(data.main.temp);
      weather.temperature.feelsLike = data.main.feels_like;
      weather.humidity = data.main.humidity;
      weather.country = data.sys.country;
      displayWeather(weather);
    })
    .catch(console.error("Maybe Error? If not, ignore..."), displayError());
}

// DISPLAY WEATHER FUNCTION
function displayWeather(e) {
  output.innerHTML = `${e.city}, ${e.country}. ${e.description}. Humidity is at ${e.humidity}%. Temperature is ${e.temperature.value}°C and feels like ${e.temperature.feelsLike}°C.`;
}

// ON ERROR FUNCTION
function displayError() {
  output.innerHTML = " ";
}
