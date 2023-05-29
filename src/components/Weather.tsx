import { Data, WeaderDataProps, weatherData } from "@/data/weatherData";
import React, { useState } from "react";
import { Marker } from "./Marker";
import { MarkerShape } from "./MarkerShape";
import { Editing } from "./Editing";

interface IWeatherProps {
  map: any;
}

export function Weather({ map }: IWeatherProps) {
  const [data, setData] = useState<any>(weatherData);
  const [highlight, setHighlight] = useState("");
  const [editing, setEditing] = useState<string | null>(null);

  return (
    <>
      {editing && (
        <Editing
          weather={data[editing]}
          update={(newWeather) => {
            setData((oldState: WeaderDataProps) => {
              return { ...oldState, [editing]: { ...newWeather } };
            });
          }}
          close={() => setEditing(null)}
        />
      )}
      {Object.entries(data as WeaderDataProps).map(([key, weather]) => {
        return (
          <Marker key={key} map={map} position={weather.position}>
            <MarkerShape
              keyData={key}
              weather={weather}
              editing={editing}
              setEditing={setEditing}
            />
          </Marker>
        );
      })}
    </>
  );
}
