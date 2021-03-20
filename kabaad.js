// () => {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=London&appid=976d88e8699f349aa3435ae965b66663"
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// function getWeather(latitude, longitude) {
//   let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

//   fetch(api)
//     .then(function (response) {
//       let data = response.json();
//       return data;
//     })
//     .then(function (data) {
//       weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//       weather.description = data.weather[0].description;
//       weather.iconId = data.weather[0].icon;
//       weather.city = data.name;
//       weather.country = data.sys.country;
//     })
//     .then(function () {
//       displayWeather();
//     });
// }
`if (output.value !== null || output.value !== undefined) {
  window.reload();
}`;
