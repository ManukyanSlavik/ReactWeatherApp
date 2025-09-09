export const convertToFahrenheit = (temp: number) => {
  return ((temp - 273.15) * 9) / 5 + 32;
};
export const convertToCelsius = (temp: number) => {
  return temp - 273.15;
};
