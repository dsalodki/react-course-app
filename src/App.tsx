import CostItem, { CostData } from "./components/CostItem";
import Costs from "./components/Costs";

function App() {

  const costs: Array<CostData>  = [
    new CostData(new Date(2023, 1, 28), 'Холодильник', 999.99),
    new CostData(new Date(2023, 1, 27), 'Шорты', 99.99),
    new CostData(new Date(2023, 1, 26), 'Джинсы', 199.99)
  ]

  return (
<div>
  <h1>Начнём изучение React!</h1>
  <Costs costs={costs}/>
</div>
  );
}

export default App;
