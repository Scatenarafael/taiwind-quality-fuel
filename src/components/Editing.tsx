import { Data } from "@/data/weatherData";
import React from "react";

export interface IEditingProps {
  weather: any;
  update: (newWeather: Data) => void;
  close: () => void;
}

export function Editing({ weather, update, close }: IEditingProps) {
  return (
    <div className="bg-gray-800 p-5 rounded-lg text-white absolute top-12 right-4 flex flex-col gap-3">
      <h2>Editing {weather.name}</h2>

      <label>Climate</label>
      <select
        id="climate"
        value={weather.climate}
        onChange={(e) => update({ ...weather, climate: e.target.value })}
        className="text-gray-700 font-bold py-1"
      >
        {["Sunny", "Cloudy", "Raining"].map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>

      <label htmlFor="temp">Temperature</label>

      <input
        id="temp"
        type="number"
        value={weather.temp}
        onChange={(e) => update({ ...weather, temp: e.target.value })}
        className="text-gray-700 font-bold px-2 py-1"
      />

      <button onClick={() => close()} className="bg-amber-300 text-black font-bold py-2 rounded-lg">Close</button>
    </div>
  );
}
