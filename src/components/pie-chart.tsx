import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Card from "../base/card";
import { pageData } from "../data";

export default function MyPieChart() {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <Card title="Pie Chart">
      <div className="w-full h-72  text-xs ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={500}>
            <Pie dataKey="amt" data={pageData} label outerRadius={100} fill="#8884d8">
              {pageData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
