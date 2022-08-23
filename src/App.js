
import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Input from './components/Input';
import Display from './components/display';
import Details from './components/Details';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect,useState } from 'react';

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {


      await getFormattedWeatherData({ ...query, units }).then((data) => {


        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 py-5 bg-emerald-900 h-fit rounded-xl">
        <TopButtons setQuery={setQuery}/>
        <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <Display wea={weather} />
          <Details wea={weather} units={units} />
        </div>
      )}
 
    </div>
  );
}

export default App;
