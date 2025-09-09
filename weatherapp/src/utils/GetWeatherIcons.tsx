import {
  WiDayCloudy,
  WiDaySunny,
  WiFog,
  WiRain,
  WiSnow,
  WiSprinkle,
  WiThunderstorm,
} from "react-icons/wi";

const WeatherIcon = ({ weatherId }: { weatherId: number }) => {
  switch (true) {
    case weatherId >= 200 && weatherId <= 232:
      return (
        <WiThunderstorm className="w-12 h-12 opacity-70 text-purple-600" />
      );
    case weatherId >= 300 && weatherId <= 321:
      return <WiSprinkle className="w-12 h-12 text-blue-400" />;
    case weatherId >= 500 && weatherId <= 531:
      return <WiRain className="w-12 h-12 text-blue-600" />;
    case weatherId >= 600 && weatherId <= 622:
      return <WiSnow className="w-12 h-12 text-cyan-400" />;
    case weatherId >= 700 && weatherId <= 781:
      return <WiFog className="w-12 h-12" />;
    case weatherId === 800:
      return <WiDaySunny className="w-12 h-12 text-yellow-600" />;
    case weatherId >= 801 && weatherId <= 804:
      return <WiDayCloudy className="w-12 h-12 text-slate-500" />;
    default:
      <WiDaySunny className="w-12 h-12 text-yellow-600" />;
  }
};

export default WeatherIcon;
