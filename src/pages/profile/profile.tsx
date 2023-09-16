import NameCard from "../../components/profile/name-card/name";
import {Sidebar} from "../../components/sidebar/sidebar";
import React from "react";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
export default function Idea() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white flex-col pt-[5rem] items-center">
        <div className="flex flex-col ">
      <h1 className="text-2xl text-black font-semibold">Profile</h1>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4 pt-[1rem]">
      <NameCard/>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}