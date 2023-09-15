import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, PieChart, Pie, Label } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];


export default function PieChartAnalyze() {
    return (
      <div className="w-full max-w-md max-h-md rounded-xl border-gray-900 border-[0.1rem] p-4 ">
      <div className="bg-white">
          <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-2">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              PieGraph
            </h1>
            <p className="mt-2 max-w-xl text-sm text-gray-700">
              Last update: September 16, 2023
            </p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#16A34A"
                label
              />
              <Label value="Pages of my website" offset={0} position="insideBottomRight" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        </div>
    );
}