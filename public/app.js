// GLOBAL VARIABLES

const key = {};
const weather = {};
weather.temperature = {
  unit: "°C",
};
const output = document.querySelector(".output");
const input = document.querySelector(".inputkardo");
const btn = document.querySelector(".button");

// GETTING THE KEY FROM key.txt {IIFE}

(async function fetchPass() {
  try {
    let e = await fetch("/resources/key.txt");
    let data = await e.text();
    key.pass = data;
  } catch (e) {
    console.log(e, "Error in fetch the password!");
    displayError();
  }
})();

// BUTTON EVENT LISTENER

btn.addEventListener(`click`, (e) => {
  e.preventDefault();
  getWeather(input.value, key.pass);
});

// GET WEATHER FUNCTION

function getWeather(input, key) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`;

  // FETCH FUNCTION {IIFE}

  (async function fetchFunction() {
    try {
      let response = await fetch(api);
      let data = await response.json();
      weather.city = data.name;
      weather.description = data.weather[0].main;
      weather.temperature.value = Math.floor(data.main.temp);
      weather.temperature.feelsLike = data.main.feels_like;
      weather.humidity = data.main.humidity;
      weather.country = data.sys.country;
      displayWeather(weather);
    } catch (e) {
      console.log("Error in fetching the data! Place not found?");
      displayError();
    }
  })();
}

// DISPLAY WEATHER FUNCTION

function displayWeather(e) {
  output.innerHTML = `${e.city}, ${e.country}. ${e.description}. Humidity is at ${e.humidity}%. Temperature is ${e.temperature.value}°C and feels like ${e.temperature.feelsLike}°C.`;
}

// ON ERROR FUNCTION

function displayError() {
  output.innerHTML = "Error 404 Moment!";
}
