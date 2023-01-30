import { FC, ReactElement, useState } from "react";
import Card from "../UI/Card";
import CostItem, { CostData } from "./CostItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";

export interface ICosts {
  costs: CostData[];
}

const Costs: FC<ICosts> = (props: ICosts) => {
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  const yearChangeHandler = (year: number) => {
    setSelectedYear(year);
  };

  const filterCosts = props.costs.filter((cost: CostData) => {
    return cost.date.getFullYear() == selectedYear;
  });

  let costsContent: ReactElement[] = [<p>В этом году нет расходов</p>];
  if (filterCosts.length > 0) {
    costsContent = filterCosts.map((cost: CostData) => (
      <CostItem
        key={cost.id}
        id={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {costsContent}
      </Card>
    </div>
  );
};

export default Costs;
