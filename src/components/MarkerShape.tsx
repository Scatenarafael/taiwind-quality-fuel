import React, { useEffect, useState } from "react";
import { Data, WeaderDataProps, weatherData } from "@/data/weatherData";

interface IMarkerShapeProps {
  weather: Data;
  keyData: string;
  editing: string | null;
  setEditing: (value: string) => void;
}


export function MarkerShape({ weather, keyData, editing, setEditing }: IMarkerShapeProps) {
  const [highlight, setHighlight] = useState<string | null>(null);


  return (
    <div
      className={
        `flex flex-row justify-center items-center
        transition-all duration-700 
        ${highlight === 'Sunny' ? 'bg-amber-400' : (
          highlight === 'Raining' ? 'bg-gray-400' : (
          highlight === 'Cloudy' ? 'bg-blue-400' : 'bg-black')
        )}
          bg-black h-auto w-auto ${highlight !== null ? 'text-2xl' : ''
        } py-3 px-5 rounded-lg text-white text-xs font-bold`
      }
      onClick={() => {
        console.log(highlight)
        highlight === weather.climate ? setHighlight(null) : setHighlight(weather.climate);
      }}
    >
      <div className="w-auto px-5">
        <h2>{weather.climate}</h2>
        <div>{weather.temp}°C</div>
      </div>
      {highlight === weather.climate || editing === keyData ? (
        <div className="flex flex-col justify-center items-center w-auto mx-3">
          <p>Next 5</p>
          <p>{weather.fiveDays.join(", ")}</p>
          <button
          className="bg-gray-400 hover:bg-gray-500 py-2 px-4 mt-3 rounded-full"
            onClick={() => {
              console.log(keyData)
              setEditing(keyData);
            }}
          >
            Details
          </button>
        </div>
      ) : null}
    </div>
  );
}
