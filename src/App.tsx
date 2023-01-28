import CostItem, { CostData } from "./components/CostItem";

function App() {

  const costs: Array<CostData>  = [
    new CostData(new Date(2023, 1, 28), 'Холодильник', 999.99),
    new CostData(new Date(2023, 1, 27), 'Шорты', 99.99),
    new CostData(new Date(2023, 1, 26), 'Джинсы', 199.99)
  ]

  const costDate = new Date(2023, 1, 28);
const costDescription = 'Холодильник';
const costAmount = 999.99;

  return (
<div>
  <h1>Начнём изучение React!</h1>
  <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}></CostItem>
  <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}></CostItem>
  <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}></CostItem>
</div>
  );
}

export default App;
