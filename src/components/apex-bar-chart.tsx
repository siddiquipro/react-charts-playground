import ApexCharts from "react-apexcharts";
import Card from "../base/card";
import { ApexOptions } from "apexcharts";

export default function ApexBarChart() {
  const state = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 13, 43, 22],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ["#a70000", "#ff0000", "#ff5252", "#ff7b7b", "#ffbaba"],
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      legend: {
        position: "bottom" as const,
      },
    } satisfies ApexOptions,
  };
  return (
    <Card title="Apex Bar Chart">
      <ApexCharts options={state.options} series={state.series} type="bar" width={"100%"} />
    </Card>
  );
}
