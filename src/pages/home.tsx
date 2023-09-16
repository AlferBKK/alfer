import { Sidebar } from "../components/sidebar/sidebar";
import SplineComponent from "../components/spline/spline";
import Map from 'react-map-gl';
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex w-[100%] bg-white">
          <div className="p-7">
            <h1 className="text-2xl text-black font-semibold">Dashboard</h1>
            <div>Demo Spline</div>
            <SplineComponent />
            <Map
              mapLib={import('mapbox-gl')}
              initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5
              }}
              style={{ width: 600, height: 400 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            />;

          </div>
        </div>
      </div>
    </main>
  );
}