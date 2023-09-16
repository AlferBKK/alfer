import NameCard from "../../components/profile/name-card/name";
import OfferHistory from "../../components/profile/offer-history/history";
import {Sidebar} from "../../components/sidebar/sidebar";
import React from "react";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
export default function Idea() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white flex-col pt-[5rem] items-center">
        <div className="flex flex-col">
      <h1 className="text-2xl text-black font-semibold">Profile</h1>
      <div className="flex flex-col gap-4 pt-[1rem] justify-center">
      <NameCard/>
      <h1 className="text-2xl text-black font-semibold">ประวัติการส่งข้อเสนอ</h1>
      <OfferHistory/>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}