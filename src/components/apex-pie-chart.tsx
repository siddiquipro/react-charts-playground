import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Card from "../base/card";

export default function ApexPieChart() {
  const state = {
    series: [44, 55, 13, 43, 22],
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
    <Card title="Apex Pie Chart">
      <ApexCharts options={state.options} series={state.series} type="pie" width={"100%"} />
    </Card>
  );
}
