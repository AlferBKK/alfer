import {Sidebar} from "../components/sidebar/sidebar";
import SplineComponent from "../components/spline/spline";
import React from "react";
export default function Home() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white">
        <div className="p-7">
      <h1 className="text-2xl text-black font-semibold">Dashboard</h1>
      <div>Demo Spline</div>
      <SplineComponent/>
    </div>
    </div>
    </div>
    </main>
  );
}