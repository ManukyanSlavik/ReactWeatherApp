import type { City } from "../models/City";
import type { WeatherResponse } from "../models/WeatherResponse";

export const fetchGeoData = async (cityName: string) => {
  const result = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=[INSERT YOUR API KEY]`
  )
    .then((response) => {
      const res = response.json();
      return res;
    })
    .then((cities: City[]) => cities);

  return result;
};

export const fetchWeatherData = async (lat: number, lon: number) => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=[INSERT YOUR API KEY]`
  )
    .then((response) => {
      const res = response.json();
      // console.log(res);
      return res;
    })
    .then((weather: WeatherResponse) => {
      console.log(weather);
      return weather;
    });

  return result;
};
