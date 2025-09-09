import type { WeatherResponse } from "../../models/WeatherResponse";
import TempCard from "./TempCard";
import HumidityCard from "./HumidityCard";
import WindCard from "./WindCard";
import PressureCard from "./PressureCard";
import WeatherIcon from "../../utils/GetWeatherIcons";

const CardsArray = ({ weather }: { weather: WeatherResponse[] }) => {
  return (
    <div className="mb-10 h-full overflow-auto">
      {weather.map((w) => (
        <section key={w.id} className="w-full max-w-5xl mx-auto p-4">
          <div className="mb-4 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <WeatherIcon weatherId={w.weather[0].id}></WeatherIcon>
              <div>
                <h2 className="text-2xl font-semibold">{w.name}</h2>
                <p className="text-sm opacity-80 capitalize">
                  {w.weather[0].description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <TempCard
              temp={w.main.temp}
              temp_min={w.main.temp_min}
              temp_max={w.main.temp_max}
            />
            <HumidityCard humidity={w.main.humidity} />
            <WindCard windSpeed={w.wind.speed} degree={w.wind.deg} />
            <PressureCard pressure={w.main.pressure} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default CardsArray;
