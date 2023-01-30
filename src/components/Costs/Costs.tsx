import { FC, ReactElement, useState } from "react";
import Card from "../UI/Card";
import CostItem, { CostData } from "./CostItem";
import CostList from "./CostList";
import "./Costs.css";
import CostsDiagram from "./CostsDiagram";
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

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filterCosts}/>
        <CostList costs={filterCosts} />
      </Card>
    </div>
  );
};

export default Costs;
