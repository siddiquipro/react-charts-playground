import ApexBarChart from "./components/apex-bar-chart";
import ApexPieChart from "./components/apex-pie-chart";
import BarChart from "./components/bar-chart";
import PieChart from "./components/pie-chart";

function App() {
  return (
    <main className="grid gap-4 pb-20">
      <h1 className="text-2xl font-bold my-6">Experimenting with React</h1>
      <BarChart />
      <PieChart />
      <ApexPieChart />
      <ApexBarChart />
    </main>
  );
}

export default App;
