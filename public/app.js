// GETTING THE KEY FROM key.txt
const key = {};

async function fetchPass() {
  try {
    let e = await fetch("/resources/key.txt");
    let data = await e.text();
    key.pass = data;
  } catch (e) {
    console.error(e, "Error in fetch the password!");
  }
}
fetchPass();
// fetch("/resources/key.txt")
//   .then((e) => e.text())
//   .then((data) => {
//     key.pass = data;
//   });

// GLOBAL VARIABLES
const weather = {};
weather.temperature = {
  unit: "°C",
};
const output = document.querySelector(".output");
const KELVIN = 273;
const input = document.querySelector(".inputkardo");
const btn = document.querySelector(".button");

// BUTTON EVENT LISTENER
btn.addEventListener(`click`, (e) => {
  e.preventDefault();
  getWeather(input.value, key.pass);
});

// GET WEATHER FUNCTION
function getWeather(input, key) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`;

  async function fetchFunction() {
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

    // fetch(api)
    // .then((response) => {s
    //   let data = await response.json();
    //   return data;
    // })
    // .then((data) => {
    //   weather.city = data.name;
    //   weather.description = data.weather[0].main;
    //   weather.temperature.value = Math.floor(data.main.temp);
    //   weather.temperature.feelsLike = data.main.feels_like;
    //   weather.humidity = data.main.humidity;
    //   weather.country = data.sys.country;
    //   displayWeather(weather);
    // })
  }
  fetchFunction();
}

// DISPLAY WEATHER FUNCTION
function displayWeather(e) {
  output.innerHTML = `${e.city}, ${e.country}. ${e.description}. Humidity is at ${e.humidity}%. Temperature is ${e.temperature.value}°C and feels like ${e.temperature.feelsLike}°C.`;
}

// ON ERROR FUNCTION
function displayError() {
  output.innerHTML = "Error 404 Moment!";
}
