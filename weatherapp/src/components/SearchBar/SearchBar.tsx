import type { City } from "../../models/City";
import { fetchGeoData } from "../../services/WeatherService";

interface Props {
  setResults: (cities: City[]) => void;
  setInput: (input: string) => void;
  setFocused: (val: boolean) => void;
  input: string;
}

const SearchBar = ({ setResults, input, setInput, setFocused }: Props) => {
  const fetchData = async (input: string) => {
    if (input) {
      setResults(await fetchGeoData(input));
    }
  };

  const handleChange = (val: string) => {
    setInput(val);
    fetchData(val);
  };

  return (
    <div>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="w-50"
          placeholder="Search for a City"
          value={input}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </label>
    </div>
  );
};

export default SearchBar;
