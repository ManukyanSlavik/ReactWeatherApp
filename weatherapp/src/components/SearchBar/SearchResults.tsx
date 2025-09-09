import type { City } from "../../models/City";
import type { WeatherResponse } from "../../models/WeatherResponse";
import { fetchWeatherData } from "../../services/WeatherService";

interface Props {
  results: City[];
  setInput: (input: string) => void;
  setFocused: (val: boolean) => void;
  setWeather: (weather: WeatherResponse[]) => void;
  isFocused: boolean;
  weather: WeatherResponse[];
}

const SearchResults = ({
  results,
  setInput,
  setFocused,
  setWeather,
  isFocused,
  weather,
}: Props) => {
  if (!isFocused) return null;

  const handleSelect = async (lat: number, lon: number) => {
    const res = await fetchWeatherData(lat, lon);
    const filtered = weather.filter((obj) => obj.id !== res.id);
    setWeather([res, ...filtered]);
  };

  return (
    <ul className="w-60 overflow-auto bg-base-200 border border-base-300 rounded-lg shadow-lg">
      {results.map((city) => (
        <li
          className="px-4 py-2
        text-sm text-base-content
        hover:bg-primary hover:text-primary-content
        cursor-pointer transition-colors"
          key={`${city.name}-${city.lon}-${city.lat}-${city.state}`}
          onMouseDown={() => {
            setInput(
              city.state
                ? `${city.name}, ${city.country}, ${city.state}`
                : `${city.name}, ${city.country}`
            );
            setFocused(false);
            handleSelect(city.lat, city.lon);
          }}
        >
          {city.name}
          {city.state ? `, ${city.state}` : ""}, {city.country}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
