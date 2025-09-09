import { WiHumidity } from "react-icons/wi";

const HumidityCard = ({ humidity }: { humidity: number }) => {
  let color: string = "";
  let desc: string = "";

  if (humidity < 30) {
    color = "text-orange-600";
    desc = "Humidity is below comfort levels.";
  } else if (humidity >= 30 && humidity <= 50) {
    color = "text-green-500";
    desc = "Humidity is within comfort levels.";
  } else if (humidity > 50) {
    color = "text-red-500";
    desc = "Humidity is above comfort levels.";
  }

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title">Humidity</h3>
          <WiHumidity className="w-7 h-7 opacity-70 text-blue-700" />
        </div>
        <p className={"text-3xl font-bold " + color}>{humidity}%</p>
        <p className="text-sm opacity-80">{desc}</p>
      </div>
    </div>
  );
};

export default HumidityCard;
