import { WiStrongWind } from "react-icons/wi";

const degToCompass = (degree: number) => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(degree / 22.5) % 16;
  return directions[index];
};

const WindCard = ({
  windSpeed,
  degree,
}: {
  windSpeed: number;
  degree: number;
}) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title">Wind</h3>
          <WiStrongWind className="w-7 h-7 opacity-70 text-green-500" />
        </div>
        <p className="text-3xl font-bold">{windSpeed} m/s</p>
        <p className="text-sm opacity-80">
          Direction: {degree}° {degToCompass(degree)}
        </p>
      </div>
    </div>
  );
};

export default WindCard;
