import { WiBarometer } from "react-icons/wi";

const PressureCard = ({ pressure }: { pressure: number }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title">Pressure</h3>
          <WiBarometer className="w-7 h-7 opacity-70 text-purple-500" />
        </div>
        <p className="text-3xl font-bold">{pressure} hPa</p>
      </div>
    </div>
  );
};

export default PressureCard;
