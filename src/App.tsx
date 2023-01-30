import { FC, useState } from "react";
import { CostData } from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS: CostData[] = [
  new CostData(1, new Date(2023, 1, 28), "Холодильник", 999.99),
  new CostData(2, new Date(2023, 1, 27), "Шорты", 99.99),
  new CostData(3, new Date(2023, 1, 26), "Джинсы", 199.99),
];

const App:FC = () => {
  const [costs, setCosts] = useState<CostData[]>(INITIAL_COSTS);

  const addCostHandler = (cost: CostData) => {
    setCosts((prevCosts: CostData[]) => { return [cost, ...prevCosts]});
    // setCosts((prevCosts: CostData[]) => {
    //   prevCosts.unshift(cost);
    //   console.log(prevCosts);
    //   return prevCosts;
    // });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;