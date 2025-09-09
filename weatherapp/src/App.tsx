import { useState } from "react";
import "./App.css";
import SearchResults from "./components/SearchBar/SearchResults";
import type { City } from "./models/City";
import SearchBar from "./components/SearchBar/SearchBar";
import type { WeatherResponse } from "./models/WeatherResponse";
import CardsArray from "./components/WeatherCards/CardsArray";

function App() {
  const [results, setResults] = useState<City[]>([]);
  const [input, setInput] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [weather, setWeather] = useState<WeatherResponse[]>([]);

  return (
    <>
      <div className="mt-3 mb-10 grid justify-items-center gap-2">
        <SearchBar
          setResults={setResults}
          input={input}
          setInput={setInput}
          setFocused={setFocused}
        />
        <SearchResults
          results={results}
          setInput={setInput}
          setFocused={setFocused}
          setWeather={setWeather}
          isFocused={isFocused}
          weather={weather}
        ></SearchResults>
      </div>
      {weather && <CardsArray weather={weather} />}
    </>
  );
}

export default App;
