import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, PieChart } from 'recharts';

const dataset = [
  {
    subject: 'ความปลอดภัย',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'การเดินทาง',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'สิ่งแวดล้อม',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'การศึกษา',
    A: 99,
    B: 100,
    fullMark: 150,
  },
];

export default function RadarAnalyze() {
    return (
        <div className="w-[30rem] max-w-md max-h-md rounded-xl border-gray-900 border-[0.1rem] p-4 ">
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-2">
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                RadarChart
              </h1>
              <p className="mt-2 max-w-xl text-sm text-gray-700">
                Last update: September 16, 2023
              </p>
            </div>
            <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataset}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
          </div>
          </div>
      );
}
