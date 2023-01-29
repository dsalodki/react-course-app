import { CostData } from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

  const costs: Array<CostData>  = [
    new CostData(1, new Date(2023, 1, 28), 'Холодильник', 999.99),
    new CostData(2, new Date(2023, 1, 27), 'Шорты', 99.99),
    new CostData(3, new Date(2023, 1, 26), 'Джинсы', 199.99)
  ]

  const addCostHandler = (cost: CostData) => {
    console.log(cost);
  }

  return (
<div>
  <NewCost onAddCost={addCostHandler}/>
  <Costs costs={costs}/>
</div>
  );
}

export default App;
