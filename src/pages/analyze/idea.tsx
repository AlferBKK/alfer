import PieChartAnalyze from "@/components/analyze/piechart/PieChart";
import RadarAnalyze from "@/components/analyze/radarchart/Radarchart";
import {Sidebar} from "@/components/sidebar/sidebar";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
export default function Idea() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white flex-col pt-[5rem] items-center">
        <div className="flex flex-col ">
      <h1 className="text-2xl text-black font-semibold">สถิติข้อเสนอ</h1>
      <div className="flex flex-row gap-4 pt-[1rem]">
      <PieChartAnalyze/>
      <RadarAnalyze/>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}