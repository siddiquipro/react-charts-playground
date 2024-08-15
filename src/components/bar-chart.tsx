import Card from "../base/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, type TooltipProps } from "recharts";
import { type NameType, type ValueType } from "recharts/types/component/DefaultTooltipContent";

import { pageData } from "../data";

export default function MyBarChart() {
  return (
    <Card title="Bar Chart">
      <div className="w-full h-72  text-xs ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={pageData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#aaa" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ fill: "#ddd", opacity: 0.4 }} content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={40} />
            <Bar dataKey="pv" name="My PV Data" fill="#00ff66">
              <LabelList position="top" dataKey="pv" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-xl">
        <p className="font-bold">{`${label} : ${payload[0].value}`}</p>
        <p className="font-semibold">Intro of {label} </p>
        <p className="text-gray-500">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
