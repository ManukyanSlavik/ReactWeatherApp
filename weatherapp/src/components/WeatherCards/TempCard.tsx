import { WiThermometer } from "react-icons/wi";
import {
  convertToCelsius,
  convertToFahrenheit,
} from "../../utils/TempConverter";

interface Props {
  temp: number;
  temp_min: number;
  temp_max: number;
}

const TempCard = ({ temp, temp_min, temp_max }: Props) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title">Temperature</h3>
          <WiThermometer className="w-7 h-7 opacity-70 text-red-500"></WiThermometer>
        </div>
        <p className="text-3xl font-bold">
          {Math.trunc(convertToCelsius(temp))}°C{" "}
          <span className="opacity-60">
            / {Math.trunc(convertToFahrenheit(temp))}°F
          </span>
        </p>
        <div className="text-sm opacity-80 mt-2 space-y-1">
          <p>
            Min: {Math.trunc(convertToCelsius(temp_min))}°C /{" "}
            {Math.trunc(convertToFahrenheit(temp_min))}°F
          </p>
          <p>
            Max: {Math.trunc(convertToCelsius(temp_max))}°C /{" "}
            {Math.trunc(convertToCelsius(temp_max))}°F
          </p>
        </div>
      </div>
    </div>
  );
};

export default TempCard;
