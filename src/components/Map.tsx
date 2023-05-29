import React, { useEffect, useRef, useState } from "react";
import { Weather } from "./Weather";

export function Map() {
  const [map, setMap] = useState<any>()
  const ref = useRef<any>();


  const mapOptions: google.maps.MapOptions = {
    mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
    center: {lat: 43.66293, lng: -79.39314},
    zoom: 10,
    disableDefaultUI: true
  }

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions))
  }, [])

  return (
    <>
      <div ref={ref} className="h-screen w-full" />
      {map && <Weather map={map} /> }
    </> 
  );
}
